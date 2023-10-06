import React from 'react';
import styled from 'styled-components';
import { Product } from '../components/Types';

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
  padding: 3.5rem 0 3.5rem 0;
`;

const ListTitle = styled.p`
  padding-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
`;

interface OrderProductListProps {
  products: Product[];
}

const OrderProductList: React.FC<OrderProductListProps> = ({ products }) => {
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
};

export default OrderProductList;
