import React from 'react'
import './Header.css'

const CompanyName = () => <div>hyperspace</div>

const HeaderLinkItem = (props) => {
  const { label, path, history } = props
  return (
    <div className='header-link-item-container' onClick={() => history.push(path)}>
      <div className='header-link-item-content'>{label}</div>
      <div></div>
    </div>
  )
}

const HeaderLinks = ({ headerLinks }) => {
  return (
    <div className='header-links-container'>
      {headerLinks.map(HeaderLinkItem)}
    </div>
  )
}

const Header = ({ headerLinks = [] }) => {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <CompanyName />
        <HeaderLinks headerLinks={headerLinks} />
      </div>
    </div>
  )
}

export default Header
