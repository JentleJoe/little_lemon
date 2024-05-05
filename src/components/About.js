import React from 'react'
import restaurant from '../assets/img/Mario and Adrian b.png'
import Button from './Button'

function About() {
  return (
    <section className='about-section' id='#about'>
      <div className='about-content'>
        <div className='about-text'>
          <h4 className='about-heading'>Welcome to Little Lemon Restaurant</h4>
          <h3 className='about-subhead'>Traditional Chicago Food  To Delight The Whole Family</h3>
          <p className='about-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.
          </p>
          <a href='#home'><Button text={"Learn More"} /></a>
        </div>
        <div className='aboutimg-container'>
          <img className='restaurant-img' width={"100%"} height={"100%"} src={restaurant}></img>
        </div>
      </div>
    </section>
  )
}

export default About