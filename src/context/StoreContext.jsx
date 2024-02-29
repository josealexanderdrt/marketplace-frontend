/* import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

// Consume json for testing , replace by backend URL
const url_products = "/products.json";
const url_users = "/users.json";

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const getProducts = () => {
    axios
      .get(url_products)
      .then((response) => {
        const { products } = response.data;
        setProducts(products);
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
    <StoreProvider.Provider value= {{products,setProducts,users,setUsers}}>
        {children}
    </StoreProvider.Provider>
  )

};

export default StoreProvider;
 */