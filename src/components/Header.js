import React from 'react';
import './Header.css';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="header-icon">
          <RxHamburgerMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
