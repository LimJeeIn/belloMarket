// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu, BiX } from 'react-icons/bi';
import { useAuthContext } from '../context/AuthContext';

import NavigationLinks from './NavigationLinks';
import UserIcons from './UserIcons';

import logo from '../assets/image/logo.png';

export default function Navbar() {
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative flex justify-between border-b border-gray-300 max-w-screen-3xl px-6 h-[5.5rem]">
      {/* Desktop navigation */}
      <div className="hidden md:flex justify-between items-center w-full">
        <Link
          to="/"
          className="flex items-center w-[5.5rem]"
          onClick={closeMenu}
        >
          <img src={logo} alt="로고" />
        </Link>
        <NavigationLinks />
        <UserIcons user={user} />
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex items-center justify-between w-full">
        <Link
          to="/"
          className="flex items-center w-[5.5rem]"
          onClick={closeMenu}
        >
          <img src={logo} alt="로고" />
        </Link>

        {isOpen ? (
          <BiX onClick={() => setIsOpen(!isOpen)} className="text-3xl" />
        ) : (
          <BiMenu onClick={() => setIsOpen(!isOpen)} className="text-3xl" />
        )}

        {isOpen && (
          <div className="absolute top-full right-0 h-screen bg-white z-50 flex flex-col gap-4 px-4 md:p-10">
            <>
              <UserIcons
                user={user}
                onClick={closeMenu}
                className="justify-center"
              />
              <NavigationLinks onClick={closeMenu} />
            </>
          </div>
        )}
      </div>
    </header>
  );
}
