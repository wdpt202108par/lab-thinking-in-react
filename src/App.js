import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import jsondata from './data.json';
import './App.css';

class App extends React.Component {
  state = {
    products: jsondata.data
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ this.state.products } />
      </div>
    );
  }
}

export default App;
