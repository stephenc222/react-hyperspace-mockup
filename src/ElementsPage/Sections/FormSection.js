import React, { useState } from 'react'
import Section from './Section'
import TextInput from '../../components/TextInput'
import Select from '../../components/Select'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'
import RadioButton from '../../components/RadioButton'
import Checkbox from '../../components/Checkbox'

const OPTIONS = [
  'Manufacturing',
  'Shipping',
  'Administration',
  'Human Resources'
]

const FormSection = () => {
  const [selected, onSelectedChange] = useState('')
  const [radioValue, onRadioValueChange] = useState('low')
  const [shouldEmail, onShouldEmailCheckboxChange] = useState(false)
  const [isRobot, onIsRobotCheckboxChange] = useState(true)

  return (
    <Section header='Form'>
      <form>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <TextInput placeholder='Name' />
          <span style={{ padding: 10 }} />
          <TextInput placeholder='Email' />
        </div>
        <Select
          options={OPTIONS}
          placeholder='-Category-'
          selected={selected}
          onChange={onSelectedChange}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <RadioButton onChange={onRadioValueChange} radioValue='low' label='Low' checked={radioValue === 'low'} />
          <RadioButton onChange={onRadioValueChange} radioValue='normal' label='Normal' checked={radioValue === 'normal'} />
          <RadioButton onChange={onRadioValueChange} radioValue='high' label='High' checked={radioValue === 'high'} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Checkbox value={shouldEmail} checked={!!shouldEmail} onChange={onShouldEmailCheckboxChange} label='Email me a copy' />
          <Checkbox value={isRobot} checked={!!isRobot} onChange={onIsRobotCheckboxChange} label='Not a robot' />
        </div>
        <TextArea placeholder='Enter your message' />
        <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
          <Button inverse label='Send Message' />
          <span style={{ padding: 10 }} />
          <Button label='Reset' />
        </div>
      </form>
    </Section>
  )
}

export default FormSection
