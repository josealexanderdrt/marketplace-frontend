import React from "react";
import Catalogue from "../components/Catalogue.jsx";
import Footerlam from "../components/Footerlam.jsx";
import Transition from "../components/Transition.jsx";
import AllproductsComponent from "../components/AllproductsComponent.jsx";

const Home = () => {
  return (
    <div>
      <Catalogue />
      <Transition/>
      <AllproductsComponent/>
      <Footerlam/>
    </div>
  );
};

export default Home;
