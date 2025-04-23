// import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import "../Header/Header.css";
import { Cartvalues } from "../../Data/Context";
import { IoReorderThreeOutline } from "react-icons/io5";
import Footer from "../Footer/Footer";

function Header({ image, clickvalue, getvalue, sidebaropenfun }) {
  const navigate = useNavigate();
  const placeholdername = [
    " Search 'Mobiles'",
    "Search 'Home Appliances'",
    "Search 'Perfumes'",
    "Search 'Watches'",
    "Search 'T-shirts'",
    "Search 'Toys'",
  ];
  const [placeholder, setplaceholder] = useState(0);
  const [cartitems, setcartitem] = useState(false);
  const cartvalue = useContext(Cartvalues);

  useEffect(() => {
    if (cartvalue.length > 0) {
      setcartitem(true);
    } else {
      setcartitem(false);
    }
  }, [cartvalue]);

  useEffect(() => {
    const interval = setInterval(() => {
      setplaceholder((previndex) => (previndex + 1) % placeholdername.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [open, setopen] = useState(false);

  function handleopensignup() {
    setopen(true);
    senddata();
  }
  function senddata() {
    getvalue(open);
  }
  return (
    <>
      <div className="Header">
        <div
          className="mobiel_hamburger_logo"
          onClick={() => sidebaropenfun(true)}
        >
          <IoReorderThreeOutline className="Hamburger_logo" />
        </div>
        <div className="logo_sec">
          <img
            src={image}
            alt="Icon"
            className="img"
            onClick={() => navigate("/")}
          />
          <h3 className="Logo">E-Comm</h3>
          <IoMdSearch className="searchicon" />
          <input
            type="text"
            placeholder={placeholdername[placeholder]}
            className="searchbar"
          />
        </div>

        <div className="Icons_div">
          {/* <IoPerson className="icons" /> */}
          <Link to="/Addproduct">
            <button className="become_seller btn">
              <FaShop className="seller_icons" />
              Sell
            </button>
          </Link>
          <button className="usericonbtn">
            <FaRegCircleUser className="usericons " />
            <div className="hoverclass">
              <Link to="/Myprofile">
                <li className="dropdown product_">My Profile</li>
              </Link>
             
              
              <Link to="/Contact_us">
                <li className="dropdown customer">Contact</li>
              </Link>
              

              <li className="dropdown setting">Settings</li>
              <li className="dropdown signin" onClick={handleopensignup}>
                Sign in
              </li>
            </div>
          </button>

          <FaCartShopping className="icons" onClick={() => clickvalue(true)} />
          <span
            className={`cartsection numberofitems ${cartitems ? "opennn" : ""}`}
          ></span>
        </div>
      </div>
    </>
  );
}
export default Header;
