import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가 되었습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  return (
    <>
      <section className="md:flex flex-row pt-12 pb-12 pl-4 pr-4 md:pl-24 md:pr-24 h-screen max-w-1620 gap-16 mx-auto">
        <div className="lg:flex w-full space-x-16">
          <img
            className="w-full md:w-full lg:w-1/2 object-top object-contain px-4"
            src={image}
            alt={title}
          />
          <div className="mt-1 md:w-full w-1/2 flex flex-col object-top pr-4 pb-0 pl-8">
            <p className="text-gray-700 text-sm leading-normal font-semibold">
              {category}
            </p>
            <h2 className="pt-2 leading-normal text-xl font-bold uppercase">
              {title}
            </h2>

            <p className="text-lg font-semibold py-2 border-b border-gray-400">
              ₩{price}
            </p>
            <p className="py-4 text-sm">{description}</p>
            <div className="flex items-center mb-8">
              <p className="text-brand font-semibold">SIZE : </p>
              {options &&
                options.map((option) => (
                  <label
                    key={option}
                    className="m-r4 text-base leading-normal font-semibold"
                  >
                    <input
                      type="radio"
                      name="options"
                      value={option}
                      checked={selected === option}
                      onChange={handleSelect}
                      className="mx-4"
                    />
                    {`${option}`}
                  </label>
                ))}
            </div>
            {success && <p>{success}</p>}
            <Button text="ADD TO CART" onClick={handleClick} />
          </div>
        </div>
      </section>
    </>
  );
}
