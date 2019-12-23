import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({image, width, height}) => {
    const backgroundImage = image;
    const styles = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      float: 'left',
      width: `${width}px`,
      height: `${height}px`
    }
    return (
      <div className="slide" style={styles}></div>
    )
}

Slide.defaultProps = {
  width: 300,
  height: 600
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}
export default Slide;