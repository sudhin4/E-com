import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Myorders from "./Pages/Myorders/Myorders.jsx";
import Profilepage from "./Pages/ProfilePage/Profilepage.jsx";


createRoot(document.getElementById("root")).render(<App />);
