import React from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';

function lightbox_close() {
  var lightBoxVideo = document.getElementById('videoElem');
  // document.getElementById('mugFade').onclick = function() {
  //   document.getElementById('mugLight').style.display = 'none';
  //   document.getElementById('mugFade').style.display = 'none';
  // };
  document.getElementById('mugLight').style.display = 'none';
  document.getElementById('mugFade').style.display = 'none';
  document.getElementById('vidLight').style.display = 'none';
  document.getElementById('vidFade').style.display = 'none';
  lightBoxVideo.pause();
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById('videoElem');
  document.getElementById('uSureLight').style.display = 'none';
  document.getElementById('uSureFade').style.display = 'none';
  window.scrollTo(0, 0);
  document.getElementById('vidLight').style.display = 'block';
  document.getElementById('vidFade').style.display = 'block';
  lightBoxVideo.addEventListener('ended', lightbox_close, false);
  lightBoxVideo.play();
}

function youSure_close() {
  // document.getElementById('mugFade').onclick = function() {
  //   document.getElementById('mugLight').style.display = 'none';
  //   document.getElementById('mugFade').style.display = 'none';
  // };
  document.getElementById('uSureLight').style.display = 'none';
  document.getElementById('uSureFade').style.display = 'none';
}

function youSure_open() {
  // document.getElementById('mugFade').removeAttribute('onclick')
  document.getElementById('uSureLight').style.display = 'block';
  document.getElementById('uSureFade').style.display = 'block';
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
          <Button onClick={youSure_open} content="Select Mug" />
          <div id="uSureLight">
            <h2>Are you sure?</h2>
            <button type="button" onClick={lightbox_open}>
              Yes
            </button>
            <button type="button" onClick={youSure_close}>
              No
            </button>
          </div>
          <div id="uSureFade" />
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
