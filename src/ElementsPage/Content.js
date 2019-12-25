import React from 'react'
import TextSection from './Sections/TextSection'
import ListSection from './Sections/ListSection'
import ActionsSection from './Sections/ActionsSection'
import ButtonsSection from './Sections/ButtonsSection'
import TableSection from './Sections/TableSection'
import FormSection from './Sections/FormSection'
import ImageSection from './Sections/ImageSection'
import './Content.css'

const Content = () => {
  return (
    <div className='elements-page-content-container'>
      <div className='elements-page-content'>
        <h1>
          Elements
        </h1>
        <TextSection />
        <ListSection />
        <ActionsSection />
        <TableSection />
        <ButtonsSection />
        <FormSection />
        <ImageSection />
      </div>
    </div>
  )
}

export default Content
