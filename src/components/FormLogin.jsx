/* import React, {useState} from 'react' */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import google_aut from "../../src/assets/image/google_aut.png";
import "./FormLogin.css";
const Formulary = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  /* const handleLoginWithGoogle = () => {
    console.log('Intentando iniciar sesión con Google...');
    loginWithRedirect({ screen_hint: 'signup', connection: 'google-oauth2' })
      .then(() => {
        console.log('Inicio de sesión con Google exitoso.');
        navigate('/'); // Redirecciona a la página principal después del inicio de sesión
      })
      .catch(error => {
        console.error('Error al iniciar sesión con Google:', error);
      });
  }; */

  return (
    <Container className="box_daddy_form">
      <Button
        className="auth_google rounded-button"
        variant="light mt-5"
        style={{fontSize: '1rem'}}
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
      <Form className="form_login d-flex justify-content-center flex-column formulario">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            {/*  We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3  " controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button className="boton rounded-button" variant="dark" type="submit" onClick={() => {
          navigate(`/profile`)
        }}>
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
      </Form>
    </Container>
  );
};

export default Formulary;
