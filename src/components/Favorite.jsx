import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import IconHeart from "./IconHeart";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
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
  
    const productsLiked = products.filter((filters) => filters.isFavorite === true);
  return (
    <Container>
        <div>
        <Button variant="dark" onClick={()=>{navigate(`/profile`)}}>Mis publicaciones</Button>
        <Button variant="dark" onClick={()=>{navigate(`/favorite`)}}>Mis Favoritos</Button>
      </div>
    <div className="gallery grid-columns-5 p-3">
      {productsLiked.map((product, i) => (
          <div
          key={i}
          onClick={() => removeFavorite(product.id)}
          className="photo"
          style={{ background: `url(${product.url})` }}
        >
          <IconHeart filled={product.isFavorite} />
          <section>
            <h6>{product.description}</h6>
          </section>
        </div>
      ))}
    </div>
      </Container>
  )
}

export default Favorite