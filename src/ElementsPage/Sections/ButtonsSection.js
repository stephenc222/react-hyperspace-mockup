import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from './Section'
import Button from 'components/Button'

const IconButton = ({ icon, label, ...rest }) =>
  <Button label={<span><FontAwesomeIcon icon={icon} />&nbsp;&nbsp;{label}</span>} {...rest} />

const ButtonsSection = () => {
  return (
    <Section header='Buttons'>
      <div className='buttons-section-content'>
        <div className='buttons-sub-section-content'>
          <Button inverse label='Primary' />
          <span style={{ padding: 10 }} />
          <Button label='Default' />
        </div>
        <div className='buttons-sub-section-content'>
          <Button size='large' label='large' />
          <span style={{ padding: 10 }} />
          <Button label='default' />
          <span style={{ padding: 10 }} />
          <Button size='small' label='small' />
        </div>
        <div className='buttons-sub-section-content'>
          <Button style={{ marginRight: 20 }} size='fit' inverse label='Fit' />
          <Button style={{ marginRight: 20 }} size='fit' label='Fit' />
          <Button style={{ marginRight: 20 }} size='fit' label='Fit' />
        </div>
        <div className='buttons-sub-section-content'>
          <Button style={{ marginRight: 20 }} size='small fit' inverse label='Fit + small' />
          <Button style={{ marginRight: 20 }} size='small fit' label='Fit + small' />
          <Button style={{ marginRight: 20 }} size='small fit' label='Fit + small' />
        </div>
        <div className='buttons-sub-section-content'>
          <IconButton inverse label='icon' icon='download' />
          <span style={{ padding: 10 }} />
          <IconButton label='icon' icon='upload' />
          <span style={{ padding: 10 }} />
          <IconButton label='icon' icon='save' />
        </div>
        <div className='buttons-sub-section-content'>
          <Button inverse disabled label='Disabled' />
          <span style={{ padding: 10 }} />
          <Button disabled label='Disabled' />
        </div>
      </div>
    </Section>
  )
}

export default ButtonsSection
