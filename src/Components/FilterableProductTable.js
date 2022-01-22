import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import ProductRow from './ProductRow';

class FilterableProductTable extends Component {


    render() {
        return (
            <div>
                <h1>Ironstore</h1>, 
                <ProductRow name='test' price='5€'/>
                <ProductTable produits={this.props.products} />
            </div>
        ) 
    }
}




export default FilterableProductTable;