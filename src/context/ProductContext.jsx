import { createContext, useEffect, useState } from "react";
import { productsGet } from "../components/services/productGet.js";
let token = localStorage.getItem("token");
console.log("token: ", token);

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getMyProducts = () => {
    const myProductsResp = productsGet(token)
      .then((products) => {
        setProducts(products.products.map((product) => ({ ...product })));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  useEffect(() => {
    getMyProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        getMyProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
