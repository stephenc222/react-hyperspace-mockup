import React from 'react'
import './Checkbox.css'

const Checkbox = ({ label, onChange, checked, value }) => {
  return (
    <div className='input-checkbox-container'>
      <div className='input-checkbox-content'>
        <label className="input-container">{label}
          <input onChange={() => onChange(!checked)} type="checkbox" checked={checked} value={value} />
          <div className="input-checkmark"></div>
        </label>
      </div>
    </div>
  )
}

export default Checkbox
