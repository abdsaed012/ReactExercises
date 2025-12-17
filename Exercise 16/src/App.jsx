
import React, { useState } from 'react';
import ProductItem from './ProductItem';
import CartSummary from './CartSummary';
import CartContext from './CartContext';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = { cartItems, addToCart, removeFromCart };

  return (
    <CartContext.Provider value={value}>
      <ProductItem itemId={1} itemName="Iphone 17" price={1099} />
      <ProductItem itemId={2} itemName="Samsung Galaxy S24" price={1299} />
      <CartSummary />
    </CartContext.Provider>
  );
}

export default App;
