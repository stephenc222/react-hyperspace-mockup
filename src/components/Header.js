import React from 'react'
import './Header.css'

const CompanyName = ({ history }) => <div onClick={() => history.push('/')} className='header-link-company-name'>hyperspace</div>

const HeaderLinkItem = (props) => {
  const { label, path, history } = props
  console.log({ props })
  console.log({ historyPathName: history.location.pathname, path })
  const isActive = history.location.pathname === path
  return (
    <div className='header-link-item-container' onClick={() => history.push(path)}>
      <div className={`header-link-item-content${isActive ? '--active' : ''}`}>{label}</div>
    </div>
  )
}

const HeaderLinks = ({ headerLinks }) => {
  return (
    <div className='header-links-container'>
      {headerLinks.map((linkItem, index) => <HeaderLinkItem key={`hli_${index}`} {...linkItem} />)}
    </div>
  )
}

const Header = ({ history, headerLinks = [] }) => {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <CompanyName history={history} />
        <HeaderLinks headerLinks={headerLinks} />
      </div>
    </div>
  )
}

export default Header
