import React from 'react';
import './navbar.css';
import Logo from '../../images/logo.png'
import NavbarMenu from './NavbarMenu';


const Navbar = () => {
  return (
    <nav>
      <a href="">
        <img className="img-logo" src={Logo} alt="logo" />
      </a>
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;
