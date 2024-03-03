import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Container, Card, Button } from "react-bootstrap";
import IconHeart from "./IconHeart";
import "./Favorite.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Favorite = ({ userId, userName }) => {

console.log("userId", userId)
console.log("userName", userName)
  const navigate = useNavigate();
  const { products, setProducts } = useContext(StoreContext);

  const removeFavorite = (id) => {
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

  const productsLiked = products.filter(
    (filters) => filters.isFavorite === true
  );

  return (
    
    <Container style={{ marginLeft: "4rem" }}>
      <div className="my_publication_favorite">
        <Button
        
          variant="dark"
          className="custom-button"
          onClick={() =>
            navigate(`/profile/${userId}`, { state: { userName } })
          }
        >
          Mis publicaciones
        </Button>
        <Button
          variant="dark"
          className="custom-button"
          onClick={() =>  
            navigate(`/favorite/${userId}`, { state: { userName } })
          }
          
        >
          Mis Favoritos
        </Button>
      </div>
      <div className="gallery grid-columns-5 p-3">
        {productsLiked.map((product, i) => (
          <Card
            key={i}
            className="photo"
            onClick={() => removeFavorite(product.id)}
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

export default Favorite;
