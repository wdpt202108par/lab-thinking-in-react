import React from 'react';
import SearchBar from './Searchbar';
import ProductTable from './Producttable';

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <h1>Iron Store</h1>
        <SearchBar></SearchBar>
        <ProductTable></ProductTable>
      </div>
    );
  }
}

export default FilterableProductTable;
