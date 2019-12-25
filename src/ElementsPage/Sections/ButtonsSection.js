import React from 'react'
import Section from './Section'
import Button from '../../components/Button'

const ButtonsSection = () => {
  return (
    <Section header='Buttons'>
      <div className='list-section-column'>
        <div style={{ display: 'flex', paddingBottom: 30 }}>
          <Button inverse label='Primary' />
          <span style={{ padding: 10 }} />
          <Button label='Default' />
        </div>
        <div style={{ display: 'flex' }}>
          <Button size='large' label='large' />
          <span style={{ padding: 10 }} />
          <Button label='default' />
          <span style={{ padding: 10 }} />
          <Button size='small' label='small' />
        </div>
      </div>
    </Section>
  )
}

export default ButtonsSection
