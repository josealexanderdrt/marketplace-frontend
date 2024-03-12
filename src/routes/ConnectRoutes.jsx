import { Routes as Rs, Route as R } from "react-router-dom";

import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Login from "../views/Login";
import Register from "../views/Register";
import MyProfile from "../views/MyProfile";
import MyFavorite from "../views/MyFavorite";
import AddProduct from "../views/AddProduct"
import AllproductsComponent from "../components/AllproductsComponent";

const ConnectRoutes = () => {
  return (
    <Rs>
      <R path="/" element={<Home />} /> 
      <R path="/auth_user" element={<Login/>} />
      <R path="/users" element={<Register />} /> 
      <R path="/profile/:id" element={<MyProfile />} /> 
      <R path="/favorite/:id" element={<MyFavorite />} />
      <R path="*" element={<NotFound />} /> 
      <R path="/addproduct" element={<AddProduct />} /> 
      <R path="/allproducts" element={<AllproductsComponent />} /> 
    </Rs>
  );
};

export default ConnectRoutes;
