import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import SignUpLogin from './components/SignUpLogin';
import Feedback from './components/Feedback';
import OrderCustomization from './components/OrderCustomization';
import Cart from './components/Cart';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]); // Cart state to store items

  const addToCart = (item) => {
    setCart([...cart, item]); // Add item to the cart
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id); // Remove item from cart
    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="app-container">
        <Header cart={cart} /> {/* Pass cart to Header */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} cart={cart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUpLogin />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/order/:id" element={<OrderCustomization />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
