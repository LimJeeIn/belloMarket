import React from 'react';
import { Link } from 'react-router-dom';
import { BiEditAlt, BiHeart } from 'react-icons/bi';

import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
import logo from '../assets/image/logo.png';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b border-gray-300 max-w-screen-3xl px-6 h-[5.5rem]">
      <Link to="/" className="flex items-center w-[5.5rem]">
        {/* <h1>Bello Market</h1> */}
        <img src={logo} alt="로고" />
      </Link>
      <nav className="flex items-center gap-10 font-semibold text-xs">
        <Link to="/products">NEW</Link>
        <Link to="/products">SHOES</Link>
        <Link to="/products">SALE</Link>
        <Link to="/products">EXPOLE BELLO</Link>
      </nav>
      <nav className="flex items-center gap-5 font-semibold text-xs">
        {user && (
          <Link to="/carts" className="text-2xl">
            <BiHeart />
          </Link>
        )}
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BiEditAlt />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'login'} onClick={login} />}
        {user && <Button text={'logout'} onClick={logout} />}
      </nav>
    </header>
  );
}
