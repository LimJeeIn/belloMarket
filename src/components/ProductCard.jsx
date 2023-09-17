import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li className="overflow-hidden cursor-pointer">
      <button
        onClick={() => {
          navigate(`/products/${id}`, { state: { product } });
        }}
      >
        <img className="w-full" src={image} alt={title} />
        <div className=" py-4 px-3 flex justify-between items-center text-sm leading-normal font-semibold">
          <h3 className="truncate">{title}</h3>
          <p>{`₩${price}`}</p>
        </div>
      </button>
    </li>
  );
}
