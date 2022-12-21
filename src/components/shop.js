import { NavLink } from "react-router-dom";

import "../style/sass/shop.sass";

function Shop() {
  return (
    <div className="shop">
      <div className="wrapper">
        <div className="text">
          <h1>Sklep</h1>
          <h2>Prace dopiero trwają...</h2>
        </div>
        <div className="btnBack">
          <NavLink to="/">Powrót do strony głównej</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Shop;
