import React from 'react'
import Header from '../Header'
import Content from './Content'
import './GenericPage.css'

const getHeaderLinks = (history) => {
  return [
    { label: 'Home', path: '/', history },
    { label: 'Generic', path: '/generic', history },
    { label: 'Elements', path: '/elements', history },
  ]
}
const GenericPage = ({ history }) => {
  return (
    <div className='generic-page-container'>
      <Header headerLinks={getHeaderLinks(history)} />
      <Content />
    </div>
  )
}

export default GenericPage
