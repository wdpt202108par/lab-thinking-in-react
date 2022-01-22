import React from "react";

class SearchBar extends React.Component {
  state = {
    query: ""
  }

  updateQuery = (event) => {
    this.setState({
      query: event.target.value.toLowerCase()
    });

    this.props.filterProducts(this.state.query);
  }

  render() {
    return (
      <div>
        <label>Search</label>
        <input type="text" name="search" value={this.state.query} onChange={(e) => this.updateQuery(e)} />
        
        <input type="checkbox" name="isOnStock" />
        <label>Only show products on stock</label>
      </div>
    );
  }
}

export default SearchBar;