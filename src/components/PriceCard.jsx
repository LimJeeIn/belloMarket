import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div className="flex mx-2 text-center text-lg md:text-xl">
      <p>{text}</p>
      <p className="font-bold text-brand text-xl md:text-2xl">₩{price}</p>
    </div>
  );
}
