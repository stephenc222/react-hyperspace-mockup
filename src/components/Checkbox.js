import React from 'react'
import './Checkbox.css'

const Checkbox = ({ label, onChange, checked, value }) => {
  return (
    <div className='checkbox-container'>
      <div className='checkbox-content'>
        <label className='checkbox-label'>{label}</label>
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={() => onChange(!checked)}
        />
      </div>
    </div>
  )
}

export default Checkbox
