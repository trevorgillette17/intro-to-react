import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
	    <ToDO/>
	    <ToDo/>
	    </ul>
	    </div>
    );
  }
}

export default App;
