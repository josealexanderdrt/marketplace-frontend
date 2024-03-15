import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import IconHeart from "./IconHeart";
import { ToastContainer, toast } from "react-toastify";
import "../components/AllproductsComponent.css";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const AllproductsComponent = ({
  isHomePage,
  isFilterDescrip,
  isFilterBrand,
  numCards,
  columnClass,
}) => {
  const navigate = useNavigate();
  const { myProducts, setMyProducts, userId } = useContext(StoreContext);
  const [filter, setFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 999.999]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handlePriceChange = (_, newValue) => {
    setPriceRange(newValue);
  };

  const handleBrandChange = (e) => {
    setBrandFilter(e.target.value.toLowerCase());
  };

  const filteredProducts = myProducts.filter((product) => {
    const matchesFilter =
      product.name_product.toLowerCase().includes(filter) ||
      product.description.toLowerCase().includes(filter);
  
    const matchesBrand = !brandFilter || product.id_brand === parseInt(brandFilter);
  
    const matchesPriceRange =
      parseFloat(product.price) >= priceRange[0] &&
      parseFloat(product.price) <= priceRange[1];
  
    return matchesFilter && matchesBrand && matchesPriceRange;
  });

  /* const clearFilters = () => {
    setFilter("");
    setBrandFilter("");
    setPriceRange([0, 999.999]); // Restablecer el rango de precios
  }; */
  const clearFilters = () => {
    setFilter("");
    setBrandFilter("");
    setPriceRange([0, 999.999]); // Restablecer el rango de precios
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
      {isHomePage && (
        <div className="input_filter">
          <div className="input_filter_namebrand">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Filtrar por nombre"
                onChange={handleFilterChange}
                value={filter}
              />
            </div>

            <div className="mb-3">
            <select
                className="form-select"
                aria-label="Filtrar por Marca"
                value={brandFilter}
                onChange={handleBrandChange}
              >
                <option value="">Selecciona una marca</option>
                <option value="1">SAMSUNG</option>
                <option value="2">LG</option>
                <option value="3">APPLE</option>
                <option value="4">DELL</option>
                <option value="5">SONY</option>
                <option value="6">LENOVO</option>
                <option value="7">HP</option>
                <option value="8">BOSE</option>
                <option value="9">APPLE WATCH</option>
                <option value="10">SONY WATCH</option>
                <option value="11">FITBIT WATCH</option>
                <option value="12">SAMSUNG WATCH</option>
                <option value="13">XIAOAMI</option>
                <option value="14">HUAWEI</option>
              </select>
            </div>
          </div>
          <div className="filter_price">
            <Typography id="range-slider" gutterBottom>
              Rango de precios
            </Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={999.999}
            />
            {/* <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Precio máximo"
                value={maxPriceFilter}
                onChange={handleMaxPriceChange}
              />
            </div> */}
          </div>
          <Button className="boton" variant="secondary" onClick={clearFilters}>
            Limpiar Filtros
          </Button>
        </div>
      )}
      <div className={`row ${columnClass} justify-content-center`}>
        {filteredProducts.slice(0, numCards).map((product, index) => (
          <div key={index} className="col mb-5">
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
                {isFilterBrand && (
                  <Card.Text>
                    <strong>Marca: {product.name_brand}</strong>
                  </Card.Text>
                )}
                {isFilterDescrip && (
                  <Card.Text>{product.description}</Card.Text>
                )}
                <Card.Text>
                  <strong>Publicado por: {product.username}</strong>
                </Card.Text>
                <div>
                  <Badge variant="dark">{product.name}</Badge>
                </div>
                {/* <Button
                  variant="dark"
                  onClick={() => addFavoriteOnClick(product.id_product)}
                >
                  Agregar a favoritos
                </Button> */}
                <Button
                  variant="dark"
                  onClick={() => navigate(`/allproducts/${product.id_product}`)}
                  style={{ margin: "10px", width: "10rem" }}
                >
                  Ver detalles
                </Button>
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
