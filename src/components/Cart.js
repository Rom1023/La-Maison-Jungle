import React from 'react';

const Cart = () => {
  const monsteraPrice = 8;
  const lierrePrice = 10;
  const bouquetPrice = 15;

  return (
    <React.Fragment>
      <h2>Price</h2>
      <ul>
        <li>Monsterra : {monsteraPrice}$</li>
        <li>Lierre : {lierrePrice}$</li>
        <li>Bouquet de fleurs : {bouquetPrice}$</li>
      </ul>
      <div>Total : {monsteraPrice + lierrePrice + bouquetPrice}$</div>
    </React.Fragment>
  );
};

export default Cart



