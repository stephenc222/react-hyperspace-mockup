import React from 'react'
import PropTypes from 'prop-types'
import './TextArea.css'

const TextArea = ({ label, placeholder }) => {
  return (
    <div className='textarea-container'>
      <label>{label}</label>
      <textarea placeholder={placeholder} />
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextArea
