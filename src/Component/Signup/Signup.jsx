import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiMobile1 } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import "../Signup/Signup.css";
import { IoClose } from "react-icons/io5";
import React, { useEffect, useState } from "react";


function Signup({click,getclosevalue,}) {

  const signupvalue = {
    Email:"",
    Password:"",
    number:""
}

    const [getvalue,setgetvalue] = useState(signupvalue);
    const [close ,isloginclose] = useState(true);

    function getdata(){
      isloginclose(false)
      sendclosedata();
    }
    function sendclosedata(){
      getclosevalue(close);
    }

    function getvaluefunction(e){
      setgetvalue({...getvalue,[e.target.name]:e.target.value})
    }

    function handledisplay(){
      setTimeout(() => {
        getclosevalue(close)
      }, 1000);
    }

    





  return (
    <>
        
      <div className="Whole_signup_content">
        <div className="whole_heading_content">
        <div className="close_mark_div"><IoClose className="close_mark" onClick={getdata} /></div>
          <h1 className="Signup_heading">Create an Account</h1>
          <p className="signup_para">Connect with our website</p>
        </div>
        <div className="Inputs">
          <label className="labelInput">Enter a Email</label>
          <div className="email">
            <input
              type="email"
              name="Email"
              id="email"
              className="input_email"
              placeholder="example23@gmail.com"
              onChange={getvaluefunction}
            />
            <MdOutlineEmail className="input_icon" />
          </div>

          <label className="labelInput">Create password</label>
          <div className="password">
            <input
              type="password"
              name="Password"
              id="password"
              className="input_email"
              placeholder="*******"
              onChange={getvaluefunction}
            />
            <RiLockPasswordLine className="input_icon" />
          </div>

          <label className="labelInput">Enter mobile number</label>
          <div className="mobile">
            <input
              type="number"
              name="number"
              id="mobilenumber"
              className="input_email"
              placeholder="+91"
              onChange={getvaluefunction}
            />
            <CiMobile1 className="input_icon" />
          </div>
        </div>
        <button className="Signup" onClick={handledisplay} >Sign up</button>
        <p className="orwith">Or with</p>
        <div className="continue_with_google">
          
          <button className="google_account"> <FaGoogle className="google_icon"/>Continue with google </button>
        </div>
        <div className="already_have_acc">
            <p className="aha">Already have a account</p>
            <p className="signup_btn">Login?</p>
        </div>
      </div>
       
    </>
  );
}
export default Signup;
