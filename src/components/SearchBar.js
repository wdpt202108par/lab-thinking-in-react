import React from "react";

class SearchBar extends React.Component {
  state = {
    query: "",
    filterChecked: false
  }

  updateQuery = (event) => {
    this.setState({
      query: event.target.value.toLowerCase()
    });

    this.props.filterProducts(this.state.query, this.state.filterChecked);
  }

  updateFilter = () => {
    this.setState({ 
        filterChecked: !this.filterChecked 
      })

      this.props.filterProducts(this.state.query, this.state.filterChecked);
  }

  render() {
    return (
      <div>
        <form onChange={(e) => this.updateQuery(e)}>
          <label>Search</label>
          <input type="text" name="search" value={this.state.query}  />
        </form>

        <form onChange={this.updateFilter}>
          <input type="checkbox" name="isOnStock" />
          <label>Only show products on stock</label>
        </form>
      </div>
    );
  }
}

export default SearchBar;