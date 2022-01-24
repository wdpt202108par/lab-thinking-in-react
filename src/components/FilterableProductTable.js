import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends React.Component {
  state = {
    search:"",
    products: this.props.products,
    inStock: false
  }

  setSearch = (val) => {

    this.setState({
      search: val
    })
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });
  }

  render () {
    let filteredProducts = [];

    if (this.state.inStock) {
      filteredProducts = this.state.products.filter((product => {
        return product.stocked === true && product.name.toLowerCase().includes(this.state.search.toLowerCase())
      }))    
    } else {
      filteredProducts = this.state.products.filter((product => {
        return product.name.toLowerCase().includes(this.state.search.toLowerCase())
      }))    
    }

    return (
      <>
        <SearchBar 
        search={this.state.search} 
        setSearch={this.setSearch} 
        inStock={this.state.inStock} 
        handleInputChange={this.handleInputChange}/>
        
        <ProductTable productsTab={filteredProducts} />
      </>
    )
  }
}

export default FilterableProductTable