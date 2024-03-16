import React from "react";
import Catalogue from "../components/Catalogue.jsx";
import Footerlam from "../components/Footerlam.jsx";
import Transition from "../components/Transition.jsx";
import CardsHome from "../components/HomePage.jsx";

const Home = () => {
  return (
    <div>
      <Catalogue />
      <Transition />
      <CardsHome
        isHomePage={false}/* aqui no se van a ver los filtros */
        isFilterDescrip={false}
        isFilterBrand={false}
        numCards={6}
        /* numCards={8} */ columnClass="row-cols-md-3"
      />
      <Footerlam />
    </div>
  );
};

export default Home;
