import React, { useState } from 'react';
import Cart from './Cart';
import './App.css';
const App = () => {
  const products = [
    { id: 1, name: 'Chocolate Cake', price: 20, image: '/assets/images/chocolate.jpeg' },
    { id: 2, name: 'Red Velvet Cake', price: 25, image: '/assets/images/red velvet.jpeg' },
    { id: 3, name: 'Strawberry Cake', price: 22, image: '/assets/images/strawberry.jpeg' }
  ];


  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      
      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <div className="app">
      <h1>Welcome to Our Cake Shop!</h1>
      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <Cart cartItems={cartItems} removeItem={removeItemFromCart} />
    </div>
  );
};

export default App;
