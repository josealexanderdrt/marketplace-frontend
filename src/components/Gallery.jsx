import { useContext, useEffect } from "react";
//import { StoreContext } from "../context/StoreContext";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import IconHeart from "./IconHeart";
import "./Gallery.css";
import { UserContext } from "../context/UserContext";
import { ProductContext } from "../context/ProductContext";

const Gallery = () => {
  const navigate = useNavigate();
  //const { myProducts, setMyProducts,userId } = useContext(StoreContext);
  const { myProducts, setMyProducts } = useContext(ProductContext);
  const { userId } = useContext(UserContext);

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
    <Container style={{ marginLeft: "4rem" }}>
      <div className="my_publication_favorite">
        {userId && (
          <>
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
          </>
        )}
      </div>

      <div className="gallery grid-columns-5 p-3">
        {userProducts.map((product, i) => (
          <Card key={i} className="photo" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src={product.url_image}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <button
                className="icon-heart-button"
                onClick={() => addFavorite(product.id_product)}
              >
                <IconHeart
                  className="border_heart"
                  filled={product.isFavorite}
                />
              </button>
              <Card.Title>{product.name_product}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>Precio:${product.price}</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
