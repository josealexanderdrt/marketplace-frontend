import Gallery from "../components/Gallery";
import { Container } from "react-bootstrap";
import icons_user from "../../src/assets/image/icons_user.png";
import { useContext } from "react";
//import { StoreContext } from "../context/StoreContext";
import { UserContext } from "../context/UserContext";

const MyProfile = () => {
  //const { username } = useContext(StoreContext);
  const { username } = useContext(UserContext);

  return (
    <Container className="view_profile">
      <div className="icons_user_style">
        <img
          src={icons_user}
          alt="user"
          style={{ width: "200px", height: "200px" }}
        />
        <h2>¡Hola! {username}</h2>
      </div>
      <Gallery />
    </Container>
  );
};

export default MyProfile;
