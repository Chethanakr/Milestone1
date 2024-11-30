import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1 style={{textAlign:'center'}}>SWEET TREAT</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
