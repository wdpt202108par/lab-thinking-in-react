import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  state = {
    products: [...this.props.products]
  }

  filterProducts = (query, stockFilter) => {
    let productsCopy = [...this.props.products];
    let filteredProducts = productsCopy.filter(product => product.name.toLowerCase().includes(query));

    if (stockFilter) {
      filteredProducts.filter(product => product.stocked)
    }

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