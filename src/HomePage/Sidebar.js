import React from 'react'
import './Sidebar.css'

const SidebarItem = ({ label, animateToSection, index }) => {
  return (
    <div className='sidebar-item-container' onClick={() => console.warn('ANIMATE TO:', { animateToSection })} >
      <div className={`sidebar-item-content${index === 0 ? '--active' : ''}`}>{label}</div>
      {/* FIXME: quick addition to get styling of active/inactive item correct */}
      <div className={`sidebar-item-underline${index === 0 ? '--active' : ''}`} />
    </div>
  )
}

const Sidebar = (props) => {
  const { sidebarLinks } = props
  return (
    <div className='sidebar-container'>
      <div className='sidebar-container--content'>
        {sidebarLinks.map((item, index) => <SidebarItem {...item} index={index} key={`si_${index}`} />)}
      </div>
    </div>
  )
}

export default Sidebar
