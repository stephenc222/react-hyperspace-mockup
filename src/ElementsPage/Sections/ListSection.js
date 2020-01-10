import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from './Section'
import List from '../../components/List'

const UNORDERED_LIST_DATA = [
  'Dolor pulvinar etiam.',
  'Sagittis adipiscing.',
  'Felis enim feugiat.'
]

const ORDERED_LIST_DATA = [
  'Dolor pulvinar etiam.',
  'Etiam vel felis viverra.',
  'Felis enim feugiat.',
  'Dolor pulvinar etiam.',
  'Etiam vel felis lorem.',
  'Felis enim et feugiat.'
]

const ListSection = () => {
  return (
    <Section header='Lists'>
      <div className='list-section-content'>
        <div className='list-section-column'>
          <h3>Unordered</h3>
          <List listData={UNORDERED_LIST_DATA} />
          <h3>Alternate</h3>
          <List listClassName='alt' listData={UNORDERED_LIST_DATA} />
        </div>
        <div className='list-section-column'>
          <h3>Ordered</h3>
          <List isOrdered listData={ORDERED_LIST_DATA} />
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
