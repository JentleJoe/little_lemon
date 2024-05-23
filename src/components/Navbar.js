import React, { useState } from 'react'
import logo from '../assets/img/Logo.svg'
import closeIcon from '../assets/img/close-icon.svg'
import ham_icon from '../assets/img/ham_icon.svg'

function Navbar({toggleIconClose, hamIcon, toggleIcon, setLogin, navBg, scrollDirection}) {

  // const [display,setDisplay] = useState('')

  // const updateDisplay = () =>  {
  //   setDisplay(() => {
  //     display === '' ? "mobile" : ''
  //   })
  // }
  return (
    <nav>
      <div className={`${navBg} ${scrollDirection} navbar`}>
        <div>
            <img alt='logo' width={"150"} src={logo}/>
        </div>
        <div className='link-container'>
            <ul className='navlinks'>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#home">HOME</a></li>
                <li><a href="#menu">MENU</a></li>
                <li><a href="#reservations">RESERVATIONS</a></li>
                <li><a href="#reservations">ORDER ONLINE</a></li>
                <li onClick={setLogin} className='mobile navlogin'>LOGIN</li>
            </ul>
        </div>
        <div className='hamicon' onClick={toggleIcon}>
          <img src={hamIcon === 'hamburger'? ham_icon : closeIcon} alt='ham-icon' />
        </div>
      </div>
      { <div className={`mobile-nav ${hamIcon !== 'hamburger' ? 'decor' : ''}`}>
          {
            hamIcon !== 'hamburger' &&
            <div className='hamlink-container'>
              <ul className='hamlinks'>
                <li className='mobile' onClick={toggleIconClose}><a href="#about">ABOUT</a></li>
                <li className='mobile' onClick={toggleIconClose}><a href="#home">HOME</a></li>
                <li className='mobile' onClick={toggleIconClose}><a href="#menu">MENU</a></li>
                <li className='mobile' onClick={toggleIconClose}><a href="#reservations">RESERVATIONS</a></li>
                <li className='mobile' onClick={toggleIconClose}><a href="reservations">ORDER ONLINE</a></li>
                <li onClick={setLogin} className='mobile navlogin'>
                  <span onClick={toggleIconClose}>LOGIN</span>
                </li>
              </ul>
              <a href='#home' className='mobile_logo' onClick={toggleIconClose}>
                <img alt='logo' width={"100"} src={logo}/>
              </a>
            </div>
          }
        </div>
      }
    </nav>
  )
}

export default Navbar