import React from 'react';
import {Link} from 'react-dom'
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
import Mugs from './Mugs.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 300,
      height: 800,
      images: [simbaMug, hauntedMansionMug, mickeyMinnieKissingMug],
      imagesBack: [simbaMugBack, hauntedMansionMugBack, mickeyMinnieKissingMugBack],
    };
  }

  renderNavigation() {
    return (
      <div className="slider-arrows">
        <Link className="arrow left">
          <img src={mickeyArrowLeft} alt="arrow" />
        </Link>
        <Link className="arrow right">
          <img src={mickeyArrowRight} alt="arrow" />
        </Link>
      </div>
    )
  }

  renderSlides() {
    const images = this.state.images;
    return (
      <div className="slider-items">
        {
          images.map((image, index) => {
            return (
              <Slide image={image} width={this.state.width} height={this.state.height} key={index} />
            )
          })
        }
      </div>
    )
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
          <Mugs />
        </header>
      </div>
    );
  }
}

export default App;
