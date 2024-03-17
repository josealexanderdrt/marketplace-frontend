import Favorite from "../components/Favorite";
import { Container } from "react-bootstrap";
import icons_user from "../../src/assets/image/icons_user.png";
import { useContext } from "react";
//import { StoreContext } from "../context/StoreContext";
import { UserContext } from "../context/UserContext";

const MyFavorite = () => {
  //const { userId, username } = useContext(StoreContext);
  const { userId, username } = useContext(UserContext);

  return (
    <Container>
      <Favorite userId={userId} username={username} />
    </Container>
  );
};

export default MyFavorite;
