import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Formulary = () => {


  const navigate = useNavigate();
  return (
    <Form className='d-flex justify-content-center flex-column formulario'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
         {/*  We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3  " controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button className="boton rounded-button" variant="dark" type="submit">
        Login
      </Button>
      <Button className="boton rounded-button" variant="dark mt-2" type="submit"
      onClick={() => {
        navigate(`/Register`);
      }}>
        Register
      </Button>
    </Form>
  )
}

export default Formulary