import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProductCardContainer = styled.li`
  overflow: hidden;
  cursor: pointer;
`;

const StyledButton = styled.button`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  padding: 1rem 0.75rem 1rem 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 600;
`;

const Title = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();

  return (
    <ProductCardContainer>
      <StyledButton
        onClick={() => navigate(`/products/${id}`, { state: { product } })}
      >
        <Image src={image} alt={title} />
        <InfoContainer>
          <Title>{title}</Title>
          <p>{`₩${price}`}</p>
        </InfoContainer>
      </StyledButton>
    </ProductCardContainer>
  );
}
