import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/Button'
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
    <div className='what-we-do-list-item' style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: 20 }}>
        <div
          // FIXME: revisit for tablet 
          style={{
            borderRadius: '50%',
            fontSize: 20,
            backgroundColor: 'white',
            display: 'flex',
            alignSelf: 'flex-start',
            padding: 5,
            marginTop: 10,
            marginRight: 20
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
        {WHAT_WE_DO_LIST.map((item, index) => {
          return (
            <div className='column'>
              <ListItem {...item} />
            </div>
          )
        })}
      </div>
      <Button label='Learn More' />
    </div>
  )
}

export default WhatWeDoSection
