import React from 'react';
// import simbaMug from './img/simbaMug.jpeg';
// import simbaMugBack from './simbaMugBack.jpeg';
// import hauntedMansionMug from './hauntedMansionMug.jpeg';
// import hauntedMansionMugBack from './hauntedMansionMugBack.jpg';
// import simbaMugVid from './simbaMugVid.mp4';
// import hauntedMansion from './video/hauntedMansion.mp4';
// import adorableCouple from './adorableCouple.mp4';
import './App.css';

function lightbox_close() {
  var lightBoxVideo = document.getElementById('videoElem');
  document.getElementById('vidLight').style.display = 'none';
  document.getElementById('vidFade').style.display = 'none';
  lightBoxVideo.pause();
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById('videoElem');
  window.scrollTo(0, 0);
  document.getElementById('vidLight').style.display = 'block';
  document.getElementById('vidFade').style.display = 'block';
  lightBoxVideo.addEventListener('ended', lightbox_close, false);
  lightBoxVideo.play();
}

class Mugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3 style={{ color: 'black' }}>{this.props.image.title}</h3>
          <div className="mugImages">
            <div className="mugFront">
              <img
                src={this.props.image.frontImage}
                className="mugImage"
                alt="logo"
              />
              <p>Front</p>
            </div>
            <div className="mugBack">
              <img
                src={this.props.image.backImage}
                className="mugImage"
                alt="logo"
              />
              <p>Back</p>
            </div>
          </div>
          <div className="descriptionContainer">
            <p>{this.props.image.description}</p>
            <button
              type="button"
              onClick={() => lightbox_open(this.props.image.videoId)}
            >
              Select Mug
            </button>
            <div id="vidLight">
              <video
                height={400}
                width={700}
                id="videoElem"
                src={this.props.image.video}
                controls
              />
            </div>
            <div id="vidFade"></div>
          </div>
        </div>
    );
  }
}

export default Mugs;
