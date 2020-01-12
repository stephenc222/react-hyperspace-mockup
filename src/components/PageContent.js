import React from 'react'
import './PageContent.css'

const PageContent = ({
  children,
  pageContentContainerClassName = 'page-content-container',
  pageContentClassName = 'page-content',
  onScroll = () => { },
  ...props
}) => {
  if (children.length) {
    return (
      <div onScroll={onScroll} className={`${pageContentContainerClassName}`}>
        <div className={`${pageContentClassName}`}>
          {
            children.map((child, index) => React.cloneElement(child, { key: `pc_${index}`, ...props }))
          }
        </div>
      </div>
    )
  }
  return (
    <div className={`${pageContentContainerClassName}`}>
      <div className={`${pageContentClassName}`}>
        {
          React.cloneElement(children, { ...props })
        }
      </div>
    </div>
  )
}

export default PageContent
