import React from 'react'
import Header from '../Header'
import Content from './Content'
import './ElementsPage.css'

const getHeaderLinks = (history) => {
  return [
    { label: 'Home', path: '/', history },
    { label: 'Generic', path: '/generic', history },
    { label: 'Elements', path: '/elements', history },
  ]
}
const ElementsPage = ({ history }) => {
  return (
    <div className='elements-page-container'>
      <Header headerLinks={getHeaderLinks(history)} />
      <Content />
    </div>
  )
}

export default ElementsPage
