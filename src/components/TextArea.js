import React from 'react'
import './TextArea.css'

const TextArea = ({ label }) => {
  return (
    <div className='textarea-container'>
      <label>{label}</label>
      <textarea />
    </div>
  )
}

export default TextArea
