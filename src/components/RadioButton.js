import React from 'react'
import './RadioButton.css'

const RadioButton = ({ radioValue, label, checked, onChange }) => {
  return (
    <div className='input-radio-button-container'>
      <div className='input-radio-button-content'>
        <label class="input-container">{label}
          <input type="radio" onChange={event => onChange(event.target.value)} checked={checked} value={radioValue} />
          <span class="input-radio-button"></span>
        </label>
      </div>
    </div>
  )
}

export default RadioButton
