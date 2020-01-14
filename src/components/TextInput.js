import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.css'

const TextInput = ({ label, placeholder = '' }) => {
  return (
    <div className='text-input-container'>
      <label>{label}</label>
      <input placeholder={placeholder} type='text' />
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextInput
