import React from 'react'
import ImageUtils from '../utils/ImageUtils'
import './Image.css'

const Image = ({ filename, className }) => {
  return (
    <div
      className={`${className} base-image-container`}
    >
      <img style={{ width: '100%', height: '100%' }} src={ImageUtils.getImage(filename)} />
    </div>
  )
}

export default Image
