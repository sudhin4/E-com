import "./BuuyNow.css";
import { LuSquareUserRound } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa";
import PriceDetailbuy from "./Price_deatils";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BuyNow({ pricedetail }) {
  let pricevalue = pricedetail;

  const navigate = useNavigate();

  const inputsvalues = {
    Name: "",
    Email: "",
    MobileNo: "",
    Address: "",
    City: "",
    District: "",
    State: "",
    Pincode: "",
  };

  const [input, setinput] = useState(inputsvalues);

  const getvalues = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  function clearvalue() {
    setinput({ ...inputsvalues });
  }
  function displayfunction() {
    clearvalue();
    setTimeout(() => {
      navigate(`/Paymentgatway`);
    }, 1000);
  }

  return (
    <>
      <div className="WHOLE_DIV">
        <div className="WholeBuyNowdiv">
          <h1 className="Deatils_for_delivery_heading">Billing Details</h1>
          <div className="Getting_detail_name_email">
            <h3 className="personal_Details">
              <LuSquareUserRound className="Logo_buyNow User" />
              Personal Information
            </h3>
            <label htmlFor="Name" className="labelll">
              Name*
            </label>
            <br />
            <input
              type="text"
              placeholder="Name"
              className="Input input_for_name"
              required
              name="Name"
              value={input.Name}
              onChange={getvalues}
            />
            <br />
            <label htmlFor="Email" className="labelll">
              Email
            </label>
            <br />
            <input
              type="text"
              placeholder="Email"
              className="Input input_for_email"
              name="Email"
              value={input.Email}
              onChange={getvalues}
            />
            <br />
            <label htmlFor="MobileNo" className="labelll">
              Mobile Number*
            </label>
            <br />
            <input
              type="Number"
              placeholder="Mobile Number"
              className="Input input_for_mobile"
              name="MobileNo"
              value={input.MobileNo}
              onChange={getvalues}
              maxLength={10}
            />
          </div>
          <div className="Address_section">
            <h2 className="Address_section_heading">
              <FaRegAddressCard className="Logo_buyNow address_logo" />
              Address
            </h2>
            <label htmlFor="Address" className="labelll">
              Address*
            </label>
            <br />
            <input
              type="text"
              placeholder="Address"
              className="Input Input_for_Address"
              name="Address"
              value={input.Address}
              onChange={getvalues}
            />
            <br />
            <label htmlFor="State" className="labelll">
              State
            </label>
            <br />
            <input
              type="text"
              placeholder="State"
              className="Input Input_for_State"
              name="State"
              value={input.State}
              onChange={getvalues}
            />
            <br />
            <label htmlFor="City" className="labelll">
              City
            </label>
            <br />
            <input
              type="text"
              placeholder="City"
              className="Input Input_for_City"
              name="City"
              value={input.City}
              onChange={getvalues}
            />
            <br />
            <label htmlFor="District" className="labelll">
              Disctrict
            </label>
            <br />
            <input
              type="text"
              placeholder="District"
              className="Input Input_for_District"
              name="District"
              value={input.District}
              onChange={getvalues}
            />
            <br />
            <label htmlFor="Pincode" className="labelll">
              Pincode*{" "}
            </label>
            <br />
            <input
              type="Number"
              placeholder="Pincode"
              className="Input Input_for_Pincode"
              name="Pincode"
              value={input.Pincode}
              onChange={getvalues}
              maxLength={7}
            />{" "}
            <br />
          </div>
        </div>
        <div className="Price_details_section">
          <div className="Price_detail">
            <PriceDetailbuy price={pricevalue} />
          </div>

          <div className="Button_section">
            <button className="Cancel_btn Buybutton">Cancel</button>
            <button className="Pay_btn Buybutton" onClick={displayfunction}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BuyNow;
