import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Our Cake Shop!</h1>
        <p>Delicious cakes made just for you!</p>
      </header>
      <div className="featured-cakes">
        <h2>Featured Cakes</h2>
        <div className="cakes-list">
          <div className="cake-item">
            <img src="/assets/images/chocolate.jpeg" alt="Chocolate Cake" />
            <h3>Chocolate Cake</h3>
            <Link to="/chocolate">View Details</Link>
          </div>
          <div className="cake-item">
            <img src="/assets/images/red velvet.jpeg" alt="Red velvet" />
            <h3>Red velvet Cake</h3>
            <Link to="/red velvet">View Details</Link>
          </div>
          <div className="cake-item">
            <img src="/assets/images/strawberry.jpeg" alt="Strawberry Cake" />
            <h3>Strawberry Cake</h3>
            <Link to="/strawberry">View Details</Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
