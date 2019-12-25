import React from 'react';
// import simbaMug from './img/simbaMug.jpeg';
// import simbaMugBack from './simbaMugBack.jpeg';
// import hauntedMansionMug from './hauntedMansionMug.jpeg';
// import hauntedMansionMugBack from './hauntedMansionMugBack.jpg';
// import simbaMugVid from './simbaMugVid.mp4';
// import hauntedMansion from './video/hauntedMansion.mp4';
// import adorableCouple from './adorableCouple.mp4';
import './App.css';

function lightbox_close(videoId) {
  console.log(videoId)
  var lightBoxVideo = document.getElementById(videoId);
  document.getElementById('vidLight').style.display = 'none';
  document.getElementById('vidFade').style.display = 'none';
  lightBoxVideo.pause();
}

function lightbox_open(videoId) {
  console.log(videoId)
  var lightBoxVideo = document.getElementById(videoId);
  window.scrollTo(0, 0);
  document.getElementById('vidLight').style.display = 'block';
  document.getElementById('vidFade').style.display = 'block';
  lightBoxVideo.addEventListener('ended', function() { lightbox_close(videoId) }, false);
  lightBoxVideo.play();
}

class Mugs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        <div>
          <img src={this.props.image.frontImage} className="mug" alt="logo" />
          <button type="button" onClick={() => lightbox_open(this.props.image.videoId)}>
            Select Mug
          </button>
          <div id="vidLight">
            <video height={400} width={700} id={this.props.image.videoId} src={this.props.image.video} controls />
          </div>
          <div id="vidFade"></div>
        </div>
      </div>
    );
  }
}

export default Mugs;
