import React from 'react'
import './RadioButton.css'

const RadioButton = ({ radioValue, label, checked, onChange }) => {
  return (
    <div className='radio-button-container'>
      <div className='radio-button-content'>
        <label className='radio-button-label'>{label}</label>
        <input type='radio' onChange={event => onChange(event.target.value)} checked={checked} value={radioValue} />
      </div>
    </div>
  )
}

export default RadioButton
