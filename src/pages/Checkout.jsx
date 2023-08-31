import React, { useState } from 'react';
import useCart from '../hooks/useCart';
import Button from '../components/ui/Button';

export default function Checkout() {
  const {
    cartQuery: { data: products },
  } = useCart();
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 결제 처리 로직을 실행하면 됩니다.
    console.log('결제가 진행되었습니다.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>주문 상품</h2>
      {products &&
        products.map((product) => (
          <p key={product.id}>
            {product.title} - {product.quantity}
          </p>
        ))}
      <input
        name="name"
        value={shippingInfo.name}
        onChange={handleChange}
        placeholder="이름"
        required
      />
      <input
        name="address"
        value={shippingInfo.address}
        onChange={handleChange}
        placeholder="배송지 주소"
        required
      />
      <Button
        text="결제하기"
        disabled={!shippingInfo.name || !shippingInfo.address}
      />
    </form>
  );
}
