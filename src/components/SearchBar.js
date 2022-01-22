import React from 'react';

class SearchBar extends React.Component {
  render () {
    return (
      <>
        <input 
        type="text" 
        id='header-search' 
        placeholder='Search product'
        value={this.props.search}
        onChange={e => {this.props.setSearch(e.target.value)}} 
        />  
      </>
    )
  }
}

export default SearchBar