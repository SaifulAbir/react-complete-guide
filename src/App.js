import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

// Root component
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Saiful</h1>
        <Person />
      </div>
    );
  }
}

export default App;
