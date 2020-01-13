import React from 'react'
import SiteHeader from 'components/SiteHeader'
import Footer from 'components/Footer'
import Page from 'components/Page'
import TextSection from 'components/TextSection'
import ListSection from 'components/ListSection'
import ActionsSection from 'components/ActionsSection'
import ButtonsSection from 'components/ButtonsSection'
import TableSection from 'components/TableSection'
import FormSection from 'components/FormSection'
import ImageSection from 'components/ImageSection'
import PageContent from 'components/PageContent'
import Header from 'components/Header'

const ElementsPage = ({ history, ...props }) => {
  return (
    <Page>
      <SiteHeader history={history} {...props} />
      <PageContent>
        <Header children='Elements'>
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
