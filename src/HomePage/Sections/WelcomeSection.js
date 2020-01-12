import React from 'react'
import Button from 'components/Button'
import DottedLink from 'components/DottedLink'
import Header from 'components/Header'
import { addTargetRef, onControlScroll } from 'utils/AutoScroll'
import './WelcomeSection.css'


const WelcomeSection = () => {
  return (
    <div ref={ref => addTargetRef({ ref, id: 'welcomeSection' })} className='welcome-section-container'>
      <Header>Hyperspace</Header>
      <p>
        Just another fine responsive site template designed by <DottedLink text='HTML5 UP' href={'http://html5up.net/'} /><br />
        &nbsp;and released for free under the <DottedLink text='Creative Commons' href={'http://html5up.net/license'} />.
        </p>
      <Button onClick={() => onControlScroll('whoWeAreSection')} label='Learn More' />
    </div>
  )
}

export default WelcomeSection
