import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';
import { useState, useEffect } from 'react';

const App = () => {
  const savedCart = localStorage.getItem('cart');
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  return (
    <div>
      <Banner />
      <div className="lmj-layout">
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
