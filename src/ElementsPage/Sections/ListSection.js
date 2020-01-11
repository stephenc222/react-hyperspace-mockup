import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from './Section'
import List from '../../components/List'
import siteData from '../../siteData'

const {
  orderedListData,
  unOrderedListData,
} = siteData

const ListSection = () => {
  return (
    <Section header='Lists'>
      <div className='list-section-content'>
        <div className='list-section-column'>
          <h3>Unordered</h3>
          <List listData={unOrderedListData} />
          <h3>Alternate</h3>
          <List listClassName='alt' listData={unOrderedListData} />
        </div>
        <div className='list-section-column'>
          <h3>Ordered</h3>
          <List isOrdered listData={orderedListData} />
          <h3>Icons</h3>
          <p>
            <span className='contact-section-icon-container'>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </span>
            <span className='contact-section-icon-container'>
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </span>
            <span className='contact-section-icon-container'>
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </span>
            <span className='contact-section-icon-container'>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </span>
          </p>
        </div>
      </div>
    </Section>
  )
}

export default ListSection
