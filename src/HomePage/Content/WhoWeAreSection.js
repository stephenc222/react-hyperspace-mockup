import React from 'react'
import Button from '../../components/Button'
import './WhoWeAreSection.css'

const WHO_WE_ARE_SECTIONS = [
  { headerLabel: 'Sed ipsum dolor', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
  { headerLabel: 'Feugiat consequat', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
  { headerLabel: 'Ultricies aliquam', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
]

const SubSectionItem = ({ headerLabel, bodyText, onClick }) => {
  return (
    <div className='sub-section-container'>
      <div className='sub-section-image'>
      </div>
      <div className='sub-section-text-content'>
        <h2>{headerLabel}</h2>
        <p>{bodyText}</p>
        <div><Button onClick={onClick} label='Learn More' /></div>
      </div>
    </div>
  )
}

const WhoWeAreSection = ({ onClick = () => { } }) => {
  return (
    <div className='who-we-are-section-container'>
      {WHO_WE_ARE_SECTIONS.map((sectionProp) => <SubSectionItem {...sectionProp} onClick={onClick} />)}
    </div>
  )
}

export default WhoWeAreSection
