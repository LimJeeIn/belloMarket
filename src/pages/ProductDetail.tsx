import React, { useState, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthContext';

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
  color: #4b5563;
  font-size: 0.875rem;
  line-height: normal;
  font-weight: bold;
`;

const ProductTitle = styled.p`
  padding-top: 0.5em;
  line-height: normal;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: solid thin #cbd5e0;
`;

const ProductDescription = styled.p`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
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
  font-size: 1rem;
  line-height: normal;
  font-weight: bold;
`;

const ProductRadio = styled.input`
  margin-left: 1em;
  margin-right: 1em;
`;

export default function ProductDetail() {
  const location = useLocation();
  const { user } = useAuthContext();
  const { product } = location.state;
  const { id, image, title, price, category, description, options } = product;
  const cart = useCart();

  const [success, setSuccess] = useState<string | null>(null);

  let initialOption: string | undefined;
  if (location.state.product.options) {
    initialOption = location.state.product.options[0];
  }

  const [selected, setSelected] = useState<string | undefined>(initialOption);

  if (!user || !cart) {
    return <div>Please log in to view this page.</div>;
  }

  const { addOrUpdateItem } = cart;

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) =>
    setSelected(e.target.value);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!selected) {
      alert('Please select an option before adding to cart.');
      return;
    }

    const product = { id, image, title, price, option: selected!, quantity: 1 };
    addOrUpdateItem(product);
    setSuccess('장바구니에 추가 되었습니다.');
    setTimeout(() => setSuccess(null), 3000);
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
              {Array.isArray(options) &&
                options.map((option: string) => (
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
