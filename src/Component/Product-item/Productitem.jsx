import { useParams } from "react-router-dom";
import "../Product-item/Productitem.css";
import { IoBagHandle } from "react-icons/io5";

function Productitem({ image, name, discount_price, percentage, price }) {
  return (
    <>
      <div className="Whole_card">
        <div className="card">
          <div className="MobIle_card_purpose_image">
            <img src={image} alt="" className="image_" />
          </div>
          <div className="Mobile_card_purpose_content">
            <div className="content_sec">
              <p className="product_name">{name}</p>
              <div className="discount_price_div">
                <p className="discount_price">₹{discount_price} </p>
                <p className="discount_percentage">-{percentage}%</p>
              </div>

              <div className="Price_btn_div">
                <p className="price">₹{price}</p>
                <button className="addtocart">
                  <IoBagHandle className="addicon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Productitem;
