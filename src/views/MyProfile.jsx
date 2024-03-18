/* import Gallery from "../components/Gallery";
import { Container } from "react-bootstrap";
//import icons_user from "../../src/assets/image/icons_user.png";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

//import { StoreContext } from "../context/StoreContext";

const MyProfile = () => {
  const { username, url_icons } = useContext(UserContext);
  console.log("username:", username);
  console.log("URL del avatar en MyProfile:", url_icons);

  return (
    <Container className="view_profile">
      <div className="icons_user_style">
        {url_icons ? ( // Verificar si hay una URL de avatar
          <img
            src={url_icons}
            alt="user"
            style={{ width: "200px", height: "200px" }}
          />
        ) : (
          <div>No hay avatar disponible</div>
        )}
        <h2>¡Hola! {username}</h2>
      </div>

      <Gallery />
    </Container>
  );
};

export default MyProfile; */



import Gallery from "../components/Gallery";
import { Container } from "react-bootstrap";

//import { StoreContext } from "../context/StoreContext";

const MyProfile = () => {
  //const { username } = useContext(StoreContext);

  return (
    <Container className="view_profile">
      <Gallery />
    </Container>
  );
};

export default MyProfile;
