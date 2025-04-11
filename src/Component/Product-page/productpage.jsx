import "../Product-page/productpageee.css";
import { MdOutlinePayment } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { myorders } from "../../Data/Context";

function Productpage({
  data,
  gettingaddtocartfun,
  sendidfrombuy,
  getproductarray,
  getmyorderproduct,
}) {
  const navigate = useNavigate();
  const { id, category } = useParams();
  const product = data[category]?.find((item) => item.id === parseInt(id));

  if (!product) return <h1>The product Not Found</h1>;

  const [quantity, setquantity] = useState(1);
  const [storevalue, setstorevalue] = useState([]);
  const [getid, setgetid] = useState();

  function addbtn() {
    setquantity(quantity + 1);
  }
  function minusbtn() {
    setquantity(quantity - 1);
  }

  useEffect(() => {
    if (getid !== null) {
      setstorevalue((prev) => [...prev, getid]);
    }
  }, [getid]);

  useEffect(() => {
    gettingaddtocartfun(getid);
  }, [storevalue]);

  function sendanotherpage(id) {
    navigate(`/${id}/BuyNow`);
    sendidfrombuy(product.Price);
    // getidfrommyorder(product.id)
    getproductarray(product); // send product
    getmyorderproduct(product.id); // send product id
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
            <button
              className="buy_btn buy"
              onClick={() => sendanotherpage(product.id)}
            >
              Buy Now
            </button>
            <br />
            <button
              className="buy_btn cart"
              onClick={() => setgetid(product.id, product.category)}
            >
              Add to cart
            </button>
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
        <Footer />
      </div>
    </>
  );
}
export default Productpage;
