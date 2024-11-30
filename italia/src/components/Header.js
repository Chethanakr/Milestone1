import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cart }) => {
  const cartItemCount = cart.length;

  return (
    <header className="header">
      <h1 className="logo">ITALIA</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/signup">Sign Up / Login</Link></li>
          <li className={cartItemCount > 0 ? 'cart-with-items' : 'cart-empty'}>
            <Link to="/cart">
              Cart ({cartItemCount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
