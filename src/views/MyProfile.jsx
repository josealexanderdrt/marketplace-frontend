import React from "react";
import Gallery from "../components/Gallery";
import { Container } from "react-bootstrap";
import icons_user from "../../src/assets/image/icons_user.png";
import { useLocation } from "react-router-dom";

const MyProfile = () => {
  const location = useLocation();
  const userName = location.state?.userName || "Usuario Desconocido";
  return (
    <Container className="view_profile">
      <div className="icons_user_style">
        <img src={icons_user} alt="user" />
        <h2>{userName}</h2>
      </div>
      <Gallery />
    </Container>
  );
};

export default MyProfile;
