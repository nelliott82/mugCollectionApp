import React from 'react';
import Mugs from './Mugs.js';

function mugLightbox_close() {
  console.log('hey')
  document.getElementById('mugLight').style.display = 'none';
  document.getElementById('mugFade').style.display = 'none';
}

function mugLightbox_open() {
  console.log('open')
  document.getElementById('mugLight').style.display = 'block';
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
        <Mugs />
      </div>
      <div id="mugFade" onClick={mugLightbox_close}></div>
    </div>
  );
};

export default Slide;
