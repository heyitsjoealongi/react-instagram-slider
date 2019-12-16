import React, { Component } from 'react';
import request from 'superagent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentWillMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    request
      .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN')
      .then((res) => {
        this.setState({
          photos: res.body.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Instagram</h1>
        </header>
        <div>
          {console.log(this.state.photos)}
        </div>
      </div>
    );
  }
}

export default App;
