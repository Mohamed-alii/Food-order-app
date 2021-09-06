import { useState } from 'react';
import Header from './components/Layout/Header';
import Meal from './components/Meals/Meals';
import Cart from './components/Cart/Cart.js'
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown , setCartIsShown ] = useState(false); 

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
    console.log("tapped")
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
