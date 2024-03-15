import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import IconHeart from "./IconHeart";
import { ToastContainer, toast } from "react-toastify";
import "../components/AllproductsComponent.css";
//import Footerlam from "../components/Footerlam.jsx";

const AllproductsComponent = () => {
  const navigate = useNavigate();
  const { myProducts, setMyProducts, userId } = useContext(StoreContext);
  const [filter, setFilter] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleMinPriceChange = (e) => {
    setMinPriceFilter(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPriceFilter(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrandFilter(e.target.value.toLowerCase());
  };

  const filteredProducts = myProducts.filter((product) => {
    return (
      (product.name_product.toLowerCase().includes(filter) ||
        product.description.toLowerCase().includes(filter)) &&
      (minPriceFilter === "" || product.price >= parseInt(minPriceFilter)) &&
      (maxPriceFilter === "" || product.price <= parseInt(maxPriceFilter)) &&
      (brandFilter === "" ||
        product.name_brand.toLowerCase().includes(brandFilter))
    );
  });

  //.sort((a, b) => a.price - b.price);

  const clearFilters = () => {
    setFilter("");
    setMinPriceFilter("");
    setMaxPriceFilter("");
    setBrandFilter("");
  };

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
      <div className="input_filter">
        <div className="input_filter_namebrand">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Filtrar por nombre"
              onChange={handleFilterChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Filtrar por Marca..."
              onChange={handleBrandChange}
            />
          </div>
        </div>
        <div className="filter_price">
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Precio mínimo"
              value={minPriceFilter}
              onChange={handleMinPriceChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Precio máximo"
              value={maxPriceFilter}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
      </div>

      {
        <Button className="boton" variant="secondary" onClick={clearFilters}>
          Limpiar Filtros
        </Button>
      }
       <div /* className="content" */>
        <div className="row row-cols-1 row-cols-md-3 justify-content-center">
          {filteredProducts.map((product, index) => (
            <div key={index} className="col mb-4">
              <Card style={{ width: "18rem" }} className="h-100 mx-auto">
                <Card.Img variant="top" src={product.url_image} />
                <Card.Body>
                  <IconHeart
                    className="border_heart"
                    filled={product.isFavorite}
                  />
                  <Card.Title>{product.name_product}</Card.Title>
                  <Card.Text>
                    <strong>Precio: ${product.price}</strong>
                  </Card.Text>
                  <Card.Text>
                    <strong>Marca: {product.name_brand}</strong>
                  </Card.Text>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>
                    <strong>Publicado por: {product.username}</strong>
                  </Card.Text>
                  <div>
                    <Badge variant="dark">{product.name}</Badge>
                  </div>
                  <Button
                    variant="dark"
                    onClick={() => addFavoriteOnClick(product.id_product)}
                  >
                    Agregar a favoritos
                  </Button>
                  <Button
                    variant="dark"
                    onClick={() =>
                      navigate(`/allproducts/${product.id_product}`)
                    }
                    style={{ margin: "20px", width: "10rem" }}
                  >
                    Ver detalles
                  </Button>
                </Card.Body>
                <ToastContainer />
              </Card>
             
            </div>
          ))}
           
        </div>
       {/*  <Footerlam /> */}
      </div>
    </div>
  );
};

export default AllproductsComponent;
