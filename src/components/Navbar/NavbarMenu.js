import React from 'react';

import NavbarCart from './NavbarCart';

const NavbarMenu = ({ }) => {
    return (
    <div id="navbar">
        <ul id="navbarMenu">
            <li>
                <a className="active" href="#">
                SHOP
                </a>
            </li>
            <li>
                <a className="active" href="#">
                PODS
                </a>
            </li>
            <li>
                <a className="active" href="#">
                SMOKES
                </a>
            </li>
            <li>
                <a className="active" href="#">
                RESISTENCIAS
                </a>
            </li>
        </ul>
        <NavbarCart />
    </div>
    );
  };
  
  export default NavbarMenu;