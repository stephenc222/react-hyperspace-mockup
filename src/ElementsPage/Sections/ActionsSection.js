import React from 'react'
import Section from './Section'
import Button from '../../components/Button'

const ActionsSection = () => {
  return (
    <Section header='Actions'>
      <div className='list-section-content'>
        <div className='list-section-column'>
          <div style={{ display: 'flex', paddingBottom: 30 }}>
            <Button inverse label='Default' />
            <span style={{ padding: 10 }} />
            <Button label='Default' />
          </div>
          <div style={{ display: 'flex' }}>
            <Button size='small' inverse label='small' />
            <span style={{ padding: 10 }} />
            <Button size='small' label='small' />
          </div>
          <div style={{ display: 'flex', paddingTop: 30, paddingBottom: 30, flexDirection: 'column' }}>
            <Button inverse label='Default' />
            <span style={{ padding: 10 }} />
            <Button label='Default' />
          </div>
          <div style={{ display: 'flex', paddingTop: 0, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Button size='small' inverse label='small' />
            <span style={{ padding: 10 }} />
            <Button size='small' label='small' />
          </div>
        </div>
        <div className='list-section-column'>
          <div style={{ paddingBottom: 30 }}>
            <Button inverse label='Default' size='grow' />
            <span style={{ padding: 10 }} />
            <Button label='Default' size='grow' />
          </div>
          <div style={{}}>
            <Button size='grow' inverse label='small' />
            <span style={{ padding: 10 }} />
            <Button size='grow' label='small' />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ActionsSection
