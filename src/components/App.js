import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';
import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);
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
