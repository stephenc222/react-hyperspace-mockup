import React from 'react'

const PageContent = ({
  children,
  pageContentContainerClassName = 'page-content-container',
  pageContentClassName = 'page-content',
  ...props
}) => {
  if (children.length) {
    return (
      <div className={`${pageContentContainerClassName}`}>
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
