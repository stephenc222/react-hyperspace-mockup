import React from 'react'
import './TextInput.css'

const TextInput = ({ label, placeholder = '' }) => {
  return (
    <div className='text-input-container'>
      <label>{label}</label>
      <input placeholder={placeholder} type='text' />
    </div>
  )
}

export default TextInput
