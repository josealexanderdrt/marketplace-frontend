import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import addproductimg from "../assets/image/addproduct.png"

const PreviewProduct = ({ name, description, price, url_image, username }) => {
  const [image, setImage] = useState(addproductimg);

  useEffect(() => {
    if (url_image) {
      setImage(url_image);
    }
  }, [url_image]);


  return (
    <Container className=" align-items-center d-flex justify-content-center pt-4 ">
      <Card className="photo w-50 p-3  center-block " style={{ width: "16rem" }} >
        <Card.Img
          variant="top"
          src={image}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt={name}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Publicada por {username}</small>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default PreviewProduct