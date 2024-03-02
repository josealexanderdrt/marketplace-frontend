import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import { StoreContext } from "../context/StoreContext";
import google_aut from "../../src/assets/image/google_aut.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,toast, Bounce } from "react-toastify";
import "./FormRegister.css";

const FormRegister = () => {
  const { users, setUsers } = useContext(StoreContext);
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
      toast.error("Rut o el correo ya existe en nuestra base de datos, verifique", {
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

    // Agregar nuevo usuario
    const newUser = {
      id: users.length + 1,
      name: name,
      rut: rut,
      email: email,
      password: password,
      address: address,
      role: "user",
      icons_url: "",
      auth_google: "",
    };

    setUsers([...users, newUser]);

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
    <Container className="box_daddy_form">
      <Button
        className="auth_google rounded-button"
        variant="light mt-5"
        style={{ fontSize: "1rem" }}
        onClick={() =>
          loginWithRedirect({
            screen_hint: "signup",
            connection: "google-oauth2",
          })
        }
      >
        <img className="icons_google_aut" src={google_aut} alt="aut-google" />{" "}
        Sign in with Google
      </Button>
      <hr className="vertical_line" />
      <Form
        className="form_login d-flex justify-content-center flex-column formulario"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
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
          <Form.Label>Email</Form.Label>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
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
      <ToastContainer />
    </Container>
  );
};

export default FormRegister;
