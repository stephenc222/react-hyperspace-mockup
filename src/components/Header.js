import React from 'react'
import './Header.css'

const Header = ({ children, priority = '1', ...props }) => {
  const HeaderElem = `h${priority}`
  if (children && children.length && typeof children !== 'string') {
    return (
      <HeaderElem>
        {children.map((child, index) => React.cloneElement(child, { key: `hc_${index}`, ...props }))}
      </HeaderElem>
    )
  }
  return (
    <HeaderElem>
      {children}
    </HeaderElem>
  )
}

export default Header
