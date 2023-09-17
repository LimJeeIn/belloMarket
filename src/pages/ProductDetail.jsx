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
      <section className="flex flex-row pt-12 pb-12 pl-24 pr-24 h-screen max-w-1620 gap-16 mx-auto">
        <img
          className="w-100 h-100 object-cover px-4 basis-7/12"
          src={image}
          alt={title}
        />
        <div className="w-full basis-5/12 flex flex-col pt-8 pr-4 pb-0 pl-8">
          <p className="mt-4 text-gray-700 text-sm leading-normal font-semibold">
            {category}
          </p>
          <h2 className="pt-2 leading-normal text-3xl font-bold uppercase">
            {title}
          </h2>

          <p className="text-1xl font-bold py-2 border-b border-gray-400">
            ₩{price}
          </p>
          <p className="py-4 text-1xl">{description}</p>
          <div className="flex items-center">
            <p className="text-brand font-bold">SIZE : </p>
            {options &&
              options.map((option, index) => (
                <label
                  key={index}
                  className="m-4 text-lg leading-normal font-semibold"
                >
                  <input
                    type="radio"
                    name="options"
                    value={option}
                    checked={selected === option}
                    onChange={handleSelect}
                    className="mr-2"
                  />
                  {`${option}`}
                </label>
              ))}
          </div>
          {success && <p className="my-2">{success}</p>}
          <Button text="ADD TO CART" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
