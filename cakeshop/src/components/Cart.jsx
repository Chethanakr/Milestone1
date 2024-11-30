import React from 'react';
import './Cart.css';

const Cart = ({ cartItems = [], removeItem }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2 align="center">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p align="center">Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name} - {item.quantity} x ${item.price}</p>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p><strong>Total: ${total}</strong></p>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
