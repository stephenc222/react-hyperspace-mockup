import React from 'react'
import './Button.css'

const getClassName = (inverse, size = '', disabled = false) => {
  if (inverse) {
    return `button-container inverse ${size} ${disabled ? 'disabled' : ''}`
  }
  return `button-container ${size} ${disabled ? 'disabled' : ''}`
}

const Button = ({ label, onClick, inverse, size, style, disabled }) => {
  return (
    <div onClick={onClick} style={style} className={getClassName(inverse, size, disabled)}>
      <div>{label}</div>
    </div>
  )
}

export default Button
