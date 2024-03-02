import React from "react";
import Favorite from "../components/Favorite";
import { Container } from "react-bootstrap";
import icons_user from "../../src/assets/image/icons_user.png";

const MyFavorite = () => {
  return (
    <Container className="view_profile">
      <div className="icons_user_style">
        <img src={icons_user} alt="user" />
        <h2>users{/* {userName} */}</h2>
      </div>
      <Favorite />
    </Container>
  );
};

export default MyFavorite;
