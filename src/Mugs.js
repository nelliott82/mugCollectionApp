import React from 'react';
import './App.css';

function lightbox_close() {
  var lightBoxVideo = document.getElementById('videoElem');
  document.getElementById('mugLight').style.display = 'none';
  document.getElementById('mugFadeNoClick').style.display = 'none';
  document.getElementById('vidLight').style.display = 'none';
  document.getElementById('vidFade').style.display = 'none';
  lightBoxVideo.pause();
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById('videoElem');
  document.getElementById('uSureLight').style.display = 'none';
  document.getElementById('uSureFade').style.display = 'none';
  document.getElementById('vidLight').style.display = 'inline-block';
  document.getElementById('vidFade').style.display = 'block';
  lightBoxVideo.addEventListener('ended', lightbox_close, false);
  lightBoxVideo.play();
}

function youSure_close() {
  document.getElementById('uSureLight').style.display = 'none';
  document.getElementById('uSureFade').style.display = 'none';
  document.getElementById('mugFadeNoClick').style.display = 'none';
  document.getElementById('mugFade').style.display = 'block';
}

function youSure_open() {
  document.getElementById('uSureLight').style.display = 'block';
  document.getElementById('uSureFade').style.display = 'block';
  document.getElementById('mugFade').style.display = 'none';
  document.getElementById('mugFadeNoClick').style.display = 'block';
}

const Mugs = ({ mug }) => {
    const { title, frontImage, backImage, description, video } = mug
    return (
      <div>
        <h3 style={{ color: 'black' }}>{title}</h3>
        <div className="mugImages">
          <div className="mugFront">
            <img
              src={frontImage}
              className="mugImage"
              alt="logo"
            />
            <p>Front</p>
          </div>
          <div className="mugBack">
            <img
              src={backImage}
              className="mugImage"
              alt="logo"
            />
            <p>Back</p>
          </div>
        </div>
        <div className="descriptionContainer">
          <p>{description}</p>
          <button type="button" onClick={youSure_open}>Select Mug</button>
          <div id="uSureLight">
            <div id="uSure">
              <h2>Are you sure?</h2>
              <button type="button" onClick={lightbox_open}>
                Yes
              </button>
              <button type="button" onClick={youSure_close}>
                No
              </button>
            </div>
          </div>
          <div id="uSureFade" />
          <div id="vidLight">
            <video
              height={400}
              width={700}
              id="videoElem"
              src={video}
            />
          </div>
          <div id="vidFade"></div>
        </div>
      </div>
    );
}

export default Mugs;
