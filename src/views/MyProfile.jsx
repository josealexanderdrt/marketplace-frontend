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
