import { FaRegUserCircle } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import '../MobileThreebtnfunction/Mobileoptions.css'
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";






function Mobilesidebar({closesidebarfun}){

    const navigate = useNavigate()

    function naviagatepage(value){
        if(value==="myprofile"){
            navigate(`/mobileprofilepage`)
            closesidebarfun(false)
        }
        else if(value === "myproducts"){
            navigate(`/mobilemyproductpage`)
            closesidebarfun(false)
        }
        else if(value === "customersupport"){
            navigate(`\Contact_us`);
            closesidebarfun(false)
        }
        else if(value === "Home"){
            navigate(`/`);
            closesidebarfun(false)
        }
        else if(value == "myorders"){
            navigate("/Myorders")
            closesidebarfun(false)
        }
    }

    return(
        <>
        <div className="Wolesidebar">
        <IoClose className="close_mark_sidebar" onClick={()=>closesidebarfun(false)}/>
        <div className="Profile_sidebar sidebar_div" onClick={()=>naviagatepage("Home")}>
            <IoHome className="logo_side profile_logo"/>
            <h3 className="Profile_heading heading_sideBar">Home</h3>
            </div>

            <div className="Profile_sidebar sidebar_div" onClick={()=>naviagatepage("myprofile")}>
            <FaRegUserCircle className="logo_side profile_logo"/>
            <h3 className="Profile_heading heading_sideBar">Profile</h3>
            </div>
            <div className="order_sidebar sidebar_div" onClick={()=>naviagatepage("myorders")}>
            <FaBoxOpen className="logo_side order_logo" />
            <h3 className="Yours_order_heading heading_sideBar">My orders</h3>
            </div>
            <div className="Myproducts_sidebar sidebar_div" onClick={()=>naviagatepage("myproducts")}>
            <LuBox className="logo_side myproducts_logo"/>
            <h3 className="Myproduct_heading heading_sideBar">My products</h3>
            </div>
            <div className="contact_us_sidebar sidebar_div" onClick={()=>naviagatepage("customersupport")}>
            <RiCustomerService2Fill className="logo_side customer_support_logo"/>
            <h3 className="cutomer_heading heading_sideBar">Customer Support</h3>
            </div>
        </div>
        </>
    )
}
export default Mobilesidebar