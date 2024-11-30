import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  const totalSum = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <div className="container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>₹{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <h3>Total: ₹{totalSum}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
        <Link to="/menu">
          <button className="back-to-menu-btn">Back to Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
