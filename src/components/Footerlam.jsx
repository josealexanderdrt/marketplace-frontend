import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col>
            <h5>Información de Contacto</h5>
            <p>Dirección: 123 Calle Principal, Santiago</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: contcato@lam.com</p>
          </Col>
          <Col>
            <h5>¡Unete a nuestra comunidad!</h5>
           <h6>Accede a todas nuestras ofrertas despues de registrarte </h6>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col>
            <p className="text-center">© 2024 Latin American Market.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;