import React, { useState } from 'react'
import Content from './Content/Content'
import Sidebar from '../components/Sidebar'
import Page from '../components/Page'
import './HomePage.css'

// FIXME: quick hack to create links for this static "marketing" like template
const SIDEBAR_LINKS = [
  { label: 'Welcome', sectionName: 'welcomeSection' },
  { label: 'Who We Are', sectionName: 'whoWeAreSection' },
  { label: 'What We Do', sectionName: 'whatWeDoSection' },
  { label: 'Get In Touch', sectionName: 'getInTouchSection' },
]

// HomePage will manage state of animation of it's content
const HomePage = ({ history }) => {
  const [activeSection, onActiveSectionChange] = useState('welcomeSection')
  return (
    <Page pageContainerClassName='home-page-container'>
      {/* <div className='home-page-container'> */}
      <Sidebar onActiveSectionChange={onActiveSectionChange} activeSection={activeSection} sidebarLinks={SIDEBAR_LINKS} />
      <Content
        activeSection={activeSection}
        onActiveSectionChange={onActiveSectionChange}
        history={history}
      />
      {/* </div> */}
    </Page>
  )
}

export default HomePage
