import React from "react";
import { useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import { Container } from "react-bootstrap";
import icons_user from "../../src/assets/image/icons_user.png";

const MyProfile = () => {
  const { name } = useParams(); // Obtener el nombre de usuario de los parámetros de la ruta

  return (
    <Container className="view_profile">
      <div className="icons_user_style">
      <img src={icons_user} alt="user" />
        <h5>{name}</h5>
      </div>
      <Gallery />
    </Container>
  );
};

export default MyProfile;
