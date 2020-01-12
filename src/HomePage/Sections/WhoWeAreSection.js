import React from 'react'
import Button from 'components/Button'
import Image from 'components/Image'
import Header from 'components/Header'
import './WhoWeAreSection.css'
import { addTargetRef, onTargetScroll } from 'utils/AutoScroll'
import siteData from 'siteData'

const { sections } = siteData
const whatWeDoSection = sections.find(section => section.id === 'whoWeAre') || { data: [] }

const SubSectionItem = ({ headerLabel, bodyText, onClick, imageFile }) => {
  return (
    <div className='sub-section-container'>
      <Image imgStyle={{ borderRadius: 0 }} filename={imageFile} />
      <div className='sub-section-text-content'>
        <Header priority='2'>{headerLabel}</Header>
        <p>{bodyText}</p>
        <div><Button onClick={onClick} label='Learn More' /></div>
      </div>
    </div>
  )
}

const WhoWeAreSection = ({ onClick = () => { } }) => {
  return (
    <div onScroll={onTargetScroll} ref={(ref) => addTargetRef({ ref, id: 'whoWeAreSection' })} className='who-we-are-section-container'>
      {whatWeDoSection.data.map((sectionProp, index) => <SubSectionItem key={`ssi_${index}`} {...sectionProp} onClick={onClick} />)}
    </div>
  )
}

export default WhoWeAreSection
