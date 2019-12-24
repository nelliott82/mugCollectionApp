import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import nikkosMugTitle from './nikkosmugtitle.png';
import simbaMug from './img/simbaMug.jpeg';
import simbaMugBack from './img/simbaMugBack.jpeg';
import hauntedMansionMug from './img/hauntedMansionMug.jpeg';
import hauntedMansionMugBack from './img/hauntedMansionMugBack.jpg';
import mickeyMinnieKissingMug from './img/mickeyMinnieKissing.jpg';
import mickeyMinnieKissingMugBack from './img/mickeyMinnieKissingBack.jpeg';
import mickeyArrowRight from './img/mickeyArrowRight.jpg';
import mickeyArrowLeft from './img/mickeyArrowLeft.jpg';
import Slide from './Slide.js';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [simbaMug, hauntedMansionMug, mickeyMinnieKissingMug],
      imagesBack: [
        simbaMugBack,
        hauntedMansionMugBack,
        mickeyMinnieKissingMugBack,
      ],
    };
  }

  slideLeft() {
    let last = this.state.images.slice(-1);
    let rest = this.state.images.slice(0, -1);
    let images = [last, ...rest];
    this.setState({ images: images });
  }

  slideRight() {
    let [first, ...rest] = this.state.images;
    let images = [...rest, first];
    this.setState({ images: images });
  }

  renderNavigation() {
    return (
      <div className="slider-arrows">
        <div className="arrow left" onClick={() => this.slideLeft()}>
          <img className="arrowLeft" src={mickeyArrowLeft} alt="arrow" />
        </div>
        <div className="arrow right" onClick={() => this.slideRight()}>
          <img className="arrowRight" src={mickeyArrowRight} alt="arrow" />
        </div>
      </div>
    );
  }

  renderSlides() {
    const images = this.state.images;
    return (
      <div className="slider-items">
        {images.map((image, index) => {
          if (index < 3) {
            return <Slide image={image} key={index} />;
          } else {
            return null;
          }
        })}
        {images.map((image, index) => {
          return <span key={index} className="dot"/>
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={nikkosMugTitle} className="App-logo" alt="logo" />
          <p style={{ width: '50%' }}>
            Click on a mug below to learn more about it. Once you've decided
            which mug you want to use, click "Select" and then mug it up!
          </p>
          <div className="slider">
            {this.renderNavigation()}
            {this.renderSlides()}
          </div>
        </header>
      </div>
    );
  }
}
