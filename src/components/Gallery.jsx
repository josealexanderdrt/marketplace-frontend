import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IconHeart from "./IconHeart";
import "./Gallery.css";
import { UserContext } from "../context/UserContext";
import { ProductContext } from "../context/ProductContext";

import {
  Container,
  Image,
  Button,
  Form,
  Row,
  Col,
  Stack,
  Card,
} from "react-bootstrap";
import { User } from "@auth0/auth0-react";

const Gallery = () => {
  const navigate = useNavigate();
  const { myProducts, setMyProducts } = useContext(ProductContext);
  const { userId, username, url_icons } = useContext(UserContext);

  console.log("user useContext", UserContext);
  const userProducts = myProducts.filter(
    (product) => product.id_user === userId
  );

  const addFavorite = (id) => {
    const newProducts = myProducts.map((product) => {
      console.log("producto PRUEBA", product);
      if (product.id_product === id) {
        return {
          ...product,
          isFavorite: !product.isFavorite,
        };
      }
      return product;
    });
    setMyProducts(newProducts);
  };

  return (
    <Container>
      <Row>
        <Col sm={4} className="text-center">
          <div>
            <Image
              className="p-3"
              src={url_icons}
              alt="user"
              style={{ width: "180px", height: "180px" }}
            />
            <div>
              <span>¡Hola! </span>
              <h3 class="display-4">{username}</h3>
              <h3 class="display-6">Publicaciones</h3>
            </div>
          </div>
        </Col>
        <Col sm={8} className="text-center">
          <section className="text-center">
            {userId && (
              <>
                <Container className="m-3 d-flex justify-content-between ">
                  <Button
                    className="custom-button"
                    variant="dark"
                    onClick={() => navigate(`/profile/${userId}`)}
                  >
                    Mis publicaciones
                  </Button>
                  <Button
                    className="custom-button"
                    variant="dark"
                    onClick={() => navigate(`/favorite/${userId}`)}
                  >
                    Mis Favoritos
                  </Button>
                </Container>
              </>
            )}
          </section>
          <section className="d-flex flex-wrap">
            {userProducts.map((product, i) => (
              <Col key={i} sm={10} md={10} lg={4} className="mb-3">
                <Card key={i} className="photo m-1 p-2 ">
                  <Card.Img
                    variant="top"
                    src={product.url_image}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <div
                      className="icon-heart-button"
                      onClick={() => addFavorite(product.id_product)}
                    >
                      <IconHeart
                        className="border_heart"
                        filled={product.isFavorite}
                      />
                    </div>
                    <Card.Title>{product.name_product}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>
                      <strong>Precio:${product.price}</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
