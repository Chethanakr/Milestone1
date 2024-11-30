import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderCustomization = () => {
  const { id } = useParams();
  const [customization, setCustomization] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleCustomizationChange = (e) => setCustomization(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);

  return (
    <section className="order-customization">
      <h2>Customize Your Order</h2>
      <p>Order ID: {id}</p>
      <label>
        Customization:
        <input type="text" value={customization} onChange={handleCustomizationChange} placeholder="e.g., extra cheese" />
      </label>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
      </label>
      <button>Add to Cart</button>
    </section>
  );
};

export default OrderCustomization;
