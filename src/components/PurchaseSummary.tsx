import React, { ReactNode } from 'react';
import PriceCard from './PriceCard';
import styled from 'styled-components';

const PurchaseHistoryContainer = styled.div`
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

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  background-color: #f9f9f9;
  padding: 3.5rem 2.5rem 3.5rem 2.5rem;
`;

const PurchaseHistoryTitle = styled.p`
  padding-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
`;

const SHIPPING = 3000;

interface PurchaseSummaryProps {
  totalPrice: number;
  children: ReactNode;
}

export default function PurchaseSummary({
  totalPrice,
  children,
}: PurchaseSummaryProps) {
  return (
    <PurchaseHistoryContainer>
      <PurchaseHistoryTitle>구매 내역</PurchaseHistoryTitle>
      <PriceCard text="제품" price={totalPrice} />
      <PriceCard text="배송비" price={SHIPPING} />
      <PriceCard text="총 결제 금액" price={totalPrice + SHIPPING} />
      {children}
    </PurchaseHistoryContainer>
  );
}
