import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Page from '../components/Page'
import WelcomeSection from './Sections/WelcomeSection'
import WhoWeAreSection from './Sections/WhoWeAreSection'
import WhatWeDoSection from './Sections/WhatWeDoSection'
import ContactSection from './Sections/ContactSection'
import Footer from '../components/Footer'
import { onTargetScroll } from '../utils/AutoScroll'
import PageContent from '../components/PageContent'
import siteData from '../siteData'
import './Content.css'
import './HomePage.css'

const { sidebarLinks } = siteData

const HomePage = ({ history }) => {
  const [activeSection, onActiveSectionChange] = useState('welcomeSection')
  return (
    <Page pageContainerClassName='home-page-container'>
      <Sidebar
        onActiveSectionChange={onActiveSectionChange}
        activeSection={activeSection}
        sidebarLinks={sidebarLinks}
      />
      <PageContent
        onScroll={onTargetScroll}
        pageContentContainerClassName={'home-page-content-container'}
        pageContentClassName='home-page-content-container-content'>
        <WelcomeSection history={history} />
        <WhoWeAreSection onClick={() => history.push('/generic')} />
        <WhatWeDoSection onClick={() => history.push('/generic')} />
        <ContactSection onClick={() => history.push('/generic')} />
        <Footer />
      </PageContent>
    </Page>
  )
}

export default HomePage
