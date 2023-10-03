import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../hooks/useCart';

const CartContainer = styled.div`
  position: relative;
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 1.5rem;
`;

const ProductCount = styled.p`
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  font-weight: bold;
  border-radius: 50%;

  position: absolute;
  top: -1em;
  right: -1em;
`;

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <CartContainer>
      <CartIcon />
      {products && <ProductCount>{products.length}</ProductCount>}
    </CartContainer>
  );
}
