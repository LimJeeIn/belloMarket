import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import useCart from '../hooks/useCart';
import { Product } from '../components/Types';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  border-bottom: solid thin gray;
`;

const Image = styled.img`
  width: 6rem;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    width: 12rem;
  }
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex: 1 1;
  justify-content: space-between;
  margin-left: 1em;
`;

const BasisContainer = styled.div`
  flex-basis: 60%;
`;

const CartTitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 1rem;
  line-height: 1.5rem;

  @media (max-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
    gap: 1rem;
  }

  svg {
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #252525;
      transform: scale(1.05);
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  padding: 0.8rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  gap: 1rem;

  @media (min-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  @media (max-width: 639px) {
    font-size: 12px;
    padding: 0.5rem;
  }
`;

const TextXL = styled.span`
  display: block;
  font-size: 1.25rem;
`;

const Delete = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ModalOverlay = styled.div`
 position:absolute; 
 top:0; left:0; right:0; bottom0; 
 background-color:black; 
 opacity:.7;
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // background-color: rgb(107 114 128);
  background-color: white;
  padding: 4rem;
  border: 3px solid #000;
  border-radius: 0.8rem;

  @media (max-width: 640px) {
    padding: 2rem;
  }
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
}
`;

const CloseButton = styled(IoMdClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;

interface CartItemProps {
  product: Product;
}

export default function CartItem({ product }: CartItemProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const cart = useCart();

  if (!cart) {
    return null;
  }

  const { addOrUpdateItem, removeItem } = cart;
  const { id, image, title, options, price, quantity } = product;

  const handleMinus = () => {
    if (quantity && quantity < 2) return;
    addOrUpdateItem({ ...product, quantity: (quantity || 0) - 1 });
  };
  const handlePlus = () => {
    addOrUpdateItem({ ...product, quantity: (quantity || 0) + 1 });
  };
  const handleDeleteConfirm = () => {
    removeItem(id);
    setModalOpen(false);
  };

  const handleDeleteClick = () => setModalOpen(true);

  return (
    <ListItem>
      <Image src={image} alt={title} />
      <ProductInfoContainer>
        {/* Product details */}
        <BasisContainer>
          <CartTitle>{title}</CartTitle>
          {/* {options &&
            Array.isArray(options) &&
            options.map((option: string, index: number) => (
              <p key={index} style={{ fontWeight: '700' }}>
                {option}
              </p>
            ))} */}

          {product.option && (
            <p style={{ fontWeight: '700' }}>{product.option}</p>
          )}

          <p>₩{price}</p>
        </BasisContainer>

        {/* Icons */}
        <IconContainer>
          <IconWrapper>
            <AiOutlineMinus onClick={handleMinus} />
            <TextXL>{quantity}</TextXL>
            <AiOutlinePlus onClick={handlePlus} />
          </IconWrapper>

          <Delete>
            <IoMdClose onClick={handleDeleteClick} />
          </Delete>
        </IconContainer>
      </ProductInfoContainer>

      {/* Modal */}
      {isModalOpen && (
        <>
          <ModalOverlay onClick={handleDeleteClick} />
          <ModalContainer>
            <CloseButton size={20} onClick={() => setModalOpen(false)} />
            <h3 style={{ marginBottom: '2rem' }}>삭제 하시겠습니까?</h3>
            <ModalButtonWrapper>
              <button onClick={handleDeleteConfirm}>확인</button>
              <button onClick={() => setModalOpen(false)}>취소</button>
            </ModalButtonWrapper>
          </ModalContainer>
        </>
      )}
    </ListItem>
  );
}
