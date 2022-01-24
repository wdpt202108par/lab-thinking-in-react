import React from 'react';

class SearchBar extends React.Component {
  render () {
    return (
      <div className='search-bar'>
        <input 
        type="text" 
        id='header-search' 
        placeholder='Search product'
        value={this.props.search}
        onChange={e => {this.props.setSearch(e.target.value)}} 
        />
        <form>
          <input 
          type="checkbox"
          name="inStock"
          checked={this.props.inStock}
          onChange={this.props.handleInputChange}
          />
          <p>Only show products in stock</p>
        </form>  
      </div>
    )
  }
}

export default SearchBar