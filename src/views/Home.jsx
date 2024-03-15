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
      <AllproductsComponent isHomePage={false} isFilterDescrip={false} isFilterBrand={false} /* numCards={8} */ columnClass="row-cols-md-4"/>
      <Footerlam/>
    </div>
  );
};

export default Home;
