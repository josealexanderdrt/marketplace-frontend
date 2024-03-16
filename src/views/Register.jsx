import React from 'react'
import { Container } from "react-bootstrap";
import FormRegister from "../components/FormRegister";
import mundo_cubo from "../../src/assets/image/mundo_cubo.png";

const Register = () => {
  return (
    <Container className="view_login">
      <FormRegister />
    </Container>
  )
}

export default Register