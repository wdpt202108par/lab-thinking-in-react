import React from "react";

class SearchBar extends React.Component{
    state = {
        query: ""
    }

    handlechange = (event) => {
     const val = event.target.value;
     this.setState({
        query: val
     })
     this.props.searchBar(val)
    }

    render() {
        return (
            <div>
                <form>
                  <label>Search</label>
                  <input onChange={(event)=>{this.handlechange(event)}} type="text" value={this.state.query}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;   