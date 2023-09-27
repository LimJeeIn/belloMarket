import React, { useEffect } from 'react';

const loadPostCodeScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src =
      '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
};

export default function Postcode({ onAddressSelected }) {
  useEffect(() => {
    loadPostCodeScript();
  }, []);

  const handleOpenPostCode = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        onAddressSelected(data);
      },
    }).open();
  };

  return (
    <button
      onClick={handleOpenPostCode}
      className="p-2 sm:p-4 md:px-12 text-white w-full sm:h-16 bg-black h-[4rem]"
    >
      우편번호 검색
    </button>
  );
}
