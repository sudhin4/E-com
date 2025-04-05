import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Productpage from "./Component/Product-page/productpage.jsx";
import PublishModal from "./Component/Modalforerror/Error.jsx";
import Editname from "./Pages/ProfilePage/Editname.jsx";
import Ordercomplete from "./Component/ordercomplete/Ordercomplete.jsx";
import PhoneImage from "./Component/PhoneImage/PhoneImage.jsx";
import ProfileMobilepage from "./Component/Header/Mobileprofilepage.jsx";
import Myproducts from "./Pages/ProfilePage/myproducts.jsx";
import Myproductpagemobile from "./Pages/Mobilepages/mymobilproduct.jsx";



createRoot(document.getElementById("root")).render(<App />);
