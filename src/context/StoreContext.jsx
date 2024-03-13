import { createContext, useEffect, useState } from "react";
import { productsGet } from "../components/services/productGet.js";
let token = localStorage.getItem("token");
console.log("token: ", token);

export const StoreContext = createContext();


export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);

  const getMyProducts = () => {
    const myProductsResp = productsGet(token)
      .then((products) => {
        setMyProducts(products.products.map((product) => ({ ...product })));
      })
      .catch((error) => {
        console.error("You did not obtain the requested data:", error);
      });
  };

  useEffect(() => {
    getMyProducts();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        products,
        setProducts,
        users,
        setUsers,
        userId,
        setUserId,
        username,
        setUsername,
        myProducts,
        setMyProducts,
        getMyProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
