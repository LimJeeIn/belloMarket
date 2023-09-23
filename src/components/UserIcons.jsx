import { Link } from 'react-router-dom';
import { BiHeart, BiEditAlt } from 'react-icons/bi';
import User from './User';
import Button from './ui/Button';
import CartStatus from './CartStatus';
import { useAuthContext } from '../context/AuthContext';

export default function UserIcons({ user, onClick }) {
  const { login, logout } = useAuthContext();

  return (
    <nav className="flex items-center md:justify-start justify-center gap-5 font-semibold text-xs mb-8 md:mb-0">
      <Link to="/carts" className="text-2xl" onClick={onClick}>
        <BiHeart />
      </Link>

      <Link to="/carts" onClick={onClick}>
        <CartStatus />
      </Link>

      {!user && <Button text={'login'} onClick={login} />}

      {user && (
        <>
          {user.isAdmin && (
            <Link to="/products/new" className="text-2xl" onClick={onClick}>
              <BiEditAlt />
            </Link>
          )}

          <User user={user} />
          <Button text={'logout'} onClick={logout} />
        </>
      )}
    </nav>
  );
}
