import { useContext, useState } from "react";
import productimage from "../Myorders/Iphone image.jpg";
import "../Myorders/Myorders.css";

function Myorders({ Name, Price, Image, OrderId, date }) {
  return (
    <>
      <div className="whole_myproduct_page">
        <div className="whole_content_myoders">
          <div className="Myproduct_image_div">
            <img src={Image} alt="" className="productimage" />
          </div>

          <div className="productdetails_section">
            <h3 className="productname_heading">{Name}</h3>
            <p className="productprice_in_myorders">₹{Price}</p>
          </div>
          <div className="SUbdiv_for_myproduct">
            <div className="deliveryorderid_deliverydate">
              <h3 className="order_id_heading">Order Id</h3>
              <p className="delivery_id">#{OrderId}</p>
            </div>
            <div className="deliverydate_div">
              <h3 className="delivery_date_heading">Delivery at</h3>
              <p className="delivery_date">{date}</p>
            </div>
          </div>
          <div className="buttons_for_myproducts">
            <button className="view_more_btn_for_myproduct">View More</button>
            <button className="Cancel_order_btn_for_myproduct">
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Myorders;
