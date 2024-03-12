import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import IconHeart from "./IconHeart";
import { ToastContainer, toast, Bounce } from "react-toastify";

const AllproductsComponent = () => {
  const navigate = useNavigate();
  const { myProducts, setMyProducts, userId } = useContext(StoreContext);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredProducts = myProducts.filter(
    (product) =>
      product.name_product.toLowerCase().includes(filter) ||
      product.description.toLowerCase().includes(filter)
  );

  const addFavorite = (id) => {
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



  const addFavoriteOnClick = (id) => {
    if (!userId) {
      toast.error("Debes iniciar sesión para agregar a favoritos", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      addFavorite(id);
    }
  };


  return (
    <div className="container">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filtrar por nombre o descripción..."
          onChange={handleFilterChange}
        />
      </div>
      <div className="row row-cols-1 row-cols-md-3 justify-content-center">
        {filteredProducts.map((product, index) => (
          <div key={index} className="col mb-4">
            <Card style={{ width: "18rem" }} className="h-100 mx-auto">
              <Card.Img variant="top" src={product.url_image} />
              <Card.Body>
                <IconHeart className="border_heart" filled={product.isFavorite} />
                <Card.Title>{product.name_product}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div>
                  <Badge variant="dark">{product.name}</Badge>
                </div>
                <Button variant="dark" onClick={() =>  addFavoriteOnClick(product.id_product)}>Agregar a favoritos</Button>
              </Card.Body>
              <ToastContainer />
            </Card>
            
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default AllproductsComponent;