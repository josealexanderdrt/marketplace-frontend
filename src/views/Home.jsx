import React from "react";
import Catalogue from "../components/Catalogue.jsx";
import ProductsView from "../components/ProductsView.jsx";
import Footerlam from "../components/Footerlam.jsx";
import Transition from "../components/Transition.jsx"
const Home = () => {
  return (
    <div>
      <Catalogue />
      <Transition/>
      <ProductsView />
      <Footerlam/>
    </div>
  );
};

export default Home;
