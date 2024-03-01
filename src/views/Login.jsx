import React from "react";
import mundo_cubo from "../../src/assets/image/mundo_cubo.png";
import FormLogin from "../components/FormLogin";
import { Container } from "react-bootstrap";


const Login = () => {
  return (
    <Container className="view_login">
      <img className="cubos3" src={mundo_cubo} alt="mundo_cubos" />
      <FormLogin />
    </Container>
  );
};

export default Login;
