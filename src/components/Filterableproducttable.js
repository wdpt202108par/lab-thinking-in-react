import React from 'react';
import SearchBar from './Searchbar';
import ProductTable from './Producttable';
import Productrow from './Productrow';

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar></SearchBar>
        <ProductTable productlist={this.props.products}></ProductTable>
      </div>
    );
  }
}

export default FilterableProductTable;
