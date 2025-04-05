import '../Addtocart/Addtocart.css';
import { FaRegTrashCan } from "react-icons/fa6";

function MappedProduct({Name,Image,Price,id,deleteitem}){

    function deletecartvalue(id){
        deleteitem(id);
    }
    return(
        <>
        <div className='wholecart_setion'>
            <div className="imagediv_cart">
                <img src={Image} alt="productimage" className='productimage_cart'/>
            </div>
            <div className="contentsection_cart">
                <h4 className="productname_cart">{Name}</h4>
                <h4 className="pricediv">₹{Price}</h4>
                <h5 className="items_cart">Total Items: 1</h5>
                <FaRegTrashCan className='trashicon_cart' onClick={()=>deletecartvalue(id)}/>
            </div>
            
        </div>
        </>
    );
}
export default MappedProduct;