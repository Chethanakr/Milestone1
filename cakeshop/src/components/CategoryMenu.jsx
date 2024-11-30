import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryMenu.css';

const CategoryMenu = () => {
  return (
    <div className="category-menu">
      <h2>Browse Cakes by Category</h2>
      <div className="categories">
       <div className="category">
        < img src="/assets/images/chocolate.jpeg"alt="Chocolate Cakes" />
          <h3>Chocolate Cakes</h3>
          <Link to="/">Browse</Link>
        </div>
        <div className="category">
          <img src="/assets/images/red velvet.jpeg" alt="Red velvet" />
          <h3>Red velvet Cakes</h3>
          <Link to="/red velvet">Browse</Link>
        </div>
        <div className="category">
          <img src="/assets/images/strawberry.jpeg" alt="Strawberry Cake" />
          <h3>Strawberry Cakes</h3>
          <Link to="/strawberry">Browse</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
