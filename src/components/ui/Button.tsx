import React, { FC, ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

interface ButtonProps extends StyledButtonProps {
  text: string;
}

const StyledButton = styled.button<StyledButtonProps>`
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

const Button: FC<ButtonProps> = ({ text, className = '', ...props }) => (
  <StyledButton className={className} {...props}>
    {text}
  </StyledButton>
);

export default Button;
