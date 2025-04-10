import { useContext, useState } from "react";
import productimage from "../Myorders/Iphone image.jpg";
import "../Myorders/Myorders.css";


function Myorders() {

  return (
    <>
      <div className="whole_myproduct_page">
        <h3 className="My_orders_heading">My orders</h3>
        <div className="whole_content_myoders">
          <div className="Myproduct_image_div">
            <img src={productimage} alt="" className="productimage" />
          </div>

          <div className="productdetails_section">
            <h3 className="productname_heading">Iphone 16 pro max 235Gb</h3>
            <p className="productprice_in_myorders">₹1,23,999</p>
          </div>
          <div className="SUbdiv_for_myproduct">
            <div className="deliveryorderid_deliverydate">
            <h3 className="order_id_heading">Order Id</h3>
            <p className="delivery_id">#32286001</p>
          </div>
          <div className="deliverydate_div">
            <h3 className="delivery_date_heading">Delivery at</h3>
            <p className="delivery_date">23 April 2025</p>
          </div>
          </div>
          <div className="buttons_for_myproducts">
            <button className="view_more_btn_for_myproduct">View More</button>
            <button className="Cancel_order_btn_for_myproduct">Cancel Order</button>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default Myorders;
