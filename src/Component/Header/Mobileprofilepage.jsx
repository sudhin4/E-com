import Editname from "../../Pages/ProfilePage/Editname";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { LuBox } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { GrDeliver } from "react-icons/gr";
import { CiLogin } from "react-icons/ci";
// import Myproducts from "./myproducts";
import userprofile from '../Header/user profile Image.jpg'
import { useEffect, useState, useContext } from "react";
import "./Mobileprofilepage.css";

import { FaPencilAlt } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function ProfileMobilepage() {
  let name = "Username";
  let email = "Sudhinnaveen38@gamil.com";

  const [editname, seteditname] = useState(false);
  function openEdit(value){
    seteditname(value)
    
  }

  

  return (
    <>
      {editname ? (
        <>
          <div className="overlay-editname_section"></div>
          <div className="edit_name_component">
            <Editname functionclose_mobilesection={openEdit}  />
          </div>
        </>
      ) : null}

      <div className="whole_profile_page_comp">
        <div className="whole_profile_picture_div">
          <div className="profile_imagediv">
            <img
              src={userprofile}
              alt="profileImage"
              className="profile_imagee"
            />
          </div>
          <div className="profile_info_div">
            <h2 className="profile_user_name_h2">{name}</h2>
            <button className="editbtn" onClick={() => openEdit(true)}>
              <FaPencilAlt className="editpencil" />
            </button>

            <p className="profile_email_id_p">{email}</p>
          </div>
        </div>
        <div className="Main_profile_content_div content_divvvv">
          <div className="myorder_div content_divv">
            <GiCardboardBoxClosed className="myorder_logo Logooo" />
            <p className="orders_ my_orders_p">My Orders</p>
          </div>
          <div className="myproduct_div content_divv">
            <LuBox className="myproduct_logo Logooo" />
            <p className="products_ my_orders_p">My Products</p>
          </div>
          <div className="address_div content_divv">
            <FaRegAddressCard className="address_logo Logooo" />
            <p className="address_ my_orders_p">Address</p>
          </div>
          <div className="tracking_div content_divv">
            <GrDeliver className="Tracking_logo Logooo" />
            <p className="tracking_ my_orders_p">Tracking my orders</p>
          </div>
          <div className="settings_div content_divv">
            <IoSettingsSharp className="settings_logo Logooo" />
            <p className="settings_ my_orders_p">Settings</p>
          </div>
          <div className="Login_div content_divv">
            <CiLogin className="Login_logo Logooo" />
            <p className="login_ my_orders_p">Login</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileMobilepage;
