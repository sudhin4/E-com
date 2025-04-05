import { useContext, useEffect, useState } from "react";
import "../Addtocart/Addtocart.css";
import { LuClipboardList } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { TbInvoice } from "react-icons/tb";
import { Cartvalues } from "../../Data/Context";
import { use } from "react";

function PriceDetailbuy({price}) {
  let pricedetail = price

  let addtocartprice = useContext(Cartvalues);

 
  
  let totalprice = pricedetail + 40;

  return (
    <>
      <div className="Wholecartprice_div">
        <h2 className="BillDetails">Bill details</h2>
        <div className="Price_details itemm_total">
          <LuClipboardList className="Logo_icon" />
          <h4 className="item_total_name Label">Total Items:</h4>
          <p3 className="item_totalll_price price_tag">₹{pricedetail}</p3>
        </div>
        <div className="delivey_charge Price_details">
          <MdDeliveryDining className="Logo_icon" />
          <h4 className="Delivery_charge_name Label"> Delivery charges:</h4>
          <p3 className="Delivery_charge_price  price_tag">₹40</p3>
        </div>
        <div className="Grand_total total_grand Price_details">
          <TbInvoice className="Logo_icon" />
          <h3 className="Grandtotal_tag">
            <b>Grand total:</b>
          </h3>
          <p3 className="Total_price ">
            <b>₹{totalprice}</b>
          </p3>
        </div>
      </div>
    </>
  );
}
export default PriceDetailbuy;
