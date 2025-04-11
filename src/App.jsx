import Header from "./Component/Header/Header.jsx";
import Baglog from "./Image/Bag logo.png";
import Silder from "./Component/Main/Slider.jsx";
import "./App.css";
import img1 from "./Image/Apple add image.jpg";
import img2 from "./Image/frontimage 1.png";
import img3 from "./Image/Apple watch image.jpg";
import Products from "./Component/listofproducts/Products.jsx";
import ProductsImage from "./Data/Product-image.js";
import Center from "./Component/Center-info/Center.jsx";
import cardData from "./Data/Product-card.js";
import Sellersec from "./Component/Seller-sec/Seller.jsx";
import SellerImg from "./Image/seller.jpg";
import Contact from "./Component/Contact/Contact.jsx";
import Signup from "./Component/Signup/Signup.jsx";
import trainImg from "./Image/Train Img.png";
import watchimg from "./Image/Watch clipart.png";
import headphoneImg from "./Image/Headphone clipart.png";
import { useState, useEffect } from "react";
import Addproductmodal from "./Component/Addproduct/Addproduct.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { productdatastatic } from "./Data/products.js";
import Categorymapsec from "./Component/productmap/categorymapsec.jsx";
import Productpage from "./Component/Product-page/productpage.jsx";
import Addtocart from "./Component/Addtocart/Addtocart.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Mainpageproductpage from "../src/Component/MaiinpageProductpage/MainpageProductpage.jsx";
import Productcartcomponent from "./Component/Product/productcardcomponent.jsx";
import Contextvalue from "./Data/Context.js";
import { Cartvalues } from "./Data/Context.js";
import Profilepage from "./Pages/ProfilePage/Profilepage.jsx";
import BuyNow from "./Component/BuyNow/BuyNow.jsx";
import Payment from "./Component/BuyNow/Payment.jsx";
import PhoneImage from "./Component/PhoneImage/PhoneImage.jsx";
import Mobilesidebar from "./Component/MobileThreebtnfunction/Mobileoptions.jsx";
import ProfileMobilepage from "./Component/Header/Mobileprofilepage.jsx";
import Myproductpagemobile from "./Pages/Mobilepages/mymobilproduct.jsx";
import ContactPage from "./Pages/ContactPage/Contactpage.jsx";
import { myorders } from "./Data/Context.js";
import Myorders from "./Pages/Myorders/Myorders.jsx";
import Myordermap from "./Pages/Myorders/Myordermap.jsx";

