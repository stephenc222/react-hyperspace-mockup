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
        style={{
          width: '100%',
          height: 'auto',
          ...imgStyle
        }} src={ImageUtils.getImage(filename)} />
    </div>
  )
}

export default Image
