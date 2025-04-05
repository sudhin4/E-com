import "../listofproducts/Products.css";
import { useEffect, useState } from "react";

function Products({ Images, para }) {
  return (
    <>
      <div className="whole_image_div">
        <div className="image_div">
          <img src={Images} alt="" className="Image" />
        </div>
        <p className="paragraph">{para}</p>
      </div>
    </>
  );
}
export default Products;
