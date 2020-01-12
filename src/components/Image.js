import React from 'react'
import ImageUtils from '../utils/ImageUtils'
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

export default Image
