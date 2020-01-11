import React from 'react'
import TextSection from './Sections/TextSection'
import ListSection from './Sections/ListSection'
import ActionsSection from './Sections/ActionsSection'
import ButtonsSection from './Sections/ButtonsSection'
import TableSection from './Sections/TableSection'
import FormSection from './Sections/FormSection'
import ImageSection from './Sections/ImageSection'
import PageContent from '../components/PageContent'
import Header from '../components/Header'

const Content = () => {
  return (
    <PageContent>
      <Header>
        Elements
        </Header>
      <TextSection />
      <ListSection />
      <ActionsSection />
      <TableSection />
      <ButtonsSection />
      <FormSection />
      <ImageSection />
    </PageContent>
  )
}

export default Content
