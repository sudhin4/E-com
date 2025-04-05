import "../Addtocart/Addtocart.css";
import { IoClose } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { Cartvalues } from "../../Data/Context";
import MappedProduct from "./Mappedproduct";
import Cartprice from "./Cartprice";
import cartemptyyy from "../Addtocart/Cartis.jpg";
import { useNavigate } from "react-router-dom";

function Addtocart({ closebuttonvalue,getcartprice }) {
  const products = useContext(Cartvalues);
  const [cartproducts, setcartproducts] = useState(products);
  const [getid, setgetid] = useState();

  const [checkproduct, setCheckproduct] = useState(false);

  const naviagate = useNavigate();

  useEffect(() => {
    setcartproducts(products);
  }, [products]);

  function deletevalue(id) {
    setcartproducts(cartproducts.filter((item) => item.id !== id));
  }

  useEffect(() => {
    if (cartproducts.length > 0) {
      setCheckproduct(true);
    } else {
      setCheckproduct(false);
    }
  }, [cartproducts]);



  function gettigvalue(value){
    getcartprice(value)
  }

  return (
    <>
      <div className="heading_cartsec">
        <h3 className="heading">My cart</h3>
        <button className="close_btn_cart">
          <IoClose
            className="closeMark_Cart_sec"
            onClick={() => closebuttonvalue(false)}
          />
        </button>
      </div>

      {checkproduct ? (
        <div className="ifproductshave">
          {cartproducts.map((item) => {
            return (
              <MappedProduct
                Name={item.Name}
                Image={item.Image}
                Price={item.Price}
                noofItems={item.item}
                id={item.id}
                deleteitem={deletevalue}
              />
            );
          })}
          <Cartprice value={cartproducts} getingcartprice={gettigvalue} />

          <p3 className="UNnder_term">Terms and condition are apply</p3>
          <div className="proceed_to_buy">
            <button className="Proceed_to_buy_btn" onClick={()=>naviagate(`/cart/BuyNow`)}>Proceed to order</button>
          </div>
        </div>
      ) : (
        <div className="NOitemsarehave">
          <img src={cartemptyyy} alt="" className="CartemptyImage" />
          <h1 className="Noitems">Cart is empty...</h1>
        </div>
      )}
    </>
  );
}
export default Addtocart;
