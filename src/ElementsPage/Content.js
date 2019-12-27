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
        <div>
          <h1>
            Elements
          </h1>
        </div>
        <TextSection />
        <ListSection />
        <ActionsSection />
        <TableSection />
        <ButtonsSection />
        <FormSection />
        {/* FIXME: these sections are consistently "too wide", which causes x-axis overflow undesirably */}
        {/* <ImageSection /> */}
      </div>
    </div>
  )
}

export default Content
