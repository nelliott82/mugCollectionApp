import React from 'react';
import className from 'classnames';
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
import cafeMinnieMug from './img/cafeMinnieMug.jpeg';
import cafeMinnieMugBack from './img/cafeMinnieMugBack.jpeg';
import cafeMinnie from './video/cafeMinnie.mp4';
import croissantDeTriompheMug from './img/croissantDeTriompheMug.jpeg';
import croissantDeTriompheMugBack from './img/croissantDeTriompheMugBack.jpeg';
import croissantDeTriomphe from './video/croissantDeTriomphe.mp4';
import ratatouilleMug from './img/ratatouilleMug.jpeg';
import ratatouilleMugBack from './img/ratatouilleMugBack.jpeg';
import ratatouille from './video/ratatouilleVid.mp4';
import animalKingdomMug from './img/animalKingdomMug.jpeg';
import animalKingdomMugBack from './img/animalKingdomMugBack.jpeg';
import animalKingdom from './video/animalKingdomVid.mp4';
import mrIncredibleMug from './img/mrIncredibleMug.jpg';
import mrIncredibleMugBack from './img/mrIncredibleMugBack.jpeg';
import mrIncredible from './video/mrIncredibleVid.mp4';
import aladdinMug from './img/aladdinMug.jpeg';
import aladdinMugBack from './img/aladdinMugBack.jpeg';
import aladdin from './video/aladdinVid.mp4';
import Slide from './Slide.js';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotIndex: 0,
      mugs: [
        {
          index: 0,
          frontImage: simbaMug,
          backImage: simbaMugBack,
          video: simbaMugVid,
          title: 'Simba Face Mug',
          description:
            "'The Lion King' premiered in 1994. Originally considered the lesser of the animated projects at the time, most heavyweight animators at Disney chose instead to focus on 'Pocahontas' which would premiere the following year. However, 'The Lion King' would prove the better film financially and critically.",
        },
        {
          index: 1,
          frontImage: hauntedMansionMug,
          backImage: hauntedMansionMugBack,
          video: hauntedMansion,
          title: 'Haunted Mansion Mug',
          description:
            'Home to 999 happy haunts, The Haunted Mansion is one of the most beloved Disney rides. Opened in 1969 at Disneyland, it proved so popular, a very similar version was built at Magic Kingdom park in Walt Disney World in time for its grand opening in 1971.',
        },
        {
          index: 2,
          frontImage: mickeyMinnieKissingMug,
          backImage: mickeyMinnieKissingMugBack,
          video: adorableCouple,
          title: 'Mickey and Minnie Kissing Mug',
          description:
            "Mickey and Minnie Mouse have been together in the public's eye since 1928. Whether you find their over-the-top, 'cutesy' relationship and demeanors aggravating or adorable, they are truly iconic and inseperable.",
        },
        {
          index: 3,
          frontImage: billyGoatGruffMug,
          backImage: billyGoatGruffMugBack,
          video: toyStory4Sheep,
          title: 'Billy, Goat, & Gruff Mug',
          description:
            "Billy, Goat, & Gruff are Bo Peep's three sheep and best represented in Toy Story 4. Over the years they've had stickers added to their collective body, but it doesn't bother them much and they even seem to like it.",
        },
        {
          index: 4,
          frontImage: cafeMinnieMug,
          backImage: cafeMinnieMugBack,
          video: cafeMinnie,
          title: 'Cafe Minnie Mug',
          description:
            "In the Mickey Mouse short 'Croissant De Triomphe,' Minnie runs Cafe Minnie in Paris, France. Everything is 'tres bien' until Minnie discovers one morning she has no croissants for her customers.",
        },
        {
          index: 5,
          frontImage: croissantDeTriompheMug,
          backImage: croissantDeTriompheMugBack,
          video: croissantDeTriomphe,
          title: 'Mickey Scooter Mug',
          description:
            "In the Mickey Mouse short 'Croissant De Triomphe,' Mickey attempts to save the day by delivering croissants to Cafe Minnie using his trusty anthropomorphic scooter!",
        },
        {
          index: 6,
          frontImage: ratatouilleMug,
          backImage: ratatouilleMugBack,
          video: ratatouille,
          title: 'Ratatouille Mug',
          description:
            "'Ratatouille' is the finest film Pixar has ever produced. The story of a rat who loves to cook and finds himself able to control a human by pulling his hair and hiding in his toque in order to work successfully in a Paris restaurant. Crazy when described. Beautiful and touching when executed by director Brad Bird.",
        },
        {
          index: 7,
          frontImage: animalKingdomMug,
          backImage: animalKingdomMugBack,
          video: animalKingdom,
          title: 'Animal Kingdom "Tree of Life" Mug',
          description:
            "Disney's Animal Kingdom park opened in 1998. As its name suggests, it focuses on animals from around the world, whether they be alive, extinct, or imagined. Animal Kingdom park is many things, but it's 'not a zoo.'",
        },
        {
          index: 8,
          frontImage: mrIncredibleMug,
          backImage: mrIncredibleMugBack,
          video: mrIncredible,
          title: 'Mr. Incredible Mug',
          description:
            "Mr. Incredible is the patriarch of the Incredible family. A 'Golden-age Superman' type superhero, he is forced into retirement to live a 'normal' life, but eventually finds the call to be superhero again too enticing. Can he return to his former glory without messing up his current life?",
        },
        {
          index: 9,
          frontImage: aladdinMug,
          backImage: aladdinMugBack,
          video: aladdin,
          title: "'Aladdin' Disney Wisdom Mug",
          description:
            "The Disney Wisdom mug series showcases the various nuggets of wisdom extolled in its various movies. 'Aladdin' teaches the valuable lesson that our exteriors are not as important as what or who we are inside.",
        },
      ],
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
