import React from 'react'
import PropTypes from 'prop-types'
import './RadioButton.css'

const RadioButton = ({ radioValue, label, checked, onChange }) => {
  return (
    <div className='input-radio-button-container'>
      <div className='input-radio-button-content'>
        <label className="input-container">{label}
          <input type="radio" onChange={event => onChange(event.target.value)} checked={checked} value={radioValue} />
          <span className="input-radio-button"></span>
        </label>
      </div>
    </div>
  )
}

RadioButton.propTypes = {
  radioValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RadioButton
