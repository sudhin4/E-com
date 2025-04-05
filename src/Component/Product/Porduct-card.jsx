import { FaShoppingCart } from "react-icons/fa";

import "../Product/Product-card.css";
import { useNavigate } from "react-router-dom";

function Product_card({ image, name, price }) {
  return (
    <>
      <div className="whole_card">
        <div className="whole_card_content">
          <img src={image} alt="" className="product_image" />

          <h1 className="ProductName">{name}</h1>
          <p className="Price">₹{price}</p>
          <div className="Buy_like">
            <button className="Buybtn">Buy</button>
            <FaShoppingCart className="Cart_btn" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Product_card;
