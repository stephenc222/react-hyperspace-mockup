import React from 'react'
import './Sidebar.css'
import { onControllScroll, getControllerRef } from '../utils/AutoScroll'

const SidebarItem = ({ label, activeSection, sectionName, onActiveSectionChange }) => {
  console.log({ sectionName })
  return (
    <div className='sidebar-item-container' onClick={() => {
      onControllScroll(sectionName)
      onActiveSectionChange(sectionName)
    }} >
      <div className={`sidebar-item-content${activeSection === sectionName ? '--active' : ''}`}>{label}</div>
      <div className={`sidebar-item-underline${activeSection === sectionName ? '--active' : ''}`} />
    </div>
  )
}

const Sidebar = (props) => {
  const { sidebarLinks, activeSection, onActiveSectionChange } = props
  return (
    <div ref={ref => getControllerRef({ ref, id: 'sidebar' })} className='sidebar-container'>
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
