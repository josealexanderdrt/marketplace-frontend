import { useContext, useState } from "react";
import mundo_cubo_copia from "../../src/assets/image/mundo_cubo-copia.png";
import {
  Container,
  Image,
  Button,
  Form,
  Row,
  Col,
  Stack,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

//import { StoreContext } from "../context/StoreContext";
import google_aut from "../../src/assets/image/google_aut.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "./FormLogin.css";
import { signup } from "./services/signup.js";
import { UserContext } from "../context/UserContext";

const FormRegister = () => {
  //const { users, setUsers } = useContext(StoreContext);
  const { users, setUsers } = useContext(UserContext);
  const [name, setName] = useState("");
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos (puedes agregar más validaciones según tus necesidades)
    if (!name || !rut || !email || !password || !address) {
      toast.error("Todos los campos son obligatorios", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    // Verificar si el correo electrónico ya está registrado
    if (users.some((user) => user.email === email || user.rut === rut)) {
      toast.error(
        "Rut o el correo ya existe en nuestra base de datos, verifique",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      return;
    }

    // Agregar nuevo usuario
    const newUser = {
      user: {
        name: name,
        rut: rut,
        email: email,
        password: password,
        address: address,
        url_icons: "dd",
      },
    };

    setUsers([...users, newUser]);

    const signupupUser = signup(newUser)
      .then((response) => {
        if (response.userCreated) {
          navigate(`/auth_user`, {
            state: { userName: response.name },
          });
        } else {
          throw Error("Error al registrar usuario.");
        }
      })
      .catch((error) => {
        toast.error("👀😢" + error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });

    // Mostrar mensaje de éxito y redirigir al usuario
    toast.success("Te has registrado exitosamente", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    // Redirigir al usuario al inicio de sesión
    navigate("/auth_user");
  };
  //console.log(handleSubmit);
  return (
    <>
      <Container className="m-3 p-2 ">
        <Row>
          <Col sm className="d-flex justify-content-center">
            <Image
              src={mundo_cubo_copia}
              alt="mundo_cubos"
              className="img_lg"
            />
          </Col>
          <Col
            sm
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <h3 class="display-3">¡Hola! </h3>
            <h4 class="display-4">Bienvenido </h4>
            <Button
              className="auth_google rounded-button"
              variant="light"
              onClick={() =>
                loginWithRedirect({
                  screen_hint: "signup",
                  connection: "google-oauth2",
                })
              }
            >
              <img
                className="icons_google_aut "
                src={google_aut}
                alt="aut-google"
              />
              Iniciar con Google
            </Button>
          </Col>

          <Col sm className="d-flex align-items-center justify-content-center">
            <Form
              className="justify-content-center vertical_line"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRut">
                <Form.Label>RUT</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter RUT"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {/* <Form.Text className="text-muted">
          
          </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </Form.Group>

              <Button
                className="boton rounded-button"
                variant="dark mt-2"
                type="submit"
              >
                Registrar
              </Button>
            </Form>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
};

export default FormRegister;
