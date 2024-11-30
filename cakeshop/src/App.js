import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CategoryMenu from './components/CategoryMenu';
import CakeDetail from './components/CakeDetail';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryMenu />} />
        <Route path="/cakes/:id" element={<CakeDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
