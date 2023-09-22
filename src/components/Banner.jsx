import React from 'react';
import runningShoes from '../assets/image/main_running_shoes.gif';

export default function Banner() {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="relative w-full h-full">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={runningShoes}
          alt="running_shoes"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 whitespace-no-wrap w-max">
          <h1 className="text-white text-9xl">RUN WITH YOUR STYLE</h1>
        </div>
      </div>
    </section>
  );
}
