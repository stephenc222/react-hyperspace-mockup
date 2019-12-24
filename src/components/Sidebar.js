import React from 'react'
import './Sidebar.css'

const SidebarItem = ({ label, activeSection, sectionName, onActiveSectionChange }) => {
  return (
    <div className='sidebar-item-container' onClick={() => onActiveSectionChange(sectionName)} >
      <div className={`sidebar-item-content${activeSection === sectionName ? '--active' : ''}`}>{label}</div>
      <div className={`sidebar-item-underline${activeSection === sectionName ? '--active' : ''}`} />
    </div>
  )
}

const Sidebar = (props) => {
  const { sidebarLinks, activeSection, onActiveSectionChange } = props
  return (
    <div className='sidebar-container'>
      <div className='sidebar-container--content'>
        {sidebarLinks.map((item, index) =>
          <SidebarItem
            onActiveSectionChange={onActiveSectionChange}
            activeSection={activeSection}
            key={`si_${index}`}
            {...item}
          />)}
      </div>
    </div>
  )
}

export default Sidebar
