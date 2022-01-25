import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input className="SearchBox" type="text" placeholder="Search" 
                value={this.props.query}
                onChange={(event) => {this.props.setQuery(event.target.value)}}
                />
      </div>
    )
  }
}

export default SearchBar;
