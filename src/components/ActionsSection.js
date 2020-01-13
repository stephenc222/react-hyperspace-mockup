import React from 'react'
import Section from './Section'
import Button from 'components/Button'

const BUTTON_SPACING = { marginBottom: 10, marginTop: 10, marginRight: 20 }

const ActionsSection = () => {
  return (
    <Section header='Actions'>
      <div className='list-section-content'>
        <div className='list-section-column'>
          <div style={{ display: 'flex', paddingBottom: 30 }}>
            <Button style={BUTTON_SPACING} inverse label='Default' />
            <Button style={BUTTON_SPACING} label='Default' />
          </div>
          <div style={{ display: 'flex' }}>
            <Button style={BUTTON_SPACING} size='small' inverse label='small' />
            <Button style={BUTTON_SPACING} size='small' label='small' />
          </div>
          <div style={{ display: 'flex', paddingTop: 30, paddingBottom: 30, flexDirection: 'column' }}>
            <Button style={BUTTON_SPACING} inverse label='Default' />
            <Button style={BUTTON_SPACING} label='Default' />
          </div>
          <div style={{ display: 'flex', paddingTop: 0, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Button style={BUTTON_SPACING} size='small' inverse label='small' />
            <Button style={BUTTON_SPACING} size='small' label='small' />
          </div>
        </div>
        <div className='list-section-column'>
          <Button style={BUTTON_SPACING} inverse label='Default' size='grow' />
          <Button style={BUTTON_SPACING} label='Default' size='grow' />
          <Button style={BUTTON_SPACING} size='grow' inverse label='small' />
          <Button style={BUTTON_SPACING} size='grow' label='small' />
        </div>
      </div>
    </Section>
  )
}

export default ActionsSection
