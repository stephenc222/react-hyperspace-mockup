import React from 'react'
import SiteHeader from '../components/SiteHeader'
import Content from './Content'
import Footer from '../components/Footer'
import Page from '../components/Page'
import siteData from '../siteData'
import './GenericPage.css'

const { headerLinks } = siteData

const GenericPage = ({ history }) => {
  return (
    <Page>
      <SiteHeader headerLinks={headerLinks} history={history} />
      <Content />
      <Footer style={{ background: '#261c3e', color: 'rgba(255, 255, 255, 0.15)' }} />
    </Page>
  )
}

export default GenericPage
