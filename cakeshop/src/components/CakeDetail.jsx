import React, { useState } from 'react';
import './CakeDetail.css';

const CakeDetail = ({ match }) => {
  const [quantity, setQuantity] = useState(1);
  const { id } = match.params; 
  const cake = { 
    id,
    name: 'Chocolate Cake',
    description: 'A rich and moist chocolate cake.',
    price: 20,
    image: '/assets/images/chocolate-cake.jpg',
  };

  const handleQuantityChange = (e) => setQuantity(e.target.value);

  return (
    <div className="cake-detail">
      <h1>{cake.name}</h1>
      <img src={cake.image} alt={cake.name} />
      <p>{cake.description}</p>
      <p><strong>Price: </strong>${cake.price}</p>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
        />
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default CakeDetail;
