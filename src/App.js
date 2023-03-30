import React, { useState } from 'react';

import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartButton, setCartButton] = useState();

  function showCart() {
    setCartButton(true);
  }

  function hideCart() {
    setCartButton(false);
  }

  return (
    <CartProvider>
      {cartButton && <Cart onHideCart={hideCart} /> }
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main> 
    </CartProvider>
  );
}

export default App;
