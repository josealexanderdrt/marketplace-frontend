import React from "react";
import AllproductsComponent from "../components/AllproductsComponent.jsx";

const AllProducts = () => {
  return (
    <div>
      <AllproductsComponent isHomePage={true} isFilterDescrip={true} columnClass="row-cols-md-3" /* numCards={4} */ />
    </div>
  );
};

export default AllProducts;
