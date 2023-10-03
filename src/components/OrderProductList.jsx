import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  @media (min-width: 1280px) {
    grid-column: span 3 / span 3;
  }

  @media (min-width: 1024px) {
    grid-column: span 1 / span 1;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  background-color: #f9f9f9;
  padding: 3.5rem 2.5rem 3.5rem 2.5rem;
`;

const ListTitle = styled.p`
  padding-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
`;

export default function OrderProductList({ products }) {
  return (
    <ListContainer>
      <ListTitle>주문 상품</ListTitle>
      {products &&
        products.map((product) => (
          <p key={product.id}>
            {product.title} - {product.quantity}
          </p>
        ))}
    </ListContainer>
  );
}
