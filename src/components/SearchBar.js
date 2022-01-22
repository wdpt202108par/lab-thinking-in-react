import React from "react";
import './SearchBar.css';


class SearchBar extends React.Component {
    // state = {
    //     search: "", 
    //     checkedBox: false
    // };

    // handleSearchBox = (event) => {
    //     this.setState({
    //         search: event.target.value
    //     })
    // };

    // handleCheckBox = (event) => {

    //     this.setState({
    //         checkedBox: !this.state.checkedBox
    //     })
    // };

    render() {
      return (
        <div>
            <div className="searchBar">
                <label htmlFor="searchBar">Search</label>
                <br/>
                <input type="text" name="searchBar" id="searchBar" value={this.props.val} onChange={e => this.props.setSearch(e.target.value)} />
            </div>
            <div className="searchFilter">
                <input type="checkbox" name="searchFilter" id="searchFilter" value={this.props.val} onChange={e => this.props.setCheckbox(!e.target.value)} />
                <label htmlFor="searchFilter">Only show products on stock</label>
            </div>
        </div>
      );
    }
  }
  
  export default SearchBar;