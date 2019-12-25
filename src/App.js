import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import nikkosMugTitle from './nikkosmugtitle.png';
import simbaMug from './img/simbaMug.jpeg';
import simbaMugBack from './img/simbaMugBack.jpeg';
import simbaMugVid from './video/simbaMugVid.mp4';
import hauntedMansionMug from './img/hauntedMansionMug.jpeg';
import hauntedMansionMugBack from './img/hauntedMansionMugBack.jpg';
import hauntedMansion from './video/hauntedMansion.mp4';
import mickeyMinnieKissingMug from './img/mickeyMinnieKissing.jpg';
import mickeyMinnieKissingMugBack from './img/mickeyMinnieKissingBack.jpeg';
import adorableCouple from './video/adorableCouple.mp4';
import mickeyArrowRight from './img/mickeyArrowRight.jpg';
import mickeyArrowLeft from './img/mickeyArrowLeft.jpg';
import billyGoatGruffMug from './img/billyGoatGruffMug.jpg';
import billyGoatGruffMugBack from './img/billyGoatGruffMugBack.png';
import toyStory4Sheep from './video/toyStory4Sheep.mp4';
import Slide from './Slide.js';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          frontImage: simbaMug,
          backImage: simbaMugBack,
          video: simbaMugVid,
          videoId: 'simbaMugVid',
          title: 'Simba Face Mug',
          description:
            "'The Lion King' premiered in 1994. Originally considered the lesser of the animated projects at the time, most heavyweight animators at Disney chose instead to focus on 'Pocahontas' which would premiere the following year. However, 'The Lion King' would prove the better film financially and critically.",
        },
        {
          frontImage: hauntedMansionMug,
          backImage: hauntedMansionMugBack,
          video: hauntedMansion,
          videoId: 'hauntedMansion',
          title: 'Haunted Mansion Mug',
          description:
            'Home to 999 happy haunts, The Haunted Mansion is one of the most beloved Disney rides. Opened in 1969 at Disneyland, it proved so popular, a very similar version was built at Magic Kingdom park in Walt Disney World in time for its grand opening in 1971.',
        },
        {
          frontImage: mickeyMinnieKissingMug,
          backImage: mickeyMinnieKissingMugBack,
          video: adorableCouple,
          videoId: 'adorableCouple',
          title: 'Mickey and Minnie Kissing Mug',
          description:
            "Mickey and Minnie Mouse have been together in the public's eye since 1928. Whether you find their over-the-top, 'cutesy' relationship and demeanors aggravating or adorable, they are truly iconic and inseperable.",
        },
        {
          frontImage: billyGoatGruffMug,
          backImage: billyGoatGruffMugBack,
          video: toyStory4Sheep,
          videoId: 'toyStory4Sheep',
          title: 'Billy, Goat, & Gruff Mug',
          description:
            "Billy, Goat, & Gruff are Bo Peep's three sheep and best represented in Toy Story 4. Over the years they've had stickers added to their collective body, but it doesn't bother them much and they seem to like it.",
        },
      ]
    };
  }

  slideLeft() {
    let last = this.state.images.slice(-1);
    let rest = this.state.images.slice(0, -1);
    let images = [last[0], ...rest];
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
          if (index < 1) {
            return (
              <Slide frontImage={image.frontImage} image={image} key={index} />
            );
          } else {
            return null;
          }
        })}
        <br />
        {images.map((image, index) => {
          return <span key={index} className="dot" />;
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
