import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';
import styled from 'styled-components';

const ProductDetailContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 768px) {
    padding-left: 6rem;
    padding-right: 6rem;
    height: 100vh;
    max-width: 1620px;
    gap: 4em;
    margin: auto;
  }
`;

const ProductDetailWrapper = styled.div`
  width: 100%;
  display: flex;

  @media (min-width: 1024px) {
    gap: 4em;
  }

  @media (max-width: 1260px) {
    flex-direction: column;
  }
`;

const ProductDetailImage = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 1260px) {
    width: 100%;
  }

  object-position: top;
  object-fit: contain;
  padding-left: 0.5em;
`;

const ProductDetailInfo = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  object-position-top;
  padding-right:1rem; 
  padding-bottom:0; 
  padding-left :2em;

   @media (min-width :768px){
     width :100%
   }
`;

const ProductCategory = styled.p`
  color: #4b5563; // gray-700
  font-size: 0.875rem; // text-sm
  line-height: normal;
  font-weight: bold; // font-semibold
`;

const ProductTitle = styled.p`
  padding-top: 0.5em; // pt-2
  line-height: normal;
  font-size: 1.25rem; // text-xl
  font-weight: bold; // font-bold
  text-transform: uppercase;
`;

const ProductPrice = styled.p`
  font-size: 1.125rem; // text-lg
  font-weight: 600; // font-semibold
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: solid thin #cbd5e0; // border-b border-gray-400
`;

const ProductDescription = styled.p`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem; // text-sm
`;

const ProductOptions = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`;

const ProductSize = styled.p`
  font-weight: bold;
`;

const ProductLabel = styled.label`
  margin-right: 1em;
  font-size: 1rem; // text-base
  line-height: normal;
  font-weight: bold; //font-semibold,
`;

const ProductRadio = styled.input`
  margin-left: 1em;
  margin-right: 1em;
`;

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가 되었습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  return (
    <>
      <ProductDetailContainer>
        <ProductDetailWrapper>
          <ProductDetailImage src={image} alt={title} />
          <ProductDetailInfo>
            <ProductCategory>{category}</ProductCategory>
            <ProductTitle>{title}</ProductTitle>

            <ProductPrice>₩{price}</ProductPrice>
            <ProductDescription>{description}</ProductDescription>
            <ProductOptions>
              <ProductSize>SIZE : </ProductSize>
              {options &&
                options.map((option) => (
                  <ProductLabel key={option}>
                    <ProductRadio
                      type="radio"
                      name="options"
                      value={option}
                      checked={selected === option}
                      onChange={handleSelect}
                    />
                    {`${option}`}
                  </ProductLabel>
                ))}
            </ProductOptions>
            {success && <p>{success}</p>}
            <Button text="ADD TO CART" onClick={handleClick} />
          </ProductDetailInfo>
        </ProductDetailWrapper>
      </ProductDetailContainer>
    </>
  );
}
