import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import { StoreContext } from "../context/StoreContext";
import { ProductContext } from "../context/ProductContext";
import { Container, Button, Badge, Stack } from "react-bootstrap";
import "../views/Detail_copy.css";

const DetailProductComponent = () => {
  const navigate = useNavigate();
  //const { myProducts, productDescription, setproductDescription } = useContext(StoreContext);
  const { myProducts, productDescription, setProductDescription } =
    useContext(ProductContext);
  const { id } = useParams();
  console.log(productDescription);
  useEffect(() => {
    const productFilter = myProducts.find(
      (product) => product.id_product === parseInt(id)
    );
    setProductDescription(productFilter);
  }, []);

  return (
    <>
      <section className="row  justify-content-center align-items-center">
        <div className="col-12 col-md-6">
          <img src={productDescription.url_image} />
        </div>
        <div className="col-12 col-md-6">
          <Container className="m-3 p-3 ">
            <h1 class="display-2">{productDescription.name_product}</h1>
            <h5 class="display-8">{productDescription.name_brand}</h5>

            <div className="description"></div>
            <div className="price">Precio: ${productDescription.price}</div>
            <p class="lead">{productDescription.description}</p>
            
            <Stack direction="horizontal" gap={2}>
              <Button variant="dark">
                Estado: <Badge bg="secondary">{productDescription.state}</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>

              <Button variant="dark">
                Stock:{" "}
                <Badge bg="secondary"> {productDescription.quantity}</Badge>
              </Button>
              <Button variant="dark">
                Vendedor{" "}
                <Badge bg="secondary"> {productDescription.username}</Badge>
              </Button>
            </Stack>

            <Button
              className="custom-button botn m-4"
              variant="dark"
              onClick={() => navigate(`/allProducts`)}
            >
              Retornar
            </Button>
          </Container>
        </div>
      </section>
    </>
  );
};

export default DetailProductComponent;