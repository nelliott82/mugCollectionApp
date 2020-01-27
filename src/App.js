import React from 'react';
import className from 'classnames';
import nikkosMugTitle from './nikkosmugtitle.png';
import mickeyArrowRight from './img/mickeyArrowRight.jpg';
import mickeyArrowLeft from './img/mickeyArrowLeft.jpg';
import mugs from './mugsObject.js';
import Slide from './Slide.js';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotIndex: 0,
      mugs: mugs
    };
  }

  slideLeft() {
    let last = this.state.mugs.slice(-1);
    let rest = this.state.mugs.slice(0, -1);
    let mugs = [...last, ...rest];
    this.setState({ dotIndex: last[0].index, mugs: mugs });
  }

  slideRight() {
    let [first, ...rest] = this.state.mugs;
    let mugs = [...rest, first];
    this.setState({ dotIndex: rest[0].index, mugs: mugs });
  }

  dotSelection(index) {
    let newFirst = this.state.mugs.findIndex(mug => mug.index === index)
    let firstSlice = this.state.mugs.slice(newFirst)
    let secondSlice = this.state.mugs.slice(0, newFirst)
    this.setState({ dotIndex: index, mugs: [...firstSlice, ...secondSlice]})
  }

  renderNavigation() {
    return (
      <div className="slider-arrows">
        <div className="arrow left" onClick={() => this.slideLeft()}>
          <img className="arrowContainer" src={mickeyArrowLeft} alt="arrow" />
        </div>
        <div className="arrow right" onClick={() => this.slideRight()}>
          <img className="arrowContainer" src={mickeyArrowRight} alt="arrow" />
        </div>
      </div>
    );
  }

  renderSlides() {
    const mugs = this.state.mugs;
    return (
      <>
      <div className="slider-items">
        {mugs.map((mug, index) => {
          if (index < 1) {
            return (
              <Slide frontImage={mug.frontImage} mug={mug} key={index} />
            );
          } else {
            return null;
          }
        })}
        </div>
        <br />
        <div className="dotsContainer">
        {mugs.map((mug, index) => {
          return (
            <span
              key={index}
              className={className('dot', {
                selected: this.state.dotIndex === index,
              })}
              onClick={() => this.dotSelection(index)}
            />
          );
        })}
      </div>
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={nikkosMugTitle} className="App-logo" alt="logo" />
          <p style={{ width: '63%' }}>
            Browse through the mugs below and click on one to learn more about
            it. Once you've decided which mug you want to use, click "Select
            Mug" and then mug it up!
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
