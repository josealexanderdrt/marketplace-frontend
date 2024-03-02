import React, { useContext } from "react";
import Favorite from "../components/Favorite";
import { Container } from "react-bootstrap";
import icons_user from "../../src/assets/image/icons_user.png";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";


const MyFavorite = () => {
  const { userId } = useContext(StoreContext);
  const location = useLocation();
  const userName = location.state?.userName || "Usuario Desconocido";
  return (
    <Container className="view_profile">
      <div className="icons_user_style">
        <img src={icons_user} alt="user" />
        <h2>{userName}</h2>
      </div>
      <Favorite userId={userId} userName={userName} />
    </Container>
  );
};

export default MyFavorite;
