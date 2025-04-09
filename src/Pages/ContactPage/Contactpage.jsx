import ContactImage from "../ContactPage/Contact_us_image.jpg";
import "../ContactPage/Contactpage.css";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Modalforthank from "./Modalforthnkcont";

function ContactPage() {
  const [namecontact, setnamecontact] = useState("");
  const [emailcontact, setemailcontact] = useState("");
  const [messagecontact, setmessagecontact] = useState("");
  const [openmodal, setopenmodal] = useState(false);
  const [opensuccessmodal,setopensuccessmodal] = useState(false);

  function handlecheckthevalue() {
    if (emailcontact && messagecontact && namecontact) {
      setopenmodal(false);
      setopensuccessmodal(true);
      setTimeout(() => {
        setemailcontact("");
        setnamecontact("");
        setmessagecontact("");
        setopensuccessmodal(false);
      }, 1000);
    } else{
      setopenmodal(true)
    }
  }
 
  
    
  
  

  return (
    <>
      {opensuccessmodal ? (
        <>
          <div className="modal_forthank_overlay"></div>
          <div className="modal_forthank_modal">
            <Modalforthank />
          </div>
        </>
      ) : null}

      <div className="WHole_contact_page">
        <div className="full_contact_page">
          <div className="left_image_section">
            <h2 className="contact_heading">Contact us..</h2>
            <img src={ContactImage} alt="" className="contact_image_left" />
          </div>
          <div className="right_content_section">
            <div className="forms_for_querys">
              <div className="form_input" >
                <label htmlFor="" className="label_for_form">
                  Enter your name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="Username_right_contact form_input_in"
                  placeholder="Name"
                  value={namecontact}
                  onChange={(e) => setnamecontact(e.target.value)}
                />
                <label htmlFor="" className="label_for_form">
                  Enter your email
                </label>
                <input
                  type="email"
                  className="email_right_contact form_input_in"
                  placeholder="example23@gmail.com"
                  value={emailcontact}
                  onChange={(e) => setemailcontact(e.target.value)}
                />
                <label htmlFor="" className="label_for_form">
                  Type message
                </label>
                <textarea
                  type="text"
                  className="message_rigth_contact form_input_in text_area_form"
                  value={messagecontact}
                  onChange={(e) => setmessagecontact(e.target.value)}
                />
                {openmodal ? <p className="error_paraa">*All fields are required</p> : (
                  null
                )}

                <button
                  className="Submit_btn_contact_form"
                  onClick={handlecheckthevalue}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_icon_box">
          <div className="conatact_headphone contact_box">
            <TfiHeadphoneAlt className="contact_iconnnn headphone__" />
            <h4 className="contact_name_hea">+91 6383965891</h4>
          </div>
          <div className="conatact_email contact_box">
            <MdOutlineEmail className="contact_iconnnn email_" />
            <h4 className="contact_name_hea"> sudhinnaveen38@gamil.com</h4>
          </div>
          <div className="conatact_loaction contact_box">
            <FaLocationDot className="contact_iconnnn location_" />
            <h4 className="contact_name_hea">Somewhere in the earth</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
