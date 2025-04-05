import { useEffect, useState } from "react";
import "./Editname.css";
import { IoClose } from "react-icons/io5";

function Editname({
  close,
  valueName,
  valueemail,
  functionclose_mobilesection,
}) {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [error, seterror] = useState(false);

  function getname(e) {
    setname(e.target.value);
  }
  function getemail(e) {
    setemail(e.target.value);
  }

  function clear() {
    setemail("");
    setname("");
  }

  function consoleee() {
    if (name.length <= 10) {
      valueName(name);
      valueemail(email);
      clear();
      setTimeout(() => {
        close(false);
      }, 1000);
    } else {
      seterror(true);
    }
  }

  return (
    <>
      <div className="whole_modal">
        <div className="input_editmodal">
          <button
            className="close_mark__"
            onClick={() => functionclose_mobilesection(false)}
          >
            <IoClose />
          </button>
          <input
            type="text"
            name="username"
            id=""
            className="name_edit_inp"
            placeholder="Username"
            onChange={getname}
            value={name}
          />
          <input
            type="email"
            name="Email"
            id=""
            className="Email"
            placeholder="Email"
            onChange={getemail}
            value={email}
          />
          {error ? (
            <p className="error_section">**Username only contain 10 letters</p>
          ) : null}

          <button className="Submit_btnmodal" onClick={consoleee}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default Editname;
