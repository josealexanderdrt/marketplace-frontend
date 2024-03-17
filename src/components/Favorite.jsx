import { useContext } from "react";
//import { StoreContext } from "../context/StoreContext";
import { Container, Card, Button } from "react-bootstrap";
import IconHeart from "./IconHeart";
import "./Favorite.css";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
//import { UserContext } from "../context/UserContext";


const Favorite = ({ userId }) => {
  const navigate = useNavigate();
  //const { myProducts, setMyProducts} = useContext(StoreContext);
  const { myProducts, setMyProducts} = useContext(ProductContext);
  


  const removeFavorite = (id) => {
    const newProducts = myProducts.map((product) => {
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

  const productsLiked = myProducts.filter(
    (filters) => filters.isFavorite === true
  );

  return (
    
    <Container style={{ marginLeft: "4rem" }}>
      <div className="my_publication_favorite">
        {userId && (
          <>
            <Button
              className="custom-button"
              variant="dark"
              onClick={() => navigate(`/profile/${userId}` )}
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
        {productsLiked.map((product, i) => (
          <Card
            key={i}
            className="photo"
            /* onClick={() => removeFavorite(product.id_product)} */
            style={{ width: "16rem" }}
          >
            <Card.Img
              variant="top"
              src={product.url_image
              }
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
            <div
                className="icon-heart-button"
                onClick={() => removeFavorite(product.id_product)}
              >
                <IconHeart
                  className="border_heart"
                  filled={product.isFavorite}
                />
              </div>
              <Card.Title>{product.name_product}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text><strong>Precio:${product.price}</strong></Card.Text>
              
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Favorite;
