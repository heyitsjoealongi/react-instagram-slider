import React, { Component } from 'react';
import request from 'superagent';
import logo from './logo.svg';
import './App.css';

require('dotenv').config()

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
      .get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.ACCESS_TOKEN}`)
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
          {this.state.photos.map((photo, key) => {
            return (
              <div key={photo.id}>
                <img src={photo.images.standard_resolution.url} alt={photo.caption}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