function App() {
  let inputobject = [];
  const imaegeurl = [];

  const mainpagedata = productdatastatic.cardData;

  const [getdata, setgetdata] = useState([]);
  const [newgetdata, setnewgetdata] = useState([]);
  const [categoryvalue, setcategoryvalue] = useState();
  const [urlpreview, seturlpreview] = useState(imaegeurl);
  const [getcartdata, setgetcartdata] = useState([]);

  // gettting datas from the child component
  const handlegetdatafunction = (data) => {
    setgetdata((prev) => [...prev, data]);
    setnewgetdata(data);
  };

  const handleimagelink = (link) => {
    seturlpreview([...urlpreview, link]);
  };

  const get_categoryvalue = (category) => {
    setcategoryvalue(category);
  };

  // Getting a Addtocartvalue from the child Component

  function getaddtocartvalues(values) {
    if (values !== null && values !== undefined) {
      setgetcartdata((previtem) => [...previtem, values]);
    }
  }

  // get the values

  // Log section

  const arraylist = {
    Mobiles: productdatastatic.Mobiles,
    HomeAppliance: productdatastatic.HomeAppliance,
    Watches: productdatastatic.Watches,
    Dresses: productdatastatic.Dresses,
    Perfumes: productdatastatic.Perfumes,
    Bags: productdatastatic.Bags,
    Shoes: productdatastatic.shoes,
  };

  // push data into a static data

  const [pushdata, setpushdata] = useState(arraylist);

  const pushdataintoarray = (category) => {
    if (!category) {
    }

    setpushdata((prevstate) => ({
      ...prevstate,
      [category]: prevstate[category]
        ? [...prevstate[category], newgetdata]
        : [newgetdata],
    }));
  };

  const keypair = {
    Mobiles: "Mobiles",
    HomeAppliance: "HomeAppliance",
    Watches: "Watches",
    Perfumes: "Perfumes",
    Dresses: "Dresses",
    Bags: "Bags",
    Shoes: "Shoes",
  };

  function crtcategoryvalue() {
    const keyvalue = categoryvalue;
    if (keyvalue) {
      pushdataintoarray(keyvalue);
    }
  }

  useEffect(() => {
    crtcategoryvalue();
  }, [getdata]);

  const fimages = [img1, img2, img3];
  const [open, setopen] = useState(false);
  // const [openSeller, setOpenseller] = useState(false);

  function handleOpen() {
    setopen(true);
  }
  function handleClose() {
    setopen(false);
  }

  //Login open and close function

  const [loginopen, setloginopen] = useState(false);

  function handlegetLogindata() {
    setloginopen(true);
  }
  function closelogindata() {
    setloginopen(false);
  }

  //cart Open section
  const [iscartopen, setcartopen] = useState(false);

  function getcartopenclose(value) {
    setcartopen(value);
  }

  function closebtncartvalue(value) {
    setcartopen(value);
  }

  // identify the cart product values

  const wantedid = getcartdata;

  const filteritem = Object.values(pushdata).flatMap((group) =>
    group.filter((item) => wantedid.includes(item.id))
  );

  //product page id and price section

  const [getprice, setgetprice] = useState();

  function getpricefromproduct(value) {
    setgetprice(value);
  }

  // Getting the value from the add to cart
  const [getcartprice, setgetcartprice] = useState();

  function handlegetcartprice(value) {
    setgetcartprice(value);
  }

  // Getting price value from the Mainpage product

  function handlegetmainpgeprice(value) {
    setgetprice(value);
  }

  // Sidebar open and close function

  const [issidebaropen, setsidebaropen] = useState(false);
  function sidebaropenfunction(value) {
    setsidebaropen(value);
  }

  // Function to delete the items

  function deleteitem(deleteid, idcategory) {
    setpushdata((prevdata) => ({
      ...prevdata,
      [idcategory]: prevdata[idcategory].filter((item) => item.id !== deleteid),
    }));
  }

  // Myorder function

  const [orderproducttt, setorderproducttt] = useState();
  const [checkingid, setcheckingid] = useState();
  const [getpaymentdata, setgetpaymentdata] = useState([]);

  function getproducttomyorder(value) {
    setorderproducttt(value); // object data
    // setorderproducttt(value)
  }

  function getidformyorder(value) {
    setcheckingid(value); // id to checking process
  }

  function getpaymentcomponentdata(value) {
    setgetpaymentdata((prev) => [...prev, value]);
  }

  return (
    <>
      <Contextvalue.Provider value={getdata}>
        <BrowserRouter>
          <Cartvalues.Provider value={filteritem}>
            <div
              className={`addtocart_component ${iscartopen ? "open" : ""}`}
              id="cartcomponent"
            >
              <Addtocart
                closebuttonvalue={closebtncartvalue}
                productvalues={pushdata}
                getcartprice={handlegetcartprice}
              />
            </div>

            <div
              className={`mobilesidebar_component ${
                issidebaropen ? "open" : ""
              }`}
            >
              <Mobilesidebar closesidebarfun={sidebaropenfunction} />
            </div>

            <Header
              image={Baglog}
              click={handleOpen}
              getvalue={handlegetLogindata}
              clickvalue={getcartopenclose}
              sidebaropenfun={sidebaropenfunction}
            />
            <div className="signup_sec">
              {loginopen && (
                <Signup click={handleClose} getclosevalue={closelogindata} />
              )}
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Silder image={fimages} />
                    <h1 className="Products_heading">Products</h1>
                    <div className="Products_item">
                      <Link to="/Mobiles">
                        <Products
                          Images={ProductsImage[0].src}
                          para={ProductsImage[0].para}
                        />
                      </Link>
                      <Link to="/HomeAppliance">
                        <Products
                          Images={ProductsImage[1].src}
                          para={ProductsImage[1].para}
                        />
                      </Link>
                      <Link to="/Shoes">
                        <Products
                          Images={ProductsImage[2].src}
                          para={ProductsImage[2].para}
                        />
                      </Link>
                      <Link to="/Bags">
                        <Products
                          Images={ProductsImage[3].src}
                          para={ProductsImage[3].para}
                        />
                      </Link>
                      <Link to="/Watches">
                        <Products
                          Images={ProductsImage[4].src}
                          para={ProductsImage[4].para}
                        />
                      </Link>
                      <Link to="/Dresses">
                        <Products
                          Images={ProductsImage[5].src}
                          para={ProductsImage[5].para}
                        />
                      </Link>
                      <Link to="/Perfumes">
                        <Products
                          Images={ProductsImage[6].src}
                          para={ProductsImage[6].para}
                        />
                      </Link>
                    </div>
                    {/** The MobileOnly render */}
                    <div className="mobileProductsection">
                      <PhoneImage />
                    </div>

                    <Center />

                    <div className="whole_product_card">
                      {mainpagedata.map((item) => (
                        <Productcartcomponent key={item.id} item={item} />
                      ))}
                    </div>

                    <div className="seller_image_content">
                      <Sellersec
                        img={SellerImg}
                        headphone={headphoneImg}
                        trainimg={trainImg}
                        watchImg={watchimg}
                      />
                    </div>
                    <div className="contact_sec">
                      <Contact />
                    </div>
                    <div className="Footer_app">
                      <Footer />
                    </div>
                  </>
                }
              />

              <Route
                path="/Addproduct"
                element={
                  <Addproductmodal
                    getdata={handlegetdatafunction}
                    getimagelink={handleimagelink}
                    getcategoryvalue={get_categoryvalue}
                  />
                }
              />
              <Route
                path="/Myprofile"
                element={
                  <Profilepage
                    data={getdata}
                    getclosevalue={closelogindata}
                    productremovefunction={deleteitem}
                  />
                }
              />
              <Route
                path="/product/:id"
                element={
                  <Mainpageproductpage
                    carddatavalue={mainpagedata}
                    getidfrom={handlegetmainpgeprice}
                    gettingaddtocartfun={getaddtocartvalues}
                  />
                }
              ></Route>
              <Route
                path="/:category/:id"
                element={
                  <Productpage
                    data={pushdata}
                    carddata={cardData}
                    gettingaddtocartfun={getaddtocartvalues}
                    sendidfrombuy={getpricefromproduct}
                    getproductarray={getproducttomyorder}
                    getmyorderproduct={getidformyorder}
                  />
                }
              />
              <Route
                path="/:category"
                element={<Categorymapsec data={pushdata} />}
              />
              <Route
                path="/:id/BuyNow"
                element={<BuyNow pricedetail={getprice} />}
              />

              <Route
                path="/cart/BuyNow"
                element={<BuyNow pricedetail={getcartprice} />}
              />
              <Route
                path="/Paymentgatway"
                element={
                  <Payment
                    pricedetail={getprice}
                    myorderproductobj={orderproducttt}
                    getpaymentdata={getpaymentcomponentdata}
                    checkingid={checkingid}
                  />
                }
              />
              <Route
                path="/mobileprofilepage"
                element={
                  <div className="Profile_page_for_mobile">
                    <ProfileMobilepage />
                  </div>
                }
              />
              <Route path="/Contact_us" element={<ContactPage />} />
              <Route
                path="/Myoders"
                element={<Myordermap data={getpaymentdata} />}
              />
              <Route
                path="/mobilemyproductpage"
                element={
                  <div className="mobilemyproductpage">
                    <Myproductpagemobile
                      data={getdata}
                      getclosevalue={closelogindata}
                      productremovefunction={deleteitem}
                    />
                  </div>
                }
              />
            </Routes>
          </Cartvalues.Provider>
        </BrowserRouter>
      </Contextvalue.Provider>
    </>
  );
}

export default App;
