import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import OrderProductList from '../components/OrderProductList';
import PurchaseSummary from '../components/PurchaseSummary';
import Button from '../components/ui/Button';
import styled from 'styled-components';
import { Product } from '../components/Types';
import { ShippingInfo } from '../components/Types';

const Form = styled.form`
  display: grid;
  margin: auto;
  padding: 1rem;
  max-width: 1536px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 640px) {
    gap: 3.5rem;
    margin-top: 0px;
  }
`;

const PaymentWrapper = styled.div`
  grid-column: span full / span full;
  padding: 1rem;
  margin-bottom: 2rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  @media (min-width: 1280px) {
    grid-column: span 7 / span 7;
  }

  @media (max-width: 1024px) {
    grid-column: span 1 / span 1;
  }

  @media (min-width: 640px) {
    padding: 1rem;
  }

  @media (max-width: 640px) {
    grid-column: 1 / -1;
    margin-bottom: 2rem;
  }
`;

const PaymentTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 1rem;
`;

const PaymentSubTitle = styled.span`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #6b7280;
`;

const PaymentInput = styled.input`
  margin-right: 0.75rem;
`;

const DeliveryAddressInfo = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 1rem;
  margin-top: 6rem;
  border-top: 1px solid #d9d9d9;
  padding-top: 2rem;
`;

const PurchaseHistoryWapper = styled.div`
  grid-column: span full/span full;

  @media (min-width: 1280px) {
    grid-column: span 3 / span 3;
  }

  @media (max-width: 1024px) {
    grid-column: span 1 / span 1;
  }

  @media (max-width: 640px) {
    grid-column: 1 / -1;
  }
`;

const CustomButton = styled(Button)`
  display: block;
  margin-left: auto;
  margin-top: 1rem;
`;

interface LocationState {
  totalPrice: number;
  products: Product[];
  shippingInfo: ShippingInfo;
}

export default function Payment() {
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const { totalPrice, products, shippingInfo } =
    (location.state as LocationState) || {};

  return (
    <Form>
      <PaymentWrapper>
        <PaymentTitle>결제 수단 선택</PaymentTitle>
        <PaymentSubTitle>
          결제 방법을 선택해 주시고, 주문을 확인해주세요.
        </PaymentSubTitle>
        <ul>
          <li>
            <PaymentInput
              type="radio"
              name="payment"
              value="신용카드"
              onChange={handlePaymentChange}
            />
            <label htmlFor="신용카드">신용카드</label>
          </li>
          <li>
            <PaymentInput
              type="radio"
              name="payment"
              value="휴대폰 결제"
              onChange={handlePaymentChange}
            />
            <label htmlFor="휴대폰 결제">휴대폰 결제</label>
          </li>
          <li>
            <PaymentInput
              type="radio"
              name="payment"
              value="Kakao Pay"
              onChange={handlePaymentChange}
            />
            <label htmlFor="Kakao Pay">Kakao Pay</label>
          </li>
          <li>
            <PaymentInput
              type="radio"
              name="payment"
              value="페이코"
              onChange={handlePaymentChange}
            />
            <label htmlFor="페이코">페이코</label>
          </li>
        </ul>
        <DeliveryAddressInfo>배송지 정보</DeliveryAddressInfo>
        <ul>
          <li>이름: {shippingInfo.name}</li>
          <li>우편 번호: {shippingInfo.postalCode}</li>
          <li>주소: {shippingInfo.address}</li>
          <li>상세주소: {shippingInfo.detailAddress}</li>
          <li>휴대폰 번호: {shippingInfo.phoneNum}</li>
        </ul>
        <CustomButton text="결제하기" />
      </PaymentWrapper>

      <PurchaseHistoryWapper>
        <PurchaseSummary totalPrice={totalPrice}>
          <OrderProductList products={products} />
        </PurchaseSummary>
      </PurchaseHistoryWapper>
    </Form>
  );
}
