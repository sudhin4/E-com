import { useNavigate, useParams } from "react-router-dom";
import Productitem from "../Product-item/Productitem";

function Categorymapsec({ data }) {
  const { category } = useParams();
  const navigate = useNavigate();
  const productvalue = data[category];

  function getid(id) {
    navigate(`/${category}/${id}`);
  }
  return (
    <>
      <div className="whole_product_item_card">
        {productvalue.map((item) => (
          <div key={item.id} onClick={() => getid(item.id)}>
            <Productitem
              name={item.Name}
              image={item.Image}
              discount_price={item.discount_price}
              price={item.Price}
              percentage={item.percentage}
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default Categorymapsec;
