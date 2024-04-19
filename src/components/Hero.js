import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <div className='hero-section' id='home'>
        <div className='hero-content'>
            <h1 className='heading'>Little Lemon</h1>
            <h3 className='sub-heading'>Chicago</h3>
            <p className='heading-text'>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
            <Button text={"Reserve Table"} />
        </div>
    </div>
  )
}

export default Hero