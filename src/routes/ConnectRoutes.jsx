import { Routes as Rs, Route as R } from "react-router-dom";

import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Login from "../views/Login";
import Register from "../views/Register";
import MyProfile from "../views/MyProfile";
import MyFavorite from "../views/MyFavorite";

const ConnectRoutes = () => {
  return (
    <Rs>
      <R path="/" element={<Home />} /> {/* este es para el logo */}
      <R path="/auth_user" element={<Login/>} />{/* Para iniciar sesion */}
      <R path="/users" element={<Register />} /> {/* Para register  */}
      <R path="/profile" element={<MyProfile />} /> {/* Aqui tenemos que ocupar params */}
      <R path="/favorite" element={<MyFavorite />} /> {/* Aqui tenemos que ocupar params */}
      <R path="*" element={<NotFound />} /> {/* Por si ingresa alguna ruta mal */}
    </Rs>
  );
};

export default ConnectRoutes;
