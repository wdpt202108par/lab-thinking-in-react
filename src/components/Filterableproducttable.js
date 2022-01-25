import React from 'react';
import SearchBar from './Searchbar';
import ProductTable from './Producttable';

class FilterableProductTable extends React.Component {
  state = {
    products: this.props.products,
    query: ""
  }

  setQuery = (val) => {
    this.setState({query: val})
  }

  render() {
    const filteredProducts = this.props.products.filter((product) => product.name.toLowerCase().includes(this.state.query.toLowerCase()))
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar query={this.state.query} setQuery={this.setQuery}></SearchBar>
        <ProductTable productlist={filteredProducts}></ProductTable>
      </div>
    );
  }
}

export default FilterableProductTable;
