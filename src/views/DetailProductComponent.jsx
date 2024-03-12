/* 
import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { Container,Button, Carousel } from "react-bootstrap";


const DetailProductComponent = () => {
    const navigate = useNavigate();
    const { myProducts, productDescription, setproductDescription } = useContext(StoreContext);
    const { id } = useParams();

    useEffect(() => {
        const productFilter = myProducts.find((product) => product.id_product === parseInt(id));
        setproductDescription(productFilter);
    }, []);

    return (
      <Container>
      <Carousel>
          {myProducts.map((product) => (
              <Carousel.Item key={product.id_product}>
                  <div className="d-flex justify-content-between ">
                      <div className="col-6">
                          <img
                              className="d-block w-100"
                              src={product.url_image}
                              alt={product.name_product}
                          />
                      </div>
                      <div className="col-6 description_detail">
                          <h3>{product.name_product}</h3>
                          <p>{product.description}</p>
                          <p>Precio: ${product.price}</p>
                      </div>
                  </div>
              </Carousel.Item>
          ))}
      </Carousel>
  
      <Button className="custom-button" variant="dark" onClick={() => navigate(`/allProducts`)}>
          Retornar
      </Button>
  </Container>
  
    );
}

export default DetailProductComponent */
import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { Container, Button } from "react-bootstrap";
import "../views/Detail.css";

const DetailProductComponent = () => {
    const navigate = useNavigate();
    const { myProducts, productDescription, setproductDescription } = useContext(StoreContext);
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




/* import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { Container, Card, Button } from "react-bootstrap";
import IconHeart from "../components/IconHeart";

const DetailProductComponent = () => {
    const navigate = useNavigate();
    const { myProducts,productDescription, setproductDescription } = useContext(StoreContext);
    const { id } = useParams();

    useEffect(() => {
        const productFilter = myProducts.find((product) => product.id_product === parseInt(id));
        setproductDescription(productFilter);
    }, []);

    return (
        <Container>
            {productDescription && (
                <div className="gallery grid-columns-5 p-3">
                    <Card key={productDescription.id_product} className="photo" onClick={() => navigate(`/product/${productDescription.id_product}`)} style={{ width: "16rem" }}>
                        <Card.Img variant="top" src={productDescription.url_image} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                        <Card.Body>
                        <IconHeart className="border_heart" filled={productDescription.isFavorite} />
                            <Card.Title>{productDescription.name_product}</Card.Title>
                            <Card.Text>{productDescription.description}</Card.Text>
                            <span>Precio:${productDescription.price}</span>
                        </Card.Body>
                    </Card>
                </div>
            )}
            <Button className="custom-button" variant="dark" onClick={() => navigate(`/allProducts`)}>
                Retornar
            </Button>
        </Container>
    );
}

export default DetailProductComponent; */


 /* import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample; */