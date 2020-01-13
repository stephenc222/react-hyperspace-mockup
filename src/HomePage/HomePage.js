import React, { useState } from 'react'
import Sidebar from 'components/Sidebar'
import Page from 'components/Page'
import WelcomeSection from 'components/WelcomeSection'
import WhoWeAreSection from 'components/WhoWeAreSection'
import WhatWeDoSection from 'components/WhatWeDoSection'
import ContactSection from 'components/ContactSection'
import Footer from 'components/Footer'
import { onTargetScroll } from 'utils/AutoScroll'
import getSection from 'utils/getSection'
import PageContent from 'components/PageContent'
import './HomePage.css'

const HomePage = ({ history, sidebarLinks, sections }) => {
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
        <WhoWeAreSection section={getSection(sections, 'whoWeAre')} onClick={() => history.push('/generic')} />
        <WhatWeDoSection section={getSection(sections, 'whatWeDo')} onClick={() => history.push('/generic')} />
        <ContactSection onClick={() => history.push('/generic')} />
        <Footer />
      </PageContent>
    </Page>
  )
}

export default HomePage
