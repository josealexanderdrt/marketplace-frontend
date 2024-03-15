import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import { StoreContext } from "../context/StoreContext";
import { productAdd } from "./services/productAdd";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import google_aut from "../../src/assets/image/google_aut.png";
import PreviewProduct from "../components/PreviewProduct.jsx";
import "./FormRegister.css";

const AddNewProduct = () => {
  const { getMyProducts } = useContext(StoreContext);

  const { myProducts, username, setMyProducts } = useContext(StoreContext);
  const { userId } = useContext(StoreContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [state, setState] = useState("");
  const [url_image, setUrl_image] = useState("");
  const [id_user, setId_user] = useState("");
  const [id_categories, setId_categories] = useState("");
  const [id_brand, setId_brand] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !description ||
      !price ||
      !quantity ||
      !state ||
      !url_image ||
      !id_categories ||
      !id_brand
    ) {
      toast.error("Todos los campos son obligatorios", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const nuevoProducto = {
      product: {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        state: state,
        url_image: url_image,
        id_user: userId,
        id_categories: id_categories,
        id_brand: id_brand,
      },
    };

    productAdd(nuevoProducto)
      .then((response) => {
        if (response.newProduct) {
          console.log("response.newProduct", response.newProduct);
          toast.success("Producto registrado exitosamente", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setMyProducts([...myProducts, nuevoProducto]);
          getMyProducts();
          navigate(`/profile/${userId}`);
        } else {
          throw Error("Error al registrar producto.");
        }
      })
      .catch((error) => {
        toast.error("Error al registrar producto: " + error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });

    console.log(userId, "user id ");
    console.log("ID DEL USUARUIO");
  };

  return (
<>
      <section className="row">
        
        <div className="col-12 col-md-6">
          <PreviewProduct
            name={name}
            description={description}
            price={price}
            url_image={url_image}
            username={username}
          />
        </div>
    

      <div className="col-12 col-md-6">
        <Form
          className="m-2 p-3"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter dopiaaname"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRut">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter quantity"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicState">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Estado"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>URL Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter URL image"
              onChange={(e) => setUrl_image(e.target.value)}
              value={url_image}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter categories"
              onChange={(e) => setId_categories(e.target.value)}
              value={id_categories}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter brand"
              onChange={(e) => setId_brand(e.target.value)}
              value={id_brand}
            />
          </Form.Group>

          <Button
            className="boton rounded-button"
            variant="dark mt-2"
            type="submit"
          >
            Publicar
          </Button>
        </Form>
      </div>
      </section>
      <ToastContainer />
 </>
  );
};

export default AddNewProduct;
