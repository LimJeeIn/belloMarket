import React, { useState } from 'react';
import useCart from '../hooks/useCart';
import Button from '../components/ui/Button';
import { Product } from '../components/Types';
import PurchaseSummary from '../components/PurchaseSummary';
import Postcode, { DaumPostcodeResult } from '../components/Postcode';
import { useNavigate } from 'react-router-dom';
import OrderProductList from '../components/OrderProductList';
import styled from 'styled-components';
import { ShippingInfo } from '../components/Types';

const Form = styled.form`
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

const InfoWrapper = styled.div`
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

const PurchaseHistoryWapper = styled.div`
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
`;

const InfoTitle = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

const InfoSubTitle = styled.span`
  display: block;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #718096;
`;

const InfoContent = styled.div`
  margin-bottom: 1rem;
`;

const InfoContent2 = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StyledDivFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const Div30 = styled.div`
  width: 30%;
`;

const Div70 = styled.div`
  width: 70%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 0.5rem 1rem 0.5rem;
  background-color: white;
  border-width: 1px;
  border-color: #73748b;
  text-color: #001022;
  height: 2rem;
  border-radius: 0;
  line-height: 1;
  font-weight: 500;
  height: 4rem;
`;

export default function Checkout() {
  const [nameError, setNameError] = useState<string>('');
  const [addressError, setAddressError] = useState<string>('');
  const [detailAddressError, setDetailAddressError] = useState<string>('');
  const [phoneNumError, setPhoneNumError] = useState<string>('');

  const { cartQuery } = useCart() ?? {};
  const products = cartQuery?.data as Product[];

  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: '',
    postalCode: '',
    address: '',
    detailAddress: '',
    phoneNum: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('결제가 진행되었습니다.');
  };

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) =>
        prev + (current.price ? current.price : 0) * (current.quantity || 0),
      0,
    );

  const handleAddressSelected = (data: DaumPostcodeResult) => {
    if (data.zonecode && data.address) {
      setShippingInfo({
        ...shippingInfo,
        postalCode: data.zonecode,
        address: data.address,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InfoWrapper>
        <InfoTitle>배송지 정보</InfoTitle>
        <InfoSubTitle>필수항목*</InfoSubTitle>
        <InfoContent>
          <Label htmlFor="이름">이름*</Label>
          <Input
            name="name"
            value={shippingInfo.name}
            onChange={handleChange}
            placeholder="이름"
            required
          />
          {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
        </InfoContent>
        <InfoContent>
          <Label htmlFor="우편 번호">우편 번호*</Label>
          <StyledDivFlex>
            <Div30>
              <Postcode onAddressSelected={handleAddressSelected} />
            </Div30>
            <Div70>
              <Input
                type="text"
                placeholder="우편 번호"
                value={shippingInfo.postalCode}
                readOnly
              />
            </Div70>
          </StyledDivFlex>
        </InfoContent>
        <InfoContent>
          <Label htmlFor="주소">주소*</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
            readOnly
            required
          />
          {addressError && <div style={{ color: 'red' }}>{addressError}</div>}
        </InfoContent>
        <InfoContent>
          <Label htmlFor="상세주소">상세주소*</Label>
          <Input
            name="detailAddress"
            value={shippingInfo.detailAddress}
            onChange={handleChange}
            placeholder="상세주소"
            required
          />
          {detailAddressError && (
            <div style={{ color: 'red' }}>{detailAddressError}</div>
          )}
        </InfoContent>
        <InfoContent2>
          <Label htmlFor="휴대폰 번호">휴대폰 번호*</Label>
          <Input
            name="phoneNum"
            value={shippingInfo.phoneNum}
            onChange={handleChange}
            placeholder="휴대폰 번호"
            required
          />
          {phoneNumError && <div style={{ color: 'red' }}>{phoneNumError}</div>}
        </InfoContent2>
        <Button
          text="결제하기"
          className="block ml-auto"
          disabled={
            !!nameError ||
            !!addressError ||
            !!detailAddressError ||
            !!phoneNumError ||
            !shippingInfo.name ||
            !shippingInfo.address ||
            !shippingInfo.detailAddress ||
            !shippingInfo.phoneNum ||
            !shippingInfo.postalCode
          }
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            navigate('/checkout/payment', {
              state: { totalPrice, products, shippingInfo },
            });
          }}
        />
      </InfoWrapper>

      <PurchaseHistoryWapper>
        <PurchaseSummary totalPrice={totalPrice}>
          <OrderProductList products={products} />
        </PurchaseSummary>
      </PurchaseHistoryWapper>
    </Form>
  );
}
