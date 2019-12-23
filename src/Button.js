import React from 'react'
import './Button.css'

const Button = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className='button-container'>
      <div>{label}</div>
    </div>
  )
}

export default Button
