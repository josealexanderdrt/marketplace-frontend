import Gallery from "../components/Gallery";
import { Container } from "react-bootstrap";
import icons_user from "../../src/assets/image/icons_user.png";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import Footerlam from "../components/Footerlam";

const MyProfile = () => {
  const { username } = useContext(StoreContext);

  return (
    <Container className="view_profile">
      <div className="icons_user_style">
        <img src={icons_user} alt="user" />
        <h2>¡Hola! {username}</h2>
      </div>
      <Gallery />
      <Footerlam/>
    </Container>
  );
};

export default MyProfile;
