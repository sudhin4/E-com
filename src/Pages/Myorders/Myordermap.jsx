import Myorders from "./Myorders";
import { myorders } from "../../Data/Context";
import { useContext, useEffect, useState } from "react";
import Noorderimage from '../Myorders/No orders.jpg'
import "../Myorders/Myorders.css";

function Myordermap({ data }) {
  const [productdata,setproductdata] = useState(data);
  const [isempty, setisempty] = useState(false);

  useEffect(() => {
    if (productdata.length<=0) {
      setisempty(false);
    } else {
      setisempty(true);
    }
  });

  console.log(productdata)

  // removing my orders functions 
  const [getremoveidstate,setgetremoveidstate] = useState();

   function getremoveid(id){
    setgetremoveidstate(id)
   }

   useEffect(()=>{
    if(getremoveidstate){
      const filteritem = productdata.filter(item=>item.id !== getremoveidstate)
      console.log(filteritem,'THe seller'  )
    setproductdata(filteritem)
    }
    
   },[getremoveidstate])

   console.log(getremoveidstate)

  return (
    <>
      {isempty ? (
        
        <div className="MYorder_map_cidv">

        
          <h3 className="My_orders_heading">My orders</h3>
          {productdata.map((item, index) => {
            const random8Digit = Math.floor(
              10000000 + Math.random() * 90000000
            ); // Unique ID
            const today = new Date();
            const after4Days = new Date(today);
            after4Days.setDate(today.getDate() + 4);
            const formattedDate = after4Days.toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }); // "DD/MM/YYYY"

            return (
              <div key={index} className="order_class_product">
                <Myorders
                  productid = {item.id}
                  Name={item.Name}
                  Price={item.Price}
                  Image={item.Image}
                  OrderId={random8Digit}
                  date={formattedDate}
                  getremoveidfun={getremoveid}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="No_items_orders">
          <img src={Noorderimage} alt="" className="NoordeproductImage" />
          <h1 className="No_orders">No Orders...!</h1>
        </div>
      )}
    </>
  );
}
export default Myordermap;
