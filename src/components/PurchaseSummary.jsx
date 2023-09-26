import React from 'react';
import PriceCard from '../components/PriceCard';

const SHIPPING = 3000;

export default function PurchaseSummary({ totalPrice, onCheckout, children }) {
  return (
    <div className="col-span-full lg:col-span-1 xl:col-span-3 flex flex-col items-center mb-6 bg-[#f9f9f9] py-14 px-10">
      <p className="text-2xl font-bold pb-4">구매 내역</p>
      <PriceCard text="제품" price={totalPrice} />
      <PriceCard text="배송비" price={SHIPPING} />
      <PriceCard text="총 결제 금액" price={totalPrice + SHIPPING} />
      {children}
    </div>
  );
}
