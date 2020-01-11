import React from 'react'
import SiteHeader from '../components/SiteHeader'
import Content from './Content'
import './ElementsPage.css'
import Footer from '../components/Footer'
import Page from '../components/Page'
import siteData from '../siteData'

const { headerLinks } = siteData

const ElementsPage = ({ history }) => {
  return (
    <Page>
      <SiteHeader history={history} headerLinks={headerLinks} />
      <Content />
      <Footer style={{ background: '#261c3e', color: 'rgba(255, 255, 255, 0.15)' }} />
    </Page>
  )
}

export default ElementsPage
