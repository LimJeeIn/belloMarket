import React from 'react';
import styled from 'styled-components';

const PriceCardContainer = styled.div`
  display: flex;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 1.25rem;
  font-size: 1rem;
  line-height: 1.75rem;
`;

const Text = styled.p``;

const Price = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.25rem;
  line-height: 1.75rem;

  @media (min-width: 768px) {
    font-size: 1.125em;
  }
`;

export default function PriceCard({ text, price }) {
  return (
    <PriceCardContainer>
      <Text>{text}</Text>
      <Price>₩{price}</Price>
    </PriceCardContainer>
  );
}
