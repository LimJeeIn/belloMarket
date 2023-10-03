import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  background-color: #252525;
  color: white;
  padding: 1rem 1rem;
  border-radius: 0.25rem;
  font-weight: 600;

  &:hover {
    filter: brightness(110%);
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

export default function Button({ text, onClick, className = '', disabled }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled} className={className}>
      {text}
    </StyledButton>
  );
}
