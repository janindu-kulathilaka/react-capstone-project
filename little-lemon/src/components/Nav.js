import React from 'react';
import Logo from '../assets/logo.png';
import '../css/Nav.css';

export default function Nav() {
  return (
    <div className="navbar">
      <img src={Logo} alt="little lemon logo" className="logo" />
      <nav>
        <ul className="nav">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>MENU</li>
          <li>RESERVATIONS</li>
          <li>ORDER ONLINE</li>
          <li>LOGIN</li>
        </ul>
      </nav>
    </div>
  );
}
