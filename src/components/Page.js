import React from 'react'
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


export default Page
