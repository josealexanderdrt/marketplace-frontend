import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

// Consume json for testing , replace by backend URL
const url_products = "/products.json";
const url_users = "/users.json";

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  const getProducts = () => {
    axios
      .get(url_products)
      .then((response) => {
        const { products: productsDB } = response.data;
        setProducts(productsDB.map((product)=> ({ ...product, isFavorite: false})));
      })
      .catch((error) => {
        console.error("You did not obtain the requested data:", error);
      });
  };

  useEffect(() => {
    getProducts()
  },[])

  const getUsers = () => {
    axios
      .get(url_users)
      .then((response) => {
        const { users } = response.data;
        setUsers(users);
      })
      .catch((error) => {
        console.error("You did not obtain the requested data:", error);
      });
  };

  useEffect(() => {
    getUsers()
  },[])

  return (
    <StoreContext.Provider value= {{products,setProducts, users, setUsers,userId, setUserId}}>
        {children}
    </StoreContext.Provider>
  )

};

