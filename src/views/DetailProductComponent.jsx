
import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import { StoreContext } from "../context/StoreContext";
import {ProductContext } from "../context/ProductContext";
import { Container, Button } from "react-bootstrap";
import "../views/Detail.css";

const DetailProductComponent = () => {
    const navigate = useNavigate();
    //const { myProducts, productDescription, setproductDescription } = useContext(StoreContext);
    const { myProducts, productDescription, setproductDescription } = useContext(ProductContext);
    const { id } = useParams();

    useEffect(() => {
        const productFilter = myProducts.find((product) => product.id_product === parseInt(id));
        setproductDescription(productFilter);
    }, []);

    return (
      <div>
      
        
        <Container className="detail">
          <div className="detalle">
            <div className="image">

              <img  src={productDescription.url_image} />
            </div>
              <div className="container_description">
                  <div className="name">{productDescription.name_product}</div>
                  <div className="description">{productDescription.description}</div>
                  <div className="price">Precio: ${productDescription.price}</div>
              </div>
              
          </div>
          
            
        </Container>
        <Button className="custom-button botn" variant="dark" onClick={() => navigate(`/allProducts`)}>
                Retornar
            </Button>
        </div>
    );
}

export default DetailProductComponent;




