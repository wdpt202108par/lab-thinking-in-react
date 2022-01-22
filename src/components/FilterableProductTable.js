import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  state = {
    products: [...this.props.products]
  }

  filterProducts = (query) => {
    let productsCopy = [...this.props.products];
    let filteredProducts = productsCopy.filter(product => product.name.toLowerCase().includes(query));

    this.setState({
      products: filteredProducts
    })
  }

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar filterFunc={this.filter} filterProducts={this.filterProducts} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;