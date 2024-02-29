import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import google_aut from "../../src/assets/image/google_aut.png";
import "./FormRegister.css";

const FormRegister = () => {
    const { loginWithRedirect } = useAuth0();
    const navigate = useNavigate();
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
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicRut">
    <Form.Label>RUT</Form.Label>
    <Form.Control type="text" placeholder="Enter RUT" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      {/*  We'll never share your email with anyone else. */}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter address" />
  </Form.Group>

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
  )
}

export default FormRegister