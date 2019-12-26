import React from 'react'
import './Select.css'


const renderOptions = (options, selected, placeholder, formatOption) => {
  const _options = options.slice()
  if (!selected) {
    _options.unshift(placeholder)
  }
  return _options.map((optionVal, index) =>
    <option
      key={`op_${index}`}
      value={optionVal}
    >
      {formatOption && formatOption(optionVal) || optionVal}
    </option>
  )
}

const Select = ({ label, options, onChange, selected, placeholder = '', formatOption = null }) => {
  return (
    <div className='select-input-container'>
      <label>{label}</label>
      <select value={selected} onChange={(event) => onChange(event.target.value)} placeholder={placeholder}>
        {renderOptions(options, selected, placeholder, formatOption)}
      </select>
    </div>
  )
}

export default Select
