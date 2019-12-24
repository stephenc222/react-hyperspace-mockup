import React from 'react'
import Header from '../components/Header'
import Content from './Content'
import './ElementsPage.css'
import Footer from '../components/Footer'

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
      <Footer style={{ background: '#261c3e', color: 'rgba(255, 255, 255, 0.15)' }} />
    </div>
  )
}

export default ElementsPage
