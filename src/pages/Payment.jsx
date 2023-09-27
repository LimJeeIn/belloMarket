import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import OrderProductList from '../components/OrderProductList';
import PurchaseSummary from '../components/PurchaseSummary';
import Button from '../components/ui/Button';

export default function Payment() {
  const location = useLocation();

  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const { totalPrice, products, shippingInfo } = location.state;

  return (
    <form className="grid grid-cols-1 xl:grid-cols-10 gap-0 sm:gap-14 mt-6 sm:mt-0 p-4 max-w-screen-2xl m-auto">
      <div className="col-span-full lg:col-span-1 xl:col-span-7 mb-8 p-0 sm:p-4 px-8 pl-0 pr-0">
        <p className="text-2xl font-bold pb-4">결제 수단 선택</p>
        <span className="mb-6 text-base text-gray-500 block">
          결제 방법을 선택해 주시고, 주문을 확인해주세요.
        </span>
        <ul>
          <li>
            <input
              type="radio"
              name="payment"
              value="신용카드"
              onChange={handlePaymentChange}
              className="mr-3"
            />
            <label htmlFor="신용카드">신용카드</label>
          </li>
          <li>
            <input
              type="radio"
              name="payment"
              value="휴대폰 결제"
              onChange={handlePaymentChange}
              className="mr-3"
            />
            <label htmlFor="휴대폰 결제">휴대폰 결제</label>
          </li>
          <li>
            <input
              type="radio"
              name="payment"
              value="Kakao Pay"
              onChange={handlePaymentChange}
              className="mr-3"
            />
            <label htmlFor="Kakao Pay">Kakao Pay</label>
          </li>
          <li>
            <input
              type="radio"
              name="payment"
              value="페이코"
              onChange={handlePaymentChange}
              className="mr-3"
            />
            <label htmlFor="페이코">페이코</label>
          </li>
        </ul>
        <p className="text-2xl font-bold pb-4 mt-24 border-t border-gray-300 pt-8">
          배송지 정보
        </p>
        <ul>
          <li>이름: {shippingInfo.name}</li>
          <li>우편 번호: {shippingInfo.postalCode}</li>
          <li>주소: {shippingInfo.address}</li>
          <li>상세주소: {shippingInfo.detailAddress}</li>
          <li>휴대폰 번호: {shippingInfo.phoneNum}</li>
        </ul>
        <Button text="결제하기" className="block ml-auto" />
      </div>

      <div className="col-span-full lg:col-span-1 xl:col-span-3 ">
        <PurchaseSummary totalPrice={totalPrice} />
        <OrderProductList products={products} />
      </div>
    </form>
  );
}
