import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Card, Button, Container, Badge } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Transition from "../components/Transition.jsx"
import "./Gallery.css";


const ProductsView = () => {
  const { products } = useContext(StoreContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth_user");
  };

  return (
    <div className="container p-4" id="productos">
      <div className="row row-cols-3 g-4">
        {products.map((product, i) => (
          <Card key={i} className="card p-2 m-3 " style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={product.url}
              alt={"Product " + product.name}
              style={{ width: "18rem", height: "18rem" }}
            />
            <Card.Body>
              <Card.Title>{product.name} </Card.Title>
              <Container className="d-flex justify-content-center align-items-center m-2 p-1">
                <Button
                  variant="outline-dark"
                  className="m-1"
                  onClick={handleClick}
                >
                  Comprar
                </Button>
                <Button
                  variant="outline-dark"
                  className="m-1"
                  onClick={handleClick}
                >
                  Agregar
                </Button>
                <Badge pill bg="warning" text="dark" className="p-2">
                  {product.price}
                </Badge>
              </Container>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsView;
