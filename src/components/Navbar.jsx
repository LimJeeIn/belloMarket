import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu, BiX } from 'react-icons/bi';
import { useAuthContext } from '../context/AuthContext';
import styled from 'styled-components';
import NavigationLinks from './NavigationLinks';
import UserIcons from './UserIcons';
import logo from '../assets/image/logo.png';

const HeaderStyle = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d1d5db;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 5.5rem;
`;

const DesktopNav = styled.div`
  display: none;

  @media (min-width: 980px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  width: 5.5rem;
`;

const MobileNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 980px) {
    display: none;
  }
`;

const CustomBiX = styled(BiX)`
  font-size: 1.875rem;
`;

const CustomBiMenu = styled(BiMenu)`
  font-size: 1.875rem;
`;

const MobileMenuContainer = styled.div`
     position:absolute ;  
     top:100% ;   
     right:0 ;   
     height:100vh;  
     background-color:#FFFFFF;  
     z-index:50 ;   
     display:flex ;    
     flex-direction :column ;     
     gap:.25em ;  
     padding-left: 1rem;
    padding-right: 1rem;    
     
      @media(min-width :768px){         
          padding-top=2.5em !important        
      }
`;
const CustomUserIcons = styled(UserIcons)`
  display: flex;
  justify-content: space-between;
`;

export default function Navbar() {
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <HeaderStyle>
      {/* Desktop navigation */}
      <DesktopNav>
        <Logo to="/" onClick={closeMenu}>
          <img src={logo} alt="로고" />
        </Logo>
        <NavigationLinks />
        <UserIcons user={user} />
      </DesktopNav>

      {/* Mobile navigation */}
      <MobileNav>
        <Logo to="/" onClick={closeMenu}>
          <img src={logo} alt="로고" />
        </Logo>

        {isOpen ? (
          <CustomBiX onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <CustomBiMenu onClick={() => setIsOpen(!isOpen)} />
        )}

        {isOpen && (
          <MobileMenuContainer>
            <CustomUserIcons user={user} onClick={closeMenu} />
            <NavigationLinks onClick={closeMenu} />
          </MobileMenuContainer>
        )}
      </MobileNav>
    </HeaderStyle>
  );
}
