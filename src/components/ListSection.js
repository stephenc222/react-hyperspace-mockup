import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from './Section'
import List from 'components/List'
import Header from 'components/Header'

const ListSection = ({ unOrderedListData, orderedListData }) => {
  return (
    <Section header='Lists'>
      <div className='list-section-content'>
        <div className='list-section-column'>
          <Header priority='3'>Unordered</Header>
          <List listData={unOrderedListData} />
          <Header priority='3'>Alternate</Header>
          <List listClassName='alt' listData={unOrderedListData} />
        </div>
        <div className='list-section-column'>
          <Header priority='3'>Ordered</Header>
          <List isOrdered listData={orderedListData} />
          <Header priority='3'>Icons</Header>
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

ListSection.propTypes = {
  unOrderedListData: PropTypes.array.isRequired,
  orderedListData: PropTypes.array.isRequired
}

export default ListSection
