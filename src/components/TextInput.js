import React from 'react'
import './TextInput.css'

const TextInput = ({ label }) => {
  return (
    <div className='text-input-container'>
      <label>{label}</label>
      <input type='text' />
    </div>
  )
}

export default TextInput
