import "../Addproduct/Addproduct.css";
import React, { useEffect, useState } from "react";
import PublishModal from "../Modalforerror/Error";

function Addproductmodal({ getdata, getcategoryvalue }) {
  const inputvalues = {
    id: "",
    Name: "",
    percentage: "",
    category: "",
    discount_price:0,
    Price:0,
    Image: "",
    discription: "",
  };
  const urllink = "";

  const [data, setdata] = useState(inputvalues);
  const [urlpreview, seturlpreview] = useState(urllink); // url store data

  const [isvisible, setvisibile] = useState(false);
  const [visibleimagerender, setvisibilerender] = useState(false);
  const [modalvisile, setmodalvisbile] = useState(false);

  const getimages = (event) => {
    const imagesfromuser = event.target.files[0];
    const preview = URL.createObjectURL(imagesfromuser); // change the image into the url
    seturlpreview(preview); // store a value in a state
    setvisibilerender(true);
  };

  // add a image to object

  useEffect(() => {
    data.Image = urlpreview;
  }, [urlpreview]);

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const categoryvalue = data.category;

  const imageaddress = urlpreview;

  function getnewid() {
    const Newid = Date.now();
    data.id = Newid;
  }

  function clearvalues() {
    setdata({ ...inputvalues });
    seturlpreview("");
    setvisibilerender(false);
  }
  function clearurl() {
    seturlpreview("");
    setvisibilerender(false);
  }

  useEffect(() => {
    getnewid();
  }, [data]);

  function senddatatoparent() {
    getdata(data);
    getcategoryvalue(categoryvalue);
    clearvalues();
  }

  function getallvaluecorrectly() {
    const isempty = Object.values(data).some(
      (value) => typeof value == "string" && value.trim() === ""
    );

    if (isempty) {
      setvisibile(true);
    } else {
      senddatatoparent();

      setvisibile(false);
      setmodalvisbile(true);
    }
  }

  return (
    <>
      {modalvisile ? (
        <>
          <div className="ModalImpact_div"></div>
          <div className="modal">
            <PublishModal />
          </div>
        </>
      ) : null}

      <div className="Whoel_content">
        <div className="Heading_seller">
          <h1 className="Adproductheading">Adds Your Product</h1>
          <p className="subheading">
            List your product and sell your products in this website
          </p>
        </div>

        <div className="Whole_input_section">
          {!visibleimagerender && (
            <div className="Input_img_div">
              <label htmlFor="file-upload" className="label Image_label">
                Upload Image
              </label>
              <br />
              <p className="drop_file">Drop file</p>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                className="input img_input"
                name="Image"
                onChange={getimages}
              />
            </div>
          )}

          {/* After the image div */}
          {visibleimagerender && (
            <div className="afterimagerender">
              <img src={imageaddress} className="Afterimagesection" />
              <div className="buttons_cancel_save">
                <button className="cancelbtn" onClick={() => clearurl()}>
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="OtherInputSec">
            <div>
              <label className="label name_label">Title</label>
              <br />
              <input
                type="text"
                className="input name_input"
                placeholder="Product Name"
                value={data.Name}
                name="Name"
                onChange={handlechange}
              />
              <br />
            </div>

            <div>
              <label className="label category_label">
                Choose the category
              </label>
              <br />
              <select
                required
                name="category"
                id="Selectoptions"
                className="select__"
                value={data.category}
                onChange={handlechange}
                defaultValue="choose a option"
              >
                <option className="optionss">Choose a category</option>

                <option value="Mobiles" className="optionss">
                  Mobiles
                </option>
                <option value="HomeAppliance" className="optionss">
                  Home Appliance
                </option>
                <option value="Shoes" className="optionss">
                  Shoes
                </option>
                <option value="Bags" className="optionss">
                  Bags
                </option>
                <option value="Watches" className="optionss">
                  Watches
                </option>
                <option value="Dresses" className="optionss">
                  Dresses
                </option>
                <option value="Perfumes" className="optionss">
                  Perfumes
                </option>
              </select>
              <br />
            </div>

            {/* The price section */}

            <div className="Price_section">
              <div>
                <label className="label description_label">
                  Original price
                </label>
                <br />
                <input
                  type="number"
                  name="discount_price"
                  placeholder="₹55,000"
                  id="Original_price"
                  className="input description_input price_section_box"
                  value={data.discount_price}
                  onChange={handlechange}
                ></input>
                <br />
              </div>
            <div className="SellingPrice_mobile_gird">
              <div>
                <label className="label price_label">Selling price</label>{" "}
                <br />
                <input
                  type="number"
                  id="Selling_price"
                  name="Price"
                  className="input price_input price_section_box"
                  placeholder="₹45,000"
                  value={data.Price}
                  onChange={handlechange}
                />
              </div>
              <div>
                <label className="label percentage_label price_label">
                  Discount
                </label>
                <br />
                <input
                  type="number"
                  id="discount_percentage"
                  className="input percentage_input price_section_box"
                  placeholder="10%"
                  name="percentage"
                  value={data.percentage}
                  onChange={handlechange}
                />
              </div>
              </div>
            </div>
            <div>
              <label className="label discription_label ">Discription</label>{" "}
              <br />
              <textarea
                name="discription"
                id="discription"
                className="inputt discription"
                placeholder=""
                value={data.discription}
                onChange={handlechange}
              ></textarea>
            </div>

            {/* Terms and conditons section */}

            <div className="radio_checkbox">
              <div className="radio1 radio_content">
                <input type="checkbox" className="checkbox_inp" />
                <p className="textforradiocheckbox">
                  Above data is correct and genuinely
                </p>
              </div>
              <div className="radio2 radio_content">
                <input type="checkbox" className="checkbox_inp" />
                <p className="textforradiocheckbox">
                  Accept all terms and conditions
                </p>
              </div>
            </div>

            {isvisible && (
              <div>
                <p className="Errormessageclose">*Please fill the all field</p>
              </div>
            )}
          </div>
        </div>

        {/* <p className={classnameforcheckvalue}>*Please fill all the inputs</p> */}

        <div className="buttons">
         
          <button
            className="btn_seller"
            id="publish_btn"
            onClick={getallvaluecorrectly}
          >
            Sell
          </button>
        </div>
      </div>
    </>
  );
}
export default Addproductmodal;
