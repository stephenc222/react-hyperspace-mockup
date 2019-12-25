import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from './Section'

const ListSection = () => {
  return (
    <Section header='Lists'>
      <div className='list-section-content'>
        <div className='list-section-column'>
          <h3>Unordered</h3>
          <ul>
            <li>Dolor pulvinar etiam.</li>
            <li>Sagittis adipiscing.</li>
            <li>Felis enim feugiat.</li>
          </ul>
          <h3>Alternate</h3>
          <ul className="alt">
            <li>Dolor pulvinar etiam.</li>
            <li>Sagittis adipiscing.</li>
            <li>Felis enim feugiat.</li>
          </ul>
        </div>
        <div className='list-section-column'>
          <h3>Ordered</h3>
          <ol>
            <li>Dolor pulvinar etiam.</li>
            <li>Etiam vel felis viverra.</li>
            <li>Felis enim feugiat.</li>
            <li>Dolor pulvinar etiam.</li>
            <li>Etiam vel felis lorem.</li>
            <li>Felis enim et feugiat.</li>
          </ol>
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
