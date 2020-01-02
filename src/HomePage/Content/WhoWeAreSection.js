import React from 'react'
import Button from '../../components/Button'
import Image from '../../components/Image'
import './WhoWeAreSection.css'
import { AutoScrollTarget } from '../../utils/AutoScroll'

const WHO_WE_ARE_SECTIONS = [
  {
    headerLabel: 'Sed ipsum dolor',
    imageFile: 'hand_holding_phone',
    bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.'
  },
  {
    headerLabel: 'Feugiat consequat',
    imageFile: 'street_view',
    bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.'
  },
  {
    headerLabel: 'Ultricies aliquam',
    imageFile: 'guy_gazing',
    bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.'
  },
]

const SubSectionItem = ({ headerLabel, bodyText, onClick, imageFile }) => {
  return (
    <div className='sub-section-container'>
      <Image imgStyle={{ borderRadius: 0 }} filename={imageFile} />
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
    <AutoScrollTarget targetId='who_section'>
      <div className='who-we-are-section-container'>
        {WHO_WE_ARE_SECTIONS.map((sectionProp, index) => <SubSectionItem key={`ssi_${index}`} {...sectionProp} onClick={onClick} />)}
      </div>
    </AutoScrollTarget>
  )
}

export default WhoWeAreSection
