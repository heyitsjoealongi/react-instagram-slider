import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'

require('dotenv').config()

const BackArrow = (props) => (
  <div onClick={props.previousImage} className="Arrow">
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
)

const NextArrow = (props) => (
  <div onClick={props.nextImage} className="Arrow">
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
)

const ReturnArrow = (props) => (
  <div onClick={props.firstImage} className="Arrow">
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
)

const JumpArrow = (props) => (
  <div onClick={props.lastImage} className="Arrow">
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      slideCount: 0
    }
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.firstImage = this.firstImage.bind(this);
    this.lastImage = this.lastImage.bind(this);
  }

  componentWillMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    request
      .get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_NOT_SECRET_CODE}`)
      .then((res) => {
        this.setState({
          photos: res.body.data
        })
      })
  }

  nextImage() {
    this.setState({ slideCount: this.state.slideCount + 1 })
  }

  previousImage() {
    this.setState({ slideCount: this.state.slideCount - 1 })
  }

  firstImage() {
    this.setState({ slideCount: this.state.slideCount - 19 })
  }

  lastImage() {
    this.setState({ slideCount: this.state.slideCount + 19 })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Instagram Photos</h1>
        </header>
        <div className="Slide">
          {this.state.slideCount === 0 ? <JumpArrow lastImage={this.lastImage}/> : ''}
          {this.state.slideCount !== 0 ? <BackArrow previousImage={this.previousImage}/> : ''}
          {this.state.photos.map((photo, key) => {
            if (this.state.photos.indexOf(photo) === this.state.slideCount) {
              return (
                <div key={photo.id}>
                  <img src={photo.images.standard_resolution.url} alt=''/>
                  <div className="Caption">
                    {photo.caption !== null ? photo.caption.text : ''}
                  </div>
                </div>
              )
            }
            return ''
          })}
          {this.state.slideCount !== (this.state.photos.length - 1) ? <NextArrow nextImage={this.nextImage}/> : ''}
          {this.state.slideCount === 19 ? <ReturnArrow firstImage={this.firstImage}/> : ''}
        </div>
      </div>
    );
  }
}

export default App;
