//import React from "react";
import Gallery from "../components/Gallery";
import { Container } from "react-bootstrap";
import icons_user from "../../src/assets/image/icons_user.png";
//import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const MyProfile = () => {
/*   const location = useLocation();
  const userName = location.state?.userName || "Usuario Desconocido"; */
  const { userId,users } = useContext(StoreContext);
  console.log("StoreContext",StoreContext)
  console.log("usersId",userId)
 
  const user = users.find(
    (user) => user.id === userId 
  );
  console.log("user user", user)
  const userName =user.name
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
