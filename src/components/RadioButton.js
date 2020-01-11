import React from 'react'
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

export default RadioButton
