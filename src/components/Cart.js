import '../styles/Cart.css';

const Cart = () => {
  const monsteraPrice = 8;
  const lierrePrice = 10;
  const bouquetPrice = 15;

  return (
    <div className="lmj-cart">
      <h2>Cart</h2>
      <ul>
        <li>Monsterra : {monsteraPrice}$</li>
        <li>Lierre : {lierrePrice}$</li>
        <li>Bouquet de fleurs : {bouquetPrice}$</li>
      </ul>
      <div>Total : {monsteraPrice + lierrePrice + bouquetPrice}$</div>
    </div>
  );
};

export default Cart



