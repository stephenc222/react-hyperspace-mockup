import React from 'react'
import PropTypes from 'prop-types'
import ImageUtils from 'utils/ImageUtils'
import './Image.css'

const Image = ({ filename, className, containerStyle, imgStyle }) => {
  return (
    <div
      style={containerStyle}
      className={`${className} base-image-container`}
    >
      <img
        alt={`${filename || 'an image'}`}
        style={{
          width: '100%',
          height: '100%',
          ...imgStyle
        }} src={ImageUtils.getImage(filename)} />
    </div>
  )
}

Image.propTypes = {
  filename: PropTypes.string.isRequired,
  className: PropTypes.string,
  containerStyle: PropTypes.object,
  imgStyle: PropTypes.object
}

export default Image
