import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import useCart from '../hooks/useCart';
import PurchaseSummary from '../components/PurchaseSummary';
import Button from '../components/ui/Button';
import styled from 'styled-components';

const CartSection = styled.section`
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

const CartUl = styled.ul`
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

const CustomButton = styled(Button)`
  margin-top: 2rem;
`;

const CartTitle = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

export default function MyCart() {
  const navigate = useNavigate();
  const cart = useCart();

  if (!cart) {
    // 로그인이 되어있지 않거나 cart 정보를 불러오는 중일 때의 처리
    return <p>Loading...</p>;
  }

  const {
    cartQuery: { isLoading, data: products },
  } = cart;

  if (isLoading || !Array.isArray(products)) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) =>
        prev + (current.price ? current.price : 0) * (current.quantity || 0),
      0,
    );

  return (
    <CartSection>
      {!hasProducts && <p>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요!</p>}
      {hasProducts && (
        <>
          <CartUl>
            <CartTitle>장바구니</CartTitle>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </CartUl>
          <PurchaseSummary totalPrice={totalPrice}>
            <CustomButton
              text="결제 계속하기"
              onClick={() => navigate('/checkout')}
            />
          </PurchaseSummary>
        </>
      )}
    </CartSection>
  );
}
