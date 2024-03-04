/* import React, {useState} from 'react' */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import google_aut from "../../src/assets/image/google_aut.png";
import "./FormLogin.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const FormLogin = () => {

  const { users,setUserId } = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* const location = useLocation(); */
  /*   const { userName } = location.state || {}
  const { userId } = useParams(); */
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      toast.warn(" 👀😢fields cannot be empty", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    if (!emailRegex.test(email)) {
      toast.warn("😪 The email format is not correct", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      return;
    }

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setUserId(user.id)
      navigate(`/profile/${user.id}`, { state: { userName: user.name } });
    } else {
      toast.error("👀😢El email y la contraseña no coinciden", {
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
    }
  };

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
        onSubmit={handleLogin}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            {/*  We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3  " controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button className="boton rounded-button" variant="dark" type="submit">
          Iniciar
        </Button>
        <Button
          className="boton rounded-button"
          variant="dark mt-2"
          type="submit"
          onClick={() => {
            navigate(`/users`);
          }}
        >
          Registrar
        </Button>
        <ToastContainer />
      </Form>
    </Container>
  );
};

export default FormLogin;
