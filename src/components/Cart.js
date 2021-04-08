import '../styles/Cart.css';
import { useState } from 'react';

const Cart = () => {
  const monsteraPrice = 8;
  const [cart, setCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    isOpen ? (
      <div className="lmj-cart">
        <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>Fermer</button>
        <h2>Panier</h2>
      <div>
        Monstera : {monsteraPrice}$
        <button onClick={() => setCart(cart + 1)}>Ajouter</button>
      </div>

        <h3>Total : {monsteraPrice * cart}$</h3>
      </div>
    ) : (
      <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
    )
  );
};

export default Cart;
