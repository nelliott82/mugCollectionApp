import React from 'react';
import Mugs from './Mugs.js';

function mugLightbox_close() {
  document.getElementById('light').style.display = 'none';
  document.getElementById('mugButton').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
}

function mugLightbox_open() {
  document.getElementById('mugLight').style.display = 'block';
  document.getElementById('mugButton').style.display = 'block';
  document.getElementById('mugFade').style.display = 'block';
}

const Slide = ({ image }) => {
  const backgroundImage = image;
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    float: 'left',
  };

  return (
    <div className="slide" style={styles} onClick={mugLightbox_open}>
      <div id="mugLight">
        <div id="mugButton" onClick={mugLightbox_close}></div>
        <Mugs />
      </div>
      <div id="mugFade"></div>
    </div>
  );
};

export default Slide;
