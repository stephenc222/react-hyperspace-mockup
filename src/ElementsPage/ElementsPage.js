import React from 'react'
import SiteHeader from 'components/SiteHeader'
import Footer from 'components/Footer'
import Page from 'components/Page'
import TextSection from './Sections/TextSection'
import ListSection from './Sections/ListSection'
import ActionsSection from './Sections/ActionsSection'
import ButtonsSection from './Sections/ButtonsSection'
import TableSection from './Sections/TableSection'
import FormSection from './Sections/FormSection'
import ImageSection from './Sections/ImageSection'
import PageContent from 'components/PageContent'
import Header from 'components/Header'

const ElementsPage = ({ history, ...props }) => {
  return (
    <Page>
      <SiteHeader history={history} {...props} />
      <PageContent>
        <Header>
          Elements
        </Header>
        <TextSection />
        <ListSection {...props} />
        <ActionsSection />
        <TableSection />
        <ButtonsSection />
        <FormSection />
        <ImageSection />
      </PageContent>
      <Footer style={{ background: '#261c3e', color: 'rgba(255, 255, 255, 0.15)' }} />
    </Page>
  )
}

export default ElementsPage
