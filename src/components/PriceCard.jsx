import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div className="flex mx-2 text-center text-lg md:text-xl justify-between w-full pt-5">
      <p className="text-base leading-snug ">{text}</p>
      <p className="text-brand md:text-lg text-base leading-snug font-semibold uppercase">
        ₩{price}
      </p>
    </div>
  );
}
