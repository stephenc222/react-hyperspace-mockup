import React from 'react'
import SiteHeader from 'components/SiteHeader'
import Footer from 'components/Footer'
import Page from 'components/Page'
import Image from 'components/Image'
import PageContent from 'components/PageContent'
import GenericPageText from 'components/GenericPageText'
import Header from 'components/Header'

const GenericPage = ({ history, headerLinks }) => {
  return (
    <Page>
      <SiteHeader headerLinks={headerLinks} history={history} />
      <PageContent>
        <Header children='A generic Page' />
        <Image filename='hand_holding_phone_wide' />
        <GenericPageText />
      </PageContent>
      <Footer style={{ background: '#261c3e', color: 'rgba(255, 255, 255, 0.15)' }} />
    </Page>
  )
}

export default GenericPage
