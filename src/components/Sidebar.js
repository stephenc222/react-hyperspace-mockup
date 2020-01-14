import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { onControlScroll, addControllerRef } from 'utils/AutoScroll'
import eventController from 'utils/eventController'
import './Sidebar.css'

const SidebarItem = ({ label, activeSection, sectionName, onActiveSectionChange }) => {
  return (
    <div className='sidebar-item-container' onClick={() => {
      onActiveSectionChange(sectionName)
    }} >
      <div className={`sidebar-item-content${activeSection === sectionName ? '--active' : ''}`}>{label}</div>
      <div className={`sidebar-item-underline${activeSection === sectionName ? '--active' : ''}`} />
    </div>
  )
}

const Sidebar = ({ sidebarLinks, activeSection, onActiveSectionChange }) => {
  useEffect(() => {
    const onTargetScrollEvent = eventController.on('SCROLLED_TO_TARGET', ({ targetId }) => {
      onActiveSectionChange(targetId)
    })
    return () => {
      onTargetScrollEvent.off()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div ref={ref => addControllerRef({ ref, id: 'sidebar' })} className='sidebar-container'>
      <div className='sidebar-container--content'>
        {sidebarLinks.map((item, index) =>
          <SidebarItem
            onActiveSectionChange={(sectionName) => {
              onControlScroll(sectionName)
            }}
            activeSection={activeSection}
            key={`si_${index}`}
            {...item}
          />)}
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  sidebarLinks: PropTypes.array,
  activeSection: PropTypes.string,
  onActiveSectionChange: PropTypes.func
}

export default Sidebar
