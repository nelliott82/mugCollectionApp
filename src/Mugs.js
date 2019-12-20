import React from 'react';
import simbaMug from './simbaMug.jpeg';
import simbaMugVid from './simbaMugVid.mp4';
import './App.css';

function lightbox_open() {
  var lightBoxVideo = document.getElementById('simbaMugVid');
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

// function lightbox_close() {
//   var lightBoxVideo = document.getElementById('VisaChipCardVideo');
//   document.getElementById('light').style.display = 'none';
//   document.getElementById('fade').style.display = 'none';
//   lightBoxVideo.pause();
// }

function Mugs() {
  return (
    <div>
      <img src={simbaMug} className="mug" alt="logo" />
      <button type="button" onClick={lightbox_open}>
        Select Mug
      </button>
      <div id="light">
        {/* <a className="boxclose" id="boxclose" onClick={lightbox_close} /> */}
        <video id="simbaMugVid" src={simbaMugVid} controls />
      </div>
      <div id="fade" onClick="lightbox_close();"></div>
    </div>
  );
}

export default Mugs;
