import React from 'react'
import { Container } from "react-bootstrap";
import FormRegister from "../components/FormRegister";
import mundo_cubo from "../../src/assets/image/mundo_cubo.png";

const Register = () => {
  return (
    <Container className="view_login">
      <img className="cubos3" src={mundo_cubo} alt="mundo_cubos" />
      <FormRegister />
    </Container>
  )
}

export default Register