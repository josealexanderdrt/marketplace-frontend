import { Link } from "react-router-dom";
import cubos from "../../src/assets/image/cubos.png";
import cubosLoggedIn from "../../src/assets/image/cubosLoggedIn.png";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navigation.css";
import { useContext } from "react";
///import { StoreContext } from "../context/StoreContext";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import {
  FaArrowRightFromBracket,
  FaUpload,
  FaUserLarge,
  FaGlobe,
  FaCirclePlus,
  FaPhotoFilm,
  FaHeartCircleCheck,
} from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { UserContext } from "../context/UserContext";

const Navigation = () => {
  // const { username, userId } = useContext(StoreContext);
  const { username, userId } = useContext(UserContext);
  const { isAuthenticated, user, logout } = useAuth0();

  let imageToShow;
  if (userId === null) {
    imageToShow = cubos;
  } else {
    imageToShow = cubosLoggedIn;
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbarLam " bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image
              className="cubos1"
              src={imageToShow}
              alt="cubos"
              roundedCircle
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isAuthenticated ? (
              <>
                <Navbar.Text>
                  {user.name} <FaUserLarge />
                </Navbar.Text>

                <Nav.Link
                  onClick={() => logout({ returnTo: "/" })}
                  title="Salir"
                >
                  <FaArrowRightFromBracket />
                </Nav.Link>
              </>
            ) : username ? (
              <>
              
                <Nav.Link
                  as={Link}
                  to="/allproducts"
                  title="Todos los Productos"
                >
                  <FaGlobe />
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/addproduct"
                  title="Hacer una nueva Publicación"
                >
                  <FaCirclePlus />
                </Nav.Link>

                <Nav.Link as={Link} to={`/profile/${userId}`} title="Mi Perfil">
                  <FaUserLarge />
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  onClick={() => logout({ returnTo: "/" })}
                  title="Salir"
                >
                  <FaArrowRightFromBracket />
                </Nav.Link>
                <NavDropdown title={username} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={`/profile/${userId}`}>
                    <FaUserLarge /> Mi perfil
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to={`/favorite/${userId}`}>
                    <FaHeartCircleCheck /> Mis Favoritos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/addproduct">
                    <FaCirclePlus /> Publicar Producto
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/allproducts">
                    <FaGlobe /> Todos los Productos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <Nav.Link
                    as={Link}
                    onClick={() => logout({ returnTo: "/" })}
                    title="Salir"
                  >
                    <FaArrowRightFromBracket
                      style={{ marginLeft: "10px", color: "darkblue" }}
                    />
                    Cerrar sesión
                  </Nav.Link>
                </NavDropdown>
              </>
            ) : (
              <>
        <Navbar.Collapse>
                <Nav.Link as={Link} to="/auth_user">
                  Iniciar sesión
                </Nav.Link>

                <Nav.Link as={Link} to="/users">
                  Registrar
                </Nav.Link>
                </Navbar.Collapse>
              
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
