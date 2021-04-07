import '../styles/Banner.css';
import logo from '../assets/logo-leaf.png';

const Banner = () => {
  const title = "La maison Jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="La Maison Jungle" className="lmj-logo" />
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
};

export default Banner
