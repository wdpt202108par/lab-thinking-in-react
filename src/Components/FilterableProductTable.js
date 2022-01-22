import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {


    render() {
        return <div>{this.state.value}</div>;
      }
}




export default FilterableProductTable;