import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';

const App = () => {
  return (
    <div>
      <Banner />
      <div className="lmj-layout">
        <Cart />
        <ShoppingList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
