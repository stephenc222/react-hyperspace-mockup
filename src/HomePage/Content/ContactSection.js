import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import TextArea from '../../components/TextArea'
import { addTargetRef } from '../../utils/AutoScroll'
import './ContactSection.css'

const Address = (
  <div className='contact-section-stats-container-item'>
    Address
    <div>
      <p>
        12345 Somewhere Road #654<br />
        Nashville, TN 00000-0000<br />
        USA
      </p>
    </div>
  </div>
)
const Email = (
  <div className='contact-section-stats-container-item'>
    Email
    <p>user@untitled.tld
    </p>
  </div>
)
const Phone = (
  <div className='contact-section-stats-container-item'>
    Phone
    <p>
      (000) 000-0000
    </p>
  </div>
)
const Social = (
  <div className='contact-section-stats-container-item'>
    Social
    <p>
      <span className='contact-section-icon-container'>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </span>
      <span className='contact-section-icon-container'>
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </span>
      <span className='contact-section-icon-container'>
        <FontAwesomeIcon icon={['fab', 'github']} />
      </span>
      <span className='contact-section-icon-container'>
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </span>
      <span className='contact-section-icon-container'>
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
      </span>
    </p>
  </div>
)

const ContactSection = () => {
  return (
    <div ref={ref => addTargetRef({ ref, id: 'getInTouchSection' })} className='contact-section-container'>
      <h2>Get in touch</h2>
      <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.
      </p>
      <div className='contact-section-content-container'>
        <div className='contact-section-form-container'>
          <div className='contact-section-text-input-container'>
            <TextInput label='Name' />
            <div style={{ padding: 20 }} />
            <TextInput label='Email' />
          </div>
          <TextArea label='Message' />
          <div style={{ paddingTop: 30 }}>
            <Button label='Send Message' />
          </div>
        </div>
        <div className='contact-section-stats-container'>
          {Address}
          {Email}
          {Phone}
          {Social}
        </div>
      </div>
    </div>
  )
}

export default ContactSection
