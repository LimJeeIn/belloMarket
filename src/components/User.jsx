import React from 'react';

export default function User({ user: { displayName } }) {
  return (
    <div className="flex items-center shrink-0">
      <div className="border-b border-black pt-1">
        <span className="hidden md:block">{displayName} 님</span>
      </div>
    </div>
  );
}
