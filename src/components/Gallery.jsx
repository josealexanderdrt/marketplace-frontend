import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import IconHeart from "./IconHeart";
import "./Gallery.css";

const Gallery = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(StoreContext);
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
    <Container>
      <div>
        <Button variant="dark" onClick={()=>{navigate(`/profile`)}}>Mis publicaciones</Button>
        <Button variant="dark" onClick={()=>{navigate(`/favorite`)}}>Mis Favoritos</Button>
      </div>
      <div className="gallery grid-columns-5 p-3">
        {products.map((product, i) => (
          <div
            key={i}
            onClick={() => addFavorite(product.id)}
            className="photo"
            style={{
              background: `url(${product.url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {" "}
            {/* aqui mas que nada deje la imagen de fondo para poder escribir encima de la imagen, yaque de otra forma me quedaria como una card normal, osea foto abajo comentario etc. */}
            <IconHeart filled={product.isFavorite} />{" "}
            {/* aqui le digo que si es false me deje el corazon en blanco  */}
            <section>
              <h6>{product.description}</h6>
              {/* {photo.alt} */}
            </section>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default Gallery;
