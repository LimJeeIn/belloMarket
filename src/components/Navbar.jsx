import React from 'react';
import { Link } from 'react-router-dom';
import { FcAbout } from 'react-icons/fc';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <h2>Bello market</h2>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <FcAbout />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'login'} onClick={login} />}
        {user && <Button text={'logout'} onClick={logout} />}
      </nav>
    </header>
  );
}
