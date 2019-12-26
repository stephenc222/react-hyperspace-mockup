import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from './Section'
import Button from '../../components/Button'

const IconButton = ({ icon, label, ...rest }) =>
  <Button label={<span><FontAwesomeIcon icon={icon} />&nbsp;&nbsp;{label}</span>} {...rest} />

const ButtonsSection = () => {
  return (
    <Section header='Buttons'>
      <div className='list-section-column'>
        <div style={{ display: 'flex', paddingBottom: 30 }}>
          <Button inverse label='Primary' />
          <span style={{ padding: 10 }} />
          <Button label='Default' />
        </div>
        <div style={{ display: 'flex', paddingBottom: 30 }}>
          <Button size='large' label='large' />
          <span style={{ padding: 10 }} />
          <Button label='default' />
          <span style={{ padding: 10 }} />
          <Button size='small' label='small' />
        </div>
        <div style={{ display: 'flex', paddingBottom: 30 }}>
          <Button style={{ marginRight: 20 }} size='fit' inverse label='Fit' />
          <Button style={{ marginRight: 20 }} size='fit' label='Fit' />
          <Button style={{ marginRight: 20 }} size='fit' label='Fit' />
        </div>
        <div style={{ display: 'flex', paddingBottom: 30 }}>
          <Button style={{ marginRight: 20 }} size='small fit' inverse label='Fit + small' />
          <Button style={{ marginRight: 20 }} size='small fit' label='Fit + small' />
          <Button style={{ marginRight: 20 }} size='small fit' label='Fit + small' />
        </div>
        <div style={{ display: 'flex', paddingBottom: 30 }}>
          <IconButton inverse label='icon' icon='download' />
          <span style={{ padding: 10 }} />
          <IconButton label='icon' icon='upload' />
          <span style={{ padding: 10 }} />
          <IconButton label='icon' icon='save' />
        </div>
        <div style={{ display: 'flex', paddingBottom: 30 }}>
          <Button inverse disabled label='Disabled' />
          <span style={{ padding: 10 }} />
          <Button disabled label='Disabled' />
        </div>
      </div>
    </Section>
  )
}

export default ButtonsSection
