import Myorders from "./Myorders";
import { myorders } from "../../Data/Context";
import { useContext } from "react";

function Myordermap({data}){

    const orderid = useContext(myorders);

    console.log(orderid,'The myodercomponent')

    const productdata = data;

    console.log(productdata);



    return (
        <>
        <Myorders/>
        </>
    )
}
export default Myordermap;