import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-2xl" />
      {products && (
        <p className="w-6 h-6 text-center font-bold rounded-full absolute top-[-0.7rem] right-[-0.7rem]">
          {products.length}
        </p>
      )}
    </div>
  );
}
