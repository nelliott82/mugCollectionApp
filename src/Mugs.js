import React from 'react';
import simbaMug from './img/simbaMug.jpeg';
// import simbaMugBack from './simbaMugBack.jpeg';
// import hauntedMansionMug from './hauntedMansionMug.jpeg';
// import hauntedMansionMugBack from './hauntedMansionMugBack.jpg';
// import simbaMugVid from './simbaMugVid.mp4';
import hauntedMansion from './video/hauntedMansion.mp4';
// import adorableCouple from './adorableCouple.mp4';
import './App.css';

function lightbox_close() {
  var lightBoxVideo = document.getElementById('simbaMugVid');
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById('simbaMugVid');
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.addEventListener('ended', lightbox_close, false);
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
          <img src={simbaMug} className="mug" alt="logo" />
          <button type="button" onClick={lightbox_open}>
            Select Mug
          </button>
          <div id="light">
            <video id="simbaMugVid" src={hauntedMansion} controls />
          </div>
          <div id="fade"></div>
        </div>
      </div>
    );
  }
}

export default Mugs;
