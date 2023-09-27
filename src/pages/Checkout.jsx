import React, { useState } from 'react';
import useCart from '../hooks/useCart';
import Button from '../components/ui/Button';
import PurchaseSummary from '../components/PurchaseSummary';
import Postcode from '../components/Postcode';
import { useNavigate } from 'react-router-dom';
import OrderProductList from '../components/OrderProductList';

export default function Checkout() {
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [detailAddressError, setDetailAddressError] = useState('');
  const [phoneNumError, setPhoneNumError] = useState('');

  const {
    cartQuery: { data: products },
  } = useCart();

  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    postalCode: '',
    address: '',
    detailAddress: '',
    phoneNum: '',
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });

    if (e.target.name === 'name') {
      if (e.target.value.length < 2) {
        setNameError('이름을 올바르게 적어주세요.');
      } else {
        setNameError('');
      }
    }

    if (e.target.name === 'address') {
      if (e.target.value.length < 1) {
        setAddressError('주소를 올바르게 적어주세요.');
      } else {
        setAddressError('');
      }
    }

    if (e.target.name === 'detailAddress') {
      if (e.target.value.length < 1) {
        setDetailAddressError('상세 주소를 올바르게 적어주세요.');
      } else {
        setDetailAddressError('');
      }
    }

    if (e.target.name === 'phoneNum') {
      if (!/^(\d{3}-\d{3,4}-\d{4})$/.test(e.target.value)) {
        setPhoneNumError('휴대폰 번호 형식이 맞지 않습니다. ex)000-0000-0000');
      } else {
        setPhoneNumError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('결제가 진행되었습니다.');
  };

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0,
    );

  const handleAddressSelected = (data) => {
    setShippingInfo({
      ...shippingInfo,
      postalCode: data.zonecode,
      address: data.address,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 xl:grid-cols-10 gap-0 sm:gap-14 mt-6 sm:mt-0 p-4 max-w-screen-2xl m-auto"
    >
      <div className="col-span-full lg:col-span-1 xl:col-span-7 mb-8 p-0 sm:p-4 px-8 pl-0 pr-0">
        <p className="text-2xl font-bold pb-4">배송지 정보</p>
        <span className="mb-6 text-base text-gray-500 block">필수항목*</span>
        <div className="mb-4">
          <label htmlFor="이름" className="block font-semibold mb-2">
            이름*
          </label>
          <input
            name="name"
            className="w-full py-4 px-2 bg-white border-[1px] border-[#73748b] rounded-none leading-none text-[#001022] font-medium  h-[4rem]"
            value={shippingInfo.name}
            onChange={handleChange}
            placeholder="이름"
            required
          />
          {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="우편 번호" className="block font-semibold mb-2">
            우편 번호*
          </label>
          <div className="flex items-center w-full gap-4">
            <div className="w-3/10" style={{ width: '30%' }}>
              <Postcode onAddressSelected={handleAddressSelected} />
            </div>
            <div className="w-7/10" style={{ width: '70%' }}>
              <input
                type="text"
                placeholder="우편 번호"
                value={shippingInfo.postalCode}
                readOnly
                className="w-full py-4 px-2 bg-white border-[1px] border-[#73748b] rounded-none leading-none text-[#001022] font-medium  h-[4rem]"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="주소" className="block font-semibold mb-2">
            주소*
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full py-4 px-2 bg-white border-[1px] border-[#73748b] rounded-none leading-none text-[#001022] font-medium h-[4rem]"
            value={shippingInfo.address}
            onChange={handleChange}
            readOnly
            required
          />
          {addressError && <div style={{ color: 'red' }}>{addressError}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="상세주소" className="block font-semibold mb-2">
            상세주소*
          </label>
          <input
            name="detailAddress"
            className="w-full py-4 px-2 bg-white border-[1px] border-[#73748b] rounded-none leading-none text-[#001022] font-medium  h-[4rem]"
            value={shippingInfo.detailAddress}
            onChange={handleChange}
            placeholder="상세주소"
            required
          />
          {detailAddressError && (
            <div style={{ color: 'red' }}>{detailAddressError}</div>
          )}
        </div>
        <div className="mb-8">
          <label htmlFor="휴대폰 번호" className="block font-semibold mb-2">
            휴대폰 번호*
          </label>
          <input
            name="phoneNum"
            className="w-full py-4 px-2 bg-white border-[1px] border-[#73748b] rounded-none leading-none text-[#001022] font-medium  h-[4rem]"
            value={shippingInfo.phoneNum}
            onChange={handleChange}
            placeholder="휴대폰 번호"
            required
          />
          {phoneNumError && <div style={{ color: 'red' }}>{phoneNumError}</div>}
        </div>
        <Button
          text="결제하기"
          className="block ml-auto"
          disabled={
            nameError ||
            addressError ||
            detailAddressError ||
            phoneNumError ||
            !shippingInfo.name ||
            !shippingInfo.address ||
            !shippingInfo.detailAddress ||
            !shippingInfo.phoneNum ||
            !shippingInfo.postalCode
          }
          onClick={(e) => {
            e.preventDefault();
            navigate('/checkout/payment', {
              state: { totalPrice, products, shippingInfo },
            });
          }}
        />
      </div>

      <div className="col-span-full lg:col-span-1 xl:col-span-3 ">
        <PurchaseSummary totalPrice={totalPrice} />
        <OrderProductList products={products} />
      </div>
    </form>
  );
}
