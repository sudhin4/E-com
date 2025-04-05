import { SiTicktick } from "react-icons/si";
import './Ordercomplete.css'



function Ordercomplete(){
    return(
        <>
        <div className="whole_component_order_complete">
            <SiTicktick className="Logo_for_complete"/>
            <h2 className="Heading_complete">Order is placed sucessfully.</h2>
            <p className="check_the_details">Check out your's Orders..!</p>
            
        </div>
        </>
    )
}

export default Ordercomplete;