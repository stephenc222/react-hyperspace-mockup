import React from 'react'
import SiteHeader from 'components/SiteHeader'
import Footer from 'components/Footer'
import Page from 'components/Page'
import siteData from 'siteData'
import Image from 'components/Image'
import PageContent from 'components/PageContent'
import Header from 'components/Header'

const { headerLinks } = siteData

const GenericPage = ({ history }) => {
  return (
    <Page>
      <SiteHeader headerLinks={headerLinks} history={history} />
      <PageContent>
        <Header>
          A generic Page
      </Header>
        <Image filename='hand_holding_phone_wide' />
        <div className='generic-page-content-text'>
          <p>Donec eget out loud. Sometimes they malesuada hunger and at the first taste. Sterilized nutrition consumer financing consumer a lot of balls. Makeup-creative present, for the want of life, is the author of the mainstream. Pellentesque leo mauris, id ipsum sit amet, consectetur, fergiat. Gaming on my football mass lacinia from the developer. Unfortunately, thou vessel of, in the soul be pure and skirt, the price of pulvinar mauris. Chat sapien smile, please ugly but functional element Elit. For high school kids, Bureau et.</p>
          <p>Sometimes they malesuada hunger and at the first taste. Sterilized nutrition consumer financing consumer a lot of balls. Makeup-creative present, for the want of life, is the author of the mainstream. The lion nutrition environment, the main thing is important, fersapien smile, please ugly but functional element Elit. Kids are ugly, sad Bureau lorem ipsum pain.</p>
        </div>
      </PageContent>
      <Footer style={{ background: '#261c3e', color: 'rgba(255, 255, 255, 0.15)' }} />
    </Page>
  )
}

export default GenericPage
