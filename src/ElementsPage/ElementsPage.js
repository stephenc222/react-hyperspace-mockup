import React from 'react'
import Header from '../components/Header'
import Content from './Content'
import './ElementsPage.css'
import Footer from '../components/Footer'

const HEADER_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Generic', path: '/generic' },
  { label: 'Elements', path: '/elements' },
]
const ElementsPage = ({ history }) => {
  return (
    <div className='elements-page-container'>
      <Header history={history} headerLinks={HEADER_LINKS} />
      <Content />
      <Footer style={{ background: '#261c3e', color: 'rgba(255, 255, 255, 0.15)' }} />
    </div>
  )
}

export default ElementsPage
