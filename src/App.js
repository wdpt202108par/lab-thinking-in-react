import React from 'react';
import jsondata from './data.json'
import './App.css';

import FilterableProductTable from './Components/FilterableProductTable';


function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ jsondata.data } />
    </div>
  );
}

export default App;
