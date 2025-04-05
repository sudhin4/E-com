import "./Payment.css";
import { FaChevronDown } from "react-icons/fa";
import { CardPayment, UPIPayment } from "./Cardandupi";
import { useEffect, useState } from "react";
import Ordercomplete from "../ordercomplete/Ordercomplete";
import { useNavigate } from "react-router-dom";
import PriceDetailbuy from "./Price_deatils";

function Payment({pricedetail}) {
  const Paymethod = ["DebitCard", "UPI", "Cashondelivery"];
  const [cardopen, setcardopen] = useState(false);
  const [upiopen, setupiopen] = useState(false);

  const [inputvalue, setinputvalue] = useState("");
  const [isopen, setopen] = useState(false);
  const navigate = useNavigate();

  function handlechange(e) {
    setinputvalue(e.target.value);
  }

  

  useEffect(() => {
    if (inputvalue === "Card") {
      setcardopen(true);
      setupiopen(false);
    } else if (inputvalue === "upi") {
      setupiopen(true);
      setcardopen(false);
    } else if (inputvalue === "cash") {
      setupiopen(false);
      setcardopen(false);
    }
  }, [inputvalue]);

  function afterbtnclicked(){
    setopen(false)
    navigate("/")
  }

  function openandclose() {
    setopen(true);
    setTimeout(() => {
      afterbtnclicked();
    }, 2000);
  }


  return (
    <>
    <div className="Payment_details__">
    <PriceDetailbuy price={pricedetail} />
    </div>
      <div className="full_payment_div ">
        <h3 className="PaymentmethodHeading">Payment Method</h3>
        <div className="Cards box_payment">
          <input
            type="Radio"
            name="Cardcheck"
            id=""
            value="Card"
            className="card_checkBox"
            onChange={handlechange}
          />
          <label className="card_checkbox_label label_for_pa">
            Pay using Debit Card
          </label>
          <FaChevronDown className="downarrowcard" />
        </div>

        {cardopen && <CardPayment />}
        <div className="Upi box_payment">
          <input
            type="Radio"
            name="Cardcheck"
            id=""
            value="upi"
            className="card_checkBox"
            onChange={handlechange}
          />
          <label className="card_checkbox_label label_for_pa">
            Pay using UPI
          </label>
          <FaChevronDown className="downarrowupi" />
        </div>
        {upiopen && <UPIPayment />}
        <div className="Cashondelivery box_payment ">
          <input
            type="Radio"
            name="Cardcheck"
            id=""
            className="card_checkBox"
            value="cash"
            onChange={handlechange}
          />
          <label className="card_checkbox_label label_for_pa">
            Cash on delivery
          </label>
        </div>

        <div className="buttons_payment">
          <button className="cancelbtn_payment btnnnn">Cancel</button>
          <button className="Place_order btnnnn" onClick={openandclose}>
            Order
          </button>
        </div>
      </div>
      <p className="terms_condition">Terms and condition are apply</p>

      {isopen ? (
        <>
        <div className="modal_overlay"></div>
          <div className="Modal_open">
          <Ordercomplete />
        </div>
        </>
      ) : null}
    </>
  );
}

export default Payment;
