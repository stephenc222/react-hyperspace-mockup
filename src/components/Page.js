import React from 'react'
import PropTypes from 'prop-types'
import './Page.css'

const Page = ({ children, pageContainerClassName = 'page-container', ...props }) => {
  if (children.length) {
    return (
      <div className={`${pageContainerClassName}`}>
        {
          children.map((child, index) => React.cloneElement(child, { key: `pc_${index}`, ...props }))
        }
      </div>
    )
  }
  return (
    <div className={`${pageContainerClassName}`}>
      {
        React.cloneElement(children, { ...props })
      }
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  pageContainerClassName: PropTypes.string,
  props: PropTypes.any
}

export default Page
