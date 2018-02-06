import React, { Component } from 'react';


import Search from '../containers/search';
import ListOfCars from '../containers/list_of_cars';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h4>ford</h4>
  
        <Search />
        <ListOfCars />
      </div>
    );
  }
}

export default App;
