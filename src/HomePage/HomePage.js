import React, { useState } from 'react'
import Content from './Content/Content'
import Sidebar from './Sidebar'
import './HomePage.css'

// FIXME: quick hack to create links for this static "marketing" like template
const getSidebarLinks = () => {
  return [
    { label: 'Welcome', sectionName: 'welcomeSection' },
    { label: 'Who We Are', sectionName: 'whoWeAreSection' },
    { label: 'What We Do', sectionName: 'whatWeDoSection' },
    { label: 'Get In Touch', sectionName: 'getInTouchSection' },
  ]
}

// HomePage will manage state of animation of it's content
const HomePage = ({ history }) => {
  const [activeSection, onActiveSectionChange] = useState('welcomeSection')
  return (
    <div className='home-page-container'>
      <Sidebar onActiveSectionChange={onActiveSectionChange} activeSection={activeSection} sidebarLinks={getSidebarLinks()} />
      <Content
        activeSection={activeSection}
        onActiveSectionChange={onActiveSectionChange}
        history={history}
      />
    </div>
  )
}

export default HomePage
