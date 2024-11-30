import React from 'react';
import '../Menu.css';

const Menu = ({ addToCart, cart }) => {
  const menuItems = [
    { id: 1, name: 'Pizza Margherita', description: 'Classic pizza with mozzarella and basil', price: 450, image: 'Pizza-Margherita.jpg' },
    { id: 2, name: 'Lasagna', description: 'Traditional Italian lasagna with meat sauce', price: 500, image: 'lasagna.jpg' },
    { id: 3, name: 'Pasta Carbonara', description: 'Pasta with creamy egg and pancetta sauce', price: 400, image: 'Spaghetti-Carbonara.jpg' },
    { id: 4, name: 'Tiramisu', description: 'Italian dessert with coffee and mascarpone', price: 200, image: 'tiramisu.jpg' },
    { id: 5, name: 'Focaccia Bread', description: 'Soft, Italian flatbread with a crispy crust and rosemary seasoning.', price: 350, image: 'Focaccia-Bread.jpg' },
    { id: 6, name: 'Bruschetta', description: 'Toasted bread topped with tomatoes, garlic, basil, and olive oil.', price: 600, image: 'Bruschetta-1-768x768.jpg' },
    { id: 7, name: 'Mushroom-Risotto', description: 'Creamy rice cooked with sautéed mushrooms and Parmesan', price: 650, image: 'Mushroom-Risotto.jpg' },
    { id: 8, name: 'Strawberry Panna Cotta', description: 'Creamy Italian dessert topped with fresh strawberry sauce.', price: 250, image: 'Strawberry Panna cotta.jpg' },
  ];

  return (
    <div className="menu">
      <div className="container">
        <h2>Our Menu</h2>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              {/* Image */}
              <img 
                src={`./images/${item.image}`} 
                alt={item.name} 
                className="menu-item-image"
              />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>₹{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        {/* Show the number of items in the cart */}
        <div className="cart-info">
          <h4>Items in Cart: {cart.length}</h4>
        </div>
      </div>
    </div>
  );
};

export default Menu;
