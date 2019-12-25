import React from 'react'
import './Button.css'

const getClassName = (inverse, size = '') => {
  if (inverse) {
    return `button-container inverse ${size}`
  }
  return `button-container ${size}`
}

const Button = ({ label, onClick, inverse, size, style }) => {
  return (
    <div onClick={onClick} style={style} className={getClassName(inverse, size)}>
      <div>{label}</div>
    </div>
  )
}

export default Button
