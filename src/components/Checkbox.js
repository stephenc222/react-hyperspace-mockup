import React from 'react'
import PropTypes from 'prop-types'
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

Checkbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

export default Checkbox
