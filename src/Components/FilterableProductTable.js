import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";



function FilterableProductTable(props) {
    return (
      <div>
          <h2>IronStore</h2>
          <SearchBar />
          <ProductTable data={props.products}/>

          
      </div>
    );
  }

  export default FilterableProductTable;