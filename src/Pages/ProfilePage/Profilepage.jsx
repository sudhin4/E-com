import "../ProfilePage/Profilepage.css";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { LuBox } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { GrDeliver } from "react-icons/gr";
import { CiLogin } from "react-icons/ci";
import Myproducts from "./myproducts";
import userprofile from "./user profile Image.jpg";
import { useEffect, useState, useContext } from "react";
import Signup from "../../Component/Signup/Signup";
import Contextvalue from "../../Data/Context";
import noitems from "../ProfilePage/Noitem.jpg";
import { FaPencilAlt } from "react-icons/fa";
import Editname from "./Editname";
import { useNavigate } from "react-router-dom";

function Profilepage({ productremovefunction }) {
  const productvalue = useContext(Contextvalue);
  const [myproductvaluestate, setproductvaluestate] = useState([]);
  const [value, setvalue] = useState(false); // Default should be false

  useEffect(() => {
    setproductvaluestate(...myproductvaluestate, productvalue);
  }, [productvalue]);

  useEffect(() => {
    // Update `value` when `myproductvaluestate` has items
    if (myproductvaluestate.length > 0) {
      setvalue(true);
      
    } else {
      setvalue(false);
      
    }
  }, [myproductvaluestate]);

  const navigate = useNavigate();

  const [open, setopen] = useState(false);
  const [myproduts, setmyproducts] = useState();

  const [openedit, setopenedit] = useState(false);

  const [name, setname] = useState("Username");
  const [email, setemail] = useState("Email");

  function openandclose() {
    setopen(true);
    setmyproducts(false);
  }

  // Open and close for the edit name and email
  function onclickedit(value) {
    setopenedit(value);
  }

  function getname(value) {
    setname(value);
  }

  function getemail(value) {
    setemail(value);
  }

  // Profilepage delete function state
  const [profproductdelete, setprofproductdelete] = useState();

  // Delete function for the main data like product page

  function productremovefunctionprofilepage(id, category) {
    
    productremovefunction(id, category);
    setprofproductdelete(id);
  }

  //delete function for desktop profilepage

  useEffect(
    () =>

      setproductvaluestate(prev =>
        prev.filter(item => item.id !== profproductdelete)
      ),
      [profproductdelete]
  );

  return (
    <>
      <div className="full_content_section_comp">
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
              <button className="editbtn" onClick={() => onclickedit(true)}>
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

         <div className="right_section_div">
          {value ? (
            myproductvaluestate.map((item) => (
              <div key={item.id} className="Myproductdivsection">
                <Myproducts
                  data={item}
                  Name={item.Name}
                  Image={item.Image}
                  Price={item.Price}
                  id={item.id}
                  category={item.category}
                  productremove={productremovefunctionprofilepage}
                />
              </div>
            ))
          ) : (
            <div className="Noitems_div">
              <img src={noitems} alt="" className="noitem image" />
              <h1 className="notitemserror">No Items...</h1>
              <button
                onClick={() => navigate(`/Addproduct`)}
                className="return_addproductbtn"
              >
                Add product
              </button>
            </div>
          )}
        </div> 


        {openedit ? (
          <>
            <div className="Editname_overlay"></div>
            <div className="Editname_open">
              <Editname
                close={onclickedit}
                valueName={getname}
                valueemail={getemail}
              />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Profilepage;
