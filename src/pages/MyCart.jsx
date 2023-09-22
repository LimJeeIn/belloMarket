import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;

export default function MyCart() {
  const navigate = useNavigate();
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0,
    );
  return (
    <section className="grid grid-cols-1 md:grid-cols-8 gap-14 p-4 max-w-screen-2xl m-auto">
      {!hasProducts && <p>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요!</p>}
      {hasProducts && (
        <>
          <ul className="col-span-full md:col-span-5 border-b border-gray-300 mb-8 p-4 px-8">
            <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
              YOUR CART
            </p>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="col-span-full md:col-span-offset-1 md:col-span-3 flex flex-col items-center mb-6 px-[2.5rem] pt-[3.375rem] bg-gray-100">
            <PriceCard text="상품 총액" price={totalPrice} />
            <PriceCard text="배송액" price={SHIPPING} />
            <PriceCard text="총가격" price={totalPrice + SHIPPING} />
            <Button text="주문하기" onClick={() => navigate('/checkout')} />
          </div>
        </>
      )}
    </section>
  );
}
