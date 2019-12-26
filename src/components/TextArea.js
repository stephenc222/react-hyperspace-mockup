import React from 'react'
import './TextArea.css'

const TextArea = ({ label, placeholder }) => {
  return (
    <div className='textarea-container'>
      <label>{label}</label>
      <textarea placeholder={placeholder} />
    </div>
  )
}

export default TextArea
