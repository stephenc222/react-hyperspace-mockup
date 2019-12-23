import React from 'react'
import './Sidebar.css'

const SidebarItem = ({ label, animateToSection }) => {
  return (
    <div onClick={() => console.warn('ANIMATE TO:', { animateToSection })} className='sidebar-item-container'>
      <div className='sidebar-item-content'>{label}</div>
      <div></div>
    </div>
  )
}

const Sidebar = (props) => {
  const { sidebarLinks } = props
  return (
    <div className='sidebar-container'>
      <div className='sidebar-container--content'>
        {sidebarLinks.map((item, index) => <SidebarItem {...item} key={`si_${index}`} />)}
      </div>
    </div>
  )
}

export default Sidebar
