import React from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';



class FilterableProductTable extends React.Component {
    state = {
        search: "",
        checkBox: false
    }

    constructor(props) {
        super(props);
        this.setSearch = this.setSearch.bind(this);
    }
        
    setSearch = (val) => {
        this.setState({
            search: val
        })
    }

    setCheckbox = (val) => {
        this.setState({
            checkBox: val
        })
    }

    render() {
        let filteredProducts = this.props.products.filter( (el) => {
            if(this.state.checkBox === true) {
                return el.stocked === false
            } else {
                return el.name.toLowerCase().includes(this.state.search.toLowerCase())
            }
        })

      return (
        <div>
            <h1>IronStore</h1>
            <SearchBar
                search={this.state.search} setSearch={this.setSearch}
                checkBox={this.state.checkBox} setCheckbox={this.setCheckbox}
             />
            <ProductTable products={filteredProducts} />
        </div>
      )
    }
}
  
  export default FilterableProductTable;