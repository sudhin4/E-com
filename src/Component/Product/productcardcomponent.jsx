import { useNavigate } from "react-router-dom";
import Product_card from "./Porduct-card";

const Productcartcomponent = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      key={item.id}
      className="productCard"
      onClick={() => navigate(`/product/${item.id}`)}
    >
      <Product_card
        image={item.Image}
        name={item.Name}
        price={item.Price}
        id={item.id}
      />
    </div>
  );
};
export default Productcartcomponent;
