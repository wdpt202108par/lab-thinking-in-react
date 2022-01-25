import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends React.Component {
  state = {
    query:''
  }

  searchMetod = (val) => {
    this.setState({
      query: val
    })
  }
  
  render() {
    let filterItem = this.props.products.filter(item => item.name.toLowerCase().includes(this.state.query.toLowerCase()));
    return (
      <div>
        <h2>IronStore</h2>
        <SearchBar searchBar={this.searchMetod}/>
        <ProductTable data={filterItem}/>   
      </div>
    );
  }
  
}

export default FilterableProductTable;