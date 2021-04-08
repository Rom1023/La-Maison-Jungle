import { useState } from 'react';
import '../styles/Footer.css';

const isEmailValid = (email) => {
  if (!email.includes("@")) {
    alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide");
  }
};

const Footer = () => {
    const [inputValue, setInputValue] = useState('Veuillez entrer votre email');

return(
  <footer className="lmj-footer">
    <div className="lmj-footer-element">
      <p>Pour les passionné·e·s de plantes 🌿🌱🌵</p>
    </div>
    <div className="lmj-footer-element">
      <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} onBlur={() => isEmailValid(inputValue)} />
    </div>
  </footer>
  );
};

export default Footer;
