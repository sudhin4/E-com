import "../Product-page/productpageee.css";
import { MdOutlinePayment } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

function Mainpageproductpage({ carddatavalue,getidfrom,gettingaddtocartfun }) {
  const { id } = useParams();
  const naviagate = useNavigate();

  const product = carddatavalue.find((item) => item.id === parseInt(id));

  if (!product) return <h1>The product Not Founddd</h1>;

  const [quantity, setquantity] = useState(1);

  function addbtn() {
    setquantity(quantity + 1);
  }
  function minusbtn() {
    setquantity(quantity - 1);
  }

  // State from the values and the main page

  const [storevalue,setstorevalue]=useState([]);
  const [getidd,setgetid]= useState();

  useEffect(()=>{
      if(getidd!==null){
        setstorevalue((prev)=>[...prev,getidd])
      }
    },[getidd])
    
    useEffect(()=>{
      gettingaddtocartfun(getidd)
    },[storevalue])

  
  function getid(id){
    naviagate(`/${id}/BuyNow`)
    getidfrom(product.Price)
  }

  
  return (
    <>
      <div className="pagenamesec">
        <p className="pagenameee">
          Home/Mobiles/<b className="pr">product</b>
        </p>
      </div>
      <div className="whole_product_page">
        <div className="imagesection">
          <img src={product.Image} alt="Product image" className="image__" />
        </div>
        <div className="content__section">
          <h2 className="Productnameee">{product.Name}</h2>
          <h4 className="productcategory">{product.category}</h4>
          <div className="price_div">
            <div>
              <p className="discount__price">₹{product.discount_price}</p>
              <p className="price_">₹{product.Price}</p>
            </div>
            <div className="percentage_div">
              <p className="discout_percentage">-{product.percentage}%</p>
            </div>
          </div>

          {/* add a product quantity */}
          <div className="whole_box">
            <button className="Minus_bnt quantitybnt" onClick={minusbtn}>
              -
            </button>
            <p className="number">{quantity}</p>
            <button className="add_btn quantitybnt" onClick={addbtn}>
              +
            </button>
          </div>

          <div className="button_div">
            <button className="buy_btn buy" onClick={()=>getid(product.id)}>Buy Now</button>
            <br />
            
          </div>

          <div className="Logo_and_name">
            <div className="onlinepaymentdiv logodiv">
              <MdOutlinePayment className="onlinepayment logo" />
              <p className="onlinepaymentname logoname">
                All Payment<p className="paymentonly">Available </p>
              </p>
            </div>
            <div className="freeshippingdiv logodiv">
              <RiTruckLine className="freeshipping logo" />
              <p className="freeshippingname logoname">Free Shipping</p>
            </div>
            <div className="cashondeliverydiv logodiv">
              <BsCash className="cod logo" />
              <p className="cashondeliveryname logoname">Cash on delivery</p>
            </div>
          </div>
        </div>
      </div>

      <div className="description_div">
        <p className="description_heading">Description</p>
        <p2 className="description">{product.discription}</p2>
      </div>

      <div className="Footer_productPage">
        <Footer/>
      </div>
    </>
  );
}
export default Mainpageproductpage;
