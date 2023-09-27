import React from 'react';

export default function OrderProductList({ products }) {
  return (
    <div className="col-span-full lg:col-span-1 xl:col-span-3 flex flex-col items-center mb-6 bg-[#f9f9f9] py-14 px-10">
      <p className="text-2xl font-bold pb-4">주문 상품</p>
      {products &&
        products.map((product) => (
          <p key={product.id}>
            {product.title} - {product.quantity}
          </p>
        ))}
    </div>
  );
}
