import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledComponent = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  font-weight: bold;
  font-size: 0.75rem;

  @media (min-width: 980px) {
    flex-direction: row;
  }
`;

export default function NavigationLinks({ onClick }) {
  return (
    <StyledComponent>
      <Link to="/products" onClick={onClick}>
        NEW
      </Link>
      <Link to="/products" onClick={onClick}>
        SHOES
      </Link>
      <Link to="/products" onClick={onClick}>
        SALE
      </Link>
      <Link to="/products" onClick={onClick}>
        EXPOLE BELLO
      </Link>
    </StyledComponent>
  );
}
