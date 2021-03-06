import React from 'react';
import Mugs from './Mugs.js';

function mugLightbox_close() {
  document.getElementById('mugLight').style.display = 'none';
  document.getElementById('mugFade').style.display = 'none';
  document.getElementById('mugFadeNoClick').style.display = 'none';
  document.getElementById('uSureLight').style.display = 'none';
  document.getElementById('uSureFade').style.display = 'none';
  document.getElementById('vidLight').style.display = 'none';
  document.getElementById('vidFade').style.display = 'none';
}

function mugLightbox_open() {
  document.getElementById('mugLight').style.display = 'block';
  document.getElementById('mugFade').style.display = 'block';
}

const Slide = ({ frontImage, mug }) => {
  const backgroundImage = frontImage;
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    float: 'left',
  };

  return (
    <div>
    <div className="slide" style={styles} onClick={mugLightbox_open}>
    </div>
      <div id="mugLight">
        <Mugs mug={mug} />
      </div>
      <div id="mugFade" onClick={mugLightbox_close}></div>
      <div id="mugFadeNoClick" ></div>
    </div>
  );
};

export default Slide;
