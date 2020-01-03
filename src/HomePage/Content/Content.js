import React from 'react'
import WelcomeSection from './WelcomeSection'
import WhoWeAreSection from './WhoWeAreSection'
import WhatWeDoSection from './WhatWeDoSection'
import ContactSection from './ContactSection'
import Footer from '../../components/Footer'
import './Content.css'
import { onTargetScroll } from '../../utils/AutoScroll'

const Content = ({ history }) => {
  return (
    <div onScroll={onTargetScroll} className='home-page-content-container'>
      <div className='home-page-content-container-content'>
        <WelcomeSection history={history} />
        <WhoWeAreSection onClick={() => history.push('/generic')} />
        <WhatWeDoSection onClick={() => history.push('/generic')} />
        <ContactSection onClick={() => history.push('/generic')} />
        <Footer />
      </div>
    </div>
  )
}

export default Content
