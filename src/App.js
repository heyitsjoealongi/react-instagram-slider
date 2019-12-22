import React, { Component } from 'react';
import Slider from './Slider';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Instagram Photos</h1>
        </header>
        <Slider />
      </div>
    );
  }
}

export default App;
