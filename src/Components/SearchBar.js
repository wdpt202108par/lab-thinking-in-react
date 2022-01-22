import React from "react";




class SearchBar extends React.Component{
    state = {
        query: ""
    }
    handlechange = (event) =>{
     const val = event.target.value
     this.setState({
         query: val
     })
     //this.props.SearchBar(val)
    }

    render(){

        return(
            <div>
                <h2>SearchBar</h2>
                <input onChange={(event)=>{this.handlechange(event)}} type="text" value={this.state.query}/>
            </div>
        )
    }
}


export default SearchBar;
   