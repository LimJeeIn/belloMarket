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
    <section className="grid grid-cols-1 xl:grid-cols-10 gap-0 sm:gap-14 mt-6 sm:mt-0 p-4 max-w-screen-2xl m-auto">
      {!hasProducts && <p>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요!</p>}
      {hasProducts && (
        <>
          <ul className="col-span-full lg:col-span-1 xl:col-span-7 mb-8 p-0 sm:p-4 px-8 pl-0 pr-0">
            <p className="text-2xl font-bold pb-4">장바구니</p>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="col-span-full lg:col-span-1 xl:col-span-3 flex flex-col items-center mb-6 bg-[#f9f9f9] py-14 px-10">
            <p className="text-2xl font-bold pb-4">구매 내역</p>
            <PriceCard text="제품" price={totalPrice} />
            <PriceCard text="배송비" price={SHIPPING} />
            <PriceCard text="총 결제 금액" price={totalPrice + SHIPPING} />
            <Button
              text="결제 계속하기"
              onClick={() => navigate('/checkout')}
              className="w-full mt-8"
            />
          </div>
        </>
      )}
    </section>
  );
}
