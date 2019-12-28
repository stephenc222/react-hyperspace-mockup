import React from 'react'
import Image from '../../components/Image'
import Section from './Section'

const ImageSection = () => {
  return (
    <Section header='Image'>
      <h3>Fit</h3>
      <Image filename='hand_holding_phone_wide' />
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 20, flexGrow: 1 }}>
        <Image filename='hand_holding_phone' />
        <span style={{ padding: '1em' }} />
        <Image filename='street_view' />
        <span style={{ padding: '1em' }} />
        <Image filename='guy_gazing' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
        <Image filename='guy_gazing' />
        <span style={{ padding: '1em' }} />
        <Image filename='hand_holding_phone' />
        <span style={{ padding: '1em' }} />
        <Image filename='street_view' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
        <Image filename='street_view' />
        <span style={{ padding: '1em' }} />
        <Image filename='guy_gazing' />
        <span style={{ padding: '1em' }} />
        <Image filename='hand_holding_phone' />
      </div>
      <h3>Left & Right</h3>
      <p>
        <span className="image left">
          <div style={{ height: '11em', width: '11em' }} className='image-container'>
            <Image filename='street_view' />
          </div>
        </span>
        Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod.
        Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
        adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis
        eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
      </p>
      <p>
        <span className="image right">
          <div style={{ height: '11em', width: '11em' }} className='image-container'>
            <Image filename='guy_gazing' />
          </div>
        </span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
    </Section>
  )
}

export default ImageSection
