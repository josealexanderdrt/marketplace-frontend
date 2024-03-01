import React from "react";
import Gallery from "../components/Gallery";
import { Container } from "react-bootstrap";
import icons_user from "../../src/assets/image/icons_user.png";

const MyProfile = () => {
  return (
    <Container className="view_profile">
      <div>
        <img className="icons_user_style" src={icons_user} alt="user" />
        <h2>Jean Pino</h2>
      </div>
      <Gallery />
    </Container>
  );
};

export default MyProfile;
