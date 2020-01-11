import React, { useState } from 'react'
import Content from './Content/Content'
import Sidebar from '../components/Sidebar'
import Page from '../components/Page'
import siteData from '../siteData'
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
      <Content
        activeSection={activeSection}
        onActiveSectionChange={onActiveSectionChange}
        history={history}
      />
    </Page>
  )
}

export default HomePage
