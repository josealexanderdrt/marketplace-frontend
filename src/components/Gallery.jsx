import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import IconHeart from "./IconHeart";
import "./Gallery.css";

const Gallery = () => {
  const navigate = useNavigate();
  const { products, setProducts, users } = useContext(StoreContext);
  const userId = users.length > 0 ? users[0].id : null;
  const userName = users.length > 0 ? users[0].name : "";

  const addFavorite = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          isFavorite: !product.isFavorite,
        };
      }
      return product;
    });
    setProducts(newProducts);
  };

  return (
    <Container style={{ marginLeft: "4rem" }}>
      <div className="my_publication_favorite">
        {userId && (
          <>
            <Button
              className="custom-button"
              variant="dark"
              onClick={() => navigate(`/profile/${userId}`, { state: { userName } })}
            >
              Mis publicaciones
            </Button>
            <Button
              className="custom-button"
              variant="dark"
              onClick={() => navigate(`/favorite/${userId}`, { state: { userName } })}
            >
              Mis Favoritos
            </Button>
          </>
        )}
      </div>
      <div className="gallery grid-columns-5 p-3">
        {products.map((product, i) => (
          <Card
            key={i}
            className="photo"
            onClick={() => addFavorite(product.id)}
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src={product.url}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <IconHeart className="border_heart" filled={product.isFavorite} />
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="dark" className="w-100">
                {product.price}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
