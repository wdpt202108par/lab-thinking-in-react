import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends React.Component {
  state = {
    search:"",
    products: this.props.products
  }

  setSearch = (val) => {

    this.setState({
      search: val
    })
  }

  render () {
    const filteredProducts = this.state.products.filter((product => {
      return product.name.toLowerCase().includes(this.state.search.toLowerCase())
    }))

    return (
      <>
        <SearchBar search={this.state.search} setSearch={this.setSearch}  />
        <ProductTable productsTab={filteredProducts} />
      </>
    )
  }
}

export default FilterableProductTable