import React from 'react'
import './SiteHeader.css'

const CompanyName = ({ history }) => <div onClick={() => history.push('/')} className='header-link-company-name'>hyperspace</div>

const HeaderLinkItem = (props) => {
  const { label, path, history } = props
  const isActive = history.location.pathname === path
  return (
    <div className='header-link-item-container' onClick={() => history.push(path)}>
      <div className={`header-link-item-content${isActive ? '--active' : ''}`}>{label}</div>
    </div>
  )
}

const HeaderLinks = ({ headerLinks, history }) => {
  return (
    <div className='header-links-container'>
      {headerLinks.map((linkItem, index) => <HeaderLinkItem key={`hli_${index}`} {...linkItem} history={history} />)}
    </div>
  )
}

const SiteHeader = ({ history, headerLinks = [] }) => {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <CompanyName history={history} />
        <HeaderLinks history={history} headerLinks={headerLinks} />
      </div>
    </div>
  )
}

export default SiteHeader
