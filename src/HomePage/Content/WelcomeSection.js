import React from 'react'
import Button from '../../components/Button'
import DottedLink from '../../components/DottedLink'
import { getTargetRef } from '../../utils/AutoScroll'
import './WelcomeSection.css'


const WelcomeSection = () => {
  return (
    <div ref={ref => getTargetRef({ ref, id: 'welcomeSection' })} className='welcome-section-container'>
      <h1>Hyperspace</h1>
      <p>
        Just another fine responsive site template designed by <DottedLink text='HTML5 UP' href={'http://html5up.net/'} /><br />
        &nbsp;and released for free under the <DottedLink text='Creative Commons' href={'http://html5up.net/license'} />.
        </p>
      <Button label='Learn More' />
    </div>
  )
}

export default WelcomeSection
