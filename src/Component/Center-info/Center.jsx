import  {furniture_img}  from "../../Data/Product-image";
import { furniture_content } from "../../Data/Product-image";
import '../Center-info/Center.css'
function Center(){
    return(
        <>
        <div className="whole_content">
            <div className="Center_content">
            <img src={furniture_img} alt="" className="Center_furniture_img" />
            <div>
                <h1 className="center_heading">{furniture_content.heading}</h1>
                <p className="center_paragraph">{furniture_content.para}</p>
                <button className="centerbtn" >Explore</button>
            </div>
        </div>
        </div>
        
        </>
    );
}
export default Center;