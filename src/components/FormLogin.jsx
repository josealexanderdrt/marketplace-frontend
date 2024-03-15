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
//import { StoreContext } from "../context/StoreContext";
import { login } from "../components/services/loginService.js";
import { UserContext } from "../context/UserContext.jsx";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const FormLogin = () => {

  //const { users,setUserId, setUsername } = useContext(StoreContext);
  const { users,setUserId, setUsername } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    const userLogin = {
      user:{
        email:email,
        password: password
      }
    }

    const user = login(userLogin)
    .then((response)=>{
        if (!response.code && response.code !=200) {
          console.log("errorr");
          throw new Error(response.error);
      }
      console.log(" Respuesta ",response)
      setUserId(response.id_user)
      setUsername(response.name)
      localStorage.setItem("token", response.token);
      navigate(`/profile/${response.id_user}`, { state: { userName: response.name } });
    }

    ).catch((error)=>{
      toast.error("👀😢"+error, {
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

    );
    console.log("user res",user);
   
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
        Inicia sesión con Google
      </Button>
      <hr className="vertical_line" />
      <Form
        className="form_login d-flex justify-content-center flex-column formulario"
        onSubmit={handleLogin}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
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
          <Form.Label>Contraseña</Form.Label>
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
