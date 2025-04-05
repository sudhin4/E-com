import Myproducts from "../ProfilePage/myproducts";
import { useState, useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Contextvalue from "../../Data/Context";
import noitems from "../Mobilepages/Noitem.jpg";
import "../Mobilepages/wholemobilepage.css";

function Myproductpagemobile({ productremovefunction }) {
  const productvalue = useContext(Contextvalue);
  const [myproductvaluestate, setproductvaluestate] = useState([]);
  const [value, setvalue] = useState(false); // Default should be false

  const navigate = useNavigate();

  if (productvalue == "") {
    // No valuess
    null;
  } else {
    useEffect(() => {
      setproductvaluestate(...myproductvaluestate, productvalue);
    }, [productvalue]);
  }

  useEffect(() => {
    // Update `value` when `myproductvaluestate` has items
    if (myproductvaluestate.length > 0) {
      setvalue(true);
      // values are in
    } else {
      setvalue(false);
      // value are not
    }
  }, [myproductvaluestate]);

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
      setproductvaluestate((prev) =>
        prev.filter((item) => item.id !== profproductdelete)
      ),
    [profproductdelete]
  );

  

  return (
    <>
      <div className="right_section_div_mobile">
        {value ? (
          myproductvaluestate.map((item) => (
            <div key={item.id} className="Myproductdivsection">
              <Myproducts
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
          <div className="Noitems_div_mobile">
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
    </>
  );
}

export default Myproductpagemobile;
