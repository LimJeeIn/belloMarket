import React, { useState } from 'react';
import useCart from '../hooks/useCart';
import Button from '../components/ui/Button';

export default function Checkout() {
  const {
    cartQuery: { data: products },
  } = useCart();
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('결제가 진행되었습니다.');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 xl:grid-cols-10 gap-0 sm:gap-14 mt-6 sm:mt-0 p-4 max-w-screen-2xl m-auto"
    >
      <div className="col-span-full lg:col-span-1 xl:col-span-7 mb-8 p-0 sm:p-4 px-8 pl-0 pr-0">
        <p className="text-2xl font-bold pb-4">배송지 정보</p>
        <span className="mb-6 text-base text-gray-500 block">필수항목*</span>
        <div className="mb-4">
          <label htmlFor="이름" className="block font-semibold mb-2">
            이름
          </label>
          <input
            name="name"
            className="w-full py-4 px-2 bg-white border-[1px] border-[#73748b] rounded-none leading-none text-[#001022] font-medium  h-[4rem]"
            value={shippingInfo.name}
            onChange={handleChange}
            placeholder="이름"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="우편 번호" className="block font-semibold mb-2">
            우편 번호
          </label>
          <div className="flex items-center w-full gap-4">
            <div className="w-3/10" style={{ width: '30%' }}>
              <button
                type="button"
                style={{
                  padding: '1rem 3.5rem',
                  color: '#fff',
                  width: '100%',
                }}
                className="h-[4rem] bg-black"
              >
                우편번호 검색
              </button>
            </div>
            <div className="w-7/10" style={{ width: '70%' }}>
              <input
                type="address"
                placeholder="우편 번호"
                required
                className="w-full py-4 px-2 bg-white border-[1px] border-[#73748b] rounded-none leading-none text-[#001022] font-medium  h-[4rem]"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="주소" className="block font-semibold mb-2">
            주소
          </label>
          <input
            name="address"
            className="w-full py-4 px-2 bg-white border-[1px] border-[#73748b] rounded-none leading-none text-[#001022] font-medium  h-[4rem]"
            value={shippingInfo.address}
            onChange={handleChange}
            placeholder="주소"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="상세주소" className="block font-semibold mb-2">
            상세주소
          </label>
          <input
            name="address"
            className="w-full py-4 px-2 bg-white border-[1px] border-[#73748b] rounded-none leading-none text-[#001022] font-medium  h-[4rem]"
            value={shippingInfo.address}
            onChange={handleChange}
            placeholder="상세주소"
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="휴대폰 번호" className="block font-semibold mb-2">
            휴대폰 번호
          </label>
          <input
            name="number"
            className="w-full py-4 px-2 bg-white border-[1px] border-[#73748b] rounded-none leading-none text-[#001022] font-medium  h-[4rem]"
            value={shippingInfo.address}
            onChange={handleChange}
            placeholder="휴대폰 번호"
            required
          />
        </div>
        <Button
          text="결제하기"
          className="block ml-auto"
          disabled={!shippingInfo.name || !shippingInfo.address}
        />
      </div>
      <div className="col-span-full lg:col-span-1 xl:col-span-3 flex flex-col items-center mb-6 bg-[#f9f9f9] py-14 px-10">
        <p className="text-2xl font-bold pb-4">주문 상품</p>
        {products &&
          products.map((product) => (
            <p key={product.id}>
              {product.title} - {product.quantity}
            </p>
          ))}
      </div>
    </form>
  );
}
