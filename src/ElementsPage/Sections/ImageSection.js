import React from 'react'
import Section from './Section'

const ImageSection = () => {
  // TODO: add actual images
  return (
    <Section header='Image'>
      <h3>Fit</h3>
      <div className='image-fit-container' />
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 20, flexGrow: 1 }}>
        <div className='image-fit-container' />
        <span style={{ padding: '1em' }} />
        <div className='image-fit-container' />
        <span style={{ padding: '1em' }} />
        <div className='image-fit-container' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
        <div className='image-fit-container' />
        <span style={{ padding: '1em' }} />
        <div className='image-fit-container' />
        <span style={{ padding: '1em' }} />
        <div className='image-fit-container' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
        <div className='image-fit-container' />
        <span style={{ padding: '1em' }} />
        <div className='image-fit-container' />
        <span style={{ padding: '1em' }} />
        <div className='image-fit-container' />
      </div>
      <h3>Left & Right</h3>
      <p>
        <span className="image left">
          <div style={{ height: '11em', width: '11em' }} className='image-container' />
        </span>
        Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod.
        Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
        adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis
        eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
      </p>
      <p>
        <span className="image right">
          <div style={{ height: '11em', width: '11em' }} className='image-container' />
        </span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
    </Section>
  )
}

export default ImageSection
