import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <h2>Welcome to Italia!</h2>
      <p>Discover the best Italian dishes made with authentic ingredients.</p>
      <Link to="/menu">
        <button>Explore Our Menu</button>
      </Link>
    </section>
  );
};

export default Home;
