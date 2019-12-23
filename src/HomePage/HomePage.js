import React, { useState } from 'react'
import Content from './Content/Content'
import Sidebar from './Sidebar'
import './HomePage.css'

// FIXME: quick hack to create links for this static "marketing" like template
const getSidebarLinks = () => {
  return [
    { label: 'Welcome', animateToSection: 'welcomeSection' },
    { label: 'Who We Are', animateToSection: 'whoWeAreSection' },
    { label: 'What We Do', animateToSection: 'whatWeDoSection' },
    { label: 'Get In Touch', animateToSection: 'getInTouchSection' },
  ]
}

// HomePage will manage state of animation of it's content
const HomePage = ({ history }) => {
  const [animateToSection, onAnimateToSectionChange] = useState('welcomeSection')
  return (
    <div className='home-page-container'>
      <Sidebar sidebarLinks={getSidebarLinks()} />
      <Content
        animateToSection={animateToSection}
        onAnimateToSectionChange={onAnimateToSectionChange}
        history={history}
      />
    </div>
  )
}

export default HomePage
