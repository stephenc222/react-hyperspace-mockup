import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../Button'
import './WhatWeDoSection.css'


const WHAT_WE_DO_LIST = [
  { icon: 'code', headerLabel: 'Lorem ipsum amet', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
  { icon: 'code', headerLabel: 'Aliquam sed nullam', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
  { icon: 'code', headerLabel: 'Sed erat ullam corper', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
  { icon: 'code', headerLabel: 'Veroeros quis lorem', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
  { icon: 'code', headerLabel: 'Urna quis bibendum', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
  { icon: 'code', headerLabel: 'Aliquam urna dapibus', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
]

// has icon, sub header, and paragraph text
const ListItem = (props) => {
  const { icon, headerLabel, bodyText } = props
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            minWidth: '20px',
            borderRadius: '50%',
            fontSize: 20,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5
          }}>
          <div style={{ color: '#b74e91' }}>
            <FontAwesomeIcon icon={`${icon}`} />
          </div>
        </div>
        <div>
          <div>
            <h3>{headerLabel}</h3>
          </div>
          <div>
            <p>{bodyText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const WhatWeDoSection = () => {
  return (
    <div className='what-we-do-container'>
      <h2>What we do</h2>
      <p>
        Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.
      </p>
      <div className='what-we-do-content-container'>
        {WHAT_WE_DO_LIST.map(ListItem)}
      </div>
      <Button label='Learn More' />
    </div>
  )
}

export default WhatWeDoSection
