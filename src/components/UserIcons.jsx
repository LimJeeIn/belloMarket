import { Link } from 'react-router-dom';
import { BiHeart, BiEditAlt } from 'react-icons/bi';
import User from './User';
import Button from './ui/Button';
import CartStatus from './CartStatus';
import { useAuthContext } from '../context/AuthContext';
import styled from 'styled-components';

const StyledComponent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  font-weight: bold;
  font-size: 0.75rem;

  @media (max-width: 980px) {
    justify-content: flex-start;
    margin-bottom: 2rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
`;

export default function UserIcons({ user, onClick }) {
  const { login, logout } = useAuthContext();

  return (
    <StyledComponent>
      <StyledLink to="/carts" onClick={onClick}>
        <BiHeart />
      </StyledLink>

      <Link to="/carts" onClick={onClick}>
        <CartStatus />
      </Link>

      {!user && <Button text={'login'} onClick={login} />}

      {user && (
        <>
          {user.isAdmin && (
            <StyledLink to="/products/new" onClick={onClick}>
              <BiEditAlt />
            </StyledLink>
          )}

          <User user={user} />
          <Button text={'logout'} onClick={logout} />
        </>
      )}
    </StyledComponent>
  );
}
