import React from 'react'
import WelcomeSection from './WelcomeSection'
import WhoWeAreSection from './WhoWeAreSection'
import WhatWeDoSection from './WhatWeDoSection'
import ContactSection from './ContactSection'
import Footer from '../../components/Footer'
import './Content.css'

const ContentItem = (children) => {
  return <div
    style={{
      minHeight: '100%',
      maxHeight: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {children}
  </div>
}

const getContentItems = () => [
  <WelcomeSection />,
  <WhoWeAreSection />,
  <WhatWeDoSection />,
  <ContactSection />,
  <Footer />
]

const Content = () => {
  const content = getContentItems()
  return (
    <div className='home-page-content-container'>
      <div className='home-page-content-container-content'>
        {
          content.map(ContentItem)
        }
      </div>
    </div>
  )
}

export default Content
