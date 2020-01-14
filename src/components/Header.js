import React from 'react'
import PropTypes from 'prop-types'
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

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  priority: PropTypes.string,
  props: PropTypes.any
}

export default Header
