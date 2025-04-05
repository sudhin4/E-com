import { useContext } from "react";

import "../ProfilePage/WholeProfilepage.css";
import Contextvalue from "../../Data/Context";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";


function Myproducts({ Name, Image, Price,category, id,productremove }) {
  const navigate = useNavigate();

  function removeproduct(id,categoryy){
    
    productremove(id,categoryy)
  }

  

  return (
    <>
      <div className="whole_component">
        <div className="whole_cardd">
          <div className="whole_card_contentt">
            <img src={Image} alt="" className="product_imagee" />
            <div className="Name_and_price_div_produc">
              <h1 className="ProductNamee">{Name}</h1>
            <p className="Pricee">₹{Price}</p>
            </div>
            
            <div className="Buy_likee">
              <button className="Buybtnn" onClick={() => removeproduct(id,category)}>
              Remove
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate(`/Addproduct`)}
          className="Buybtnn addproductbtn returnButton"
        >
          Add product
        </button>
      </div>
    </>
  );
}
export default Myproducts;
