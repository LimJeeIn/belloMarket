import React from 'react';

export default function Button({ text, onClick, className }) {
  return (
    <button
      className={`bg-brand text-white py-4 px-4 rounded-sm hover:brightness-110 font-semibold ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
