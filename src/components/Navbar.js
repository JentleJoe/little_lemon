import React, { useState } from 'react'
import logo from '../assets/img/Logo.svg'
import hamburger from '../assets/img/hamburger-img.png'
import closeIcon from '../assets/img/close-icon.svg'

function Navbar({setLogin, navBg, scrollDirection}) {

  const [hamIcon, setHamIcon] = useState('hamburger')

  const toggleIcon = () =>  {
    setHamIcon(() => {
      return hamIcon === 'hamburger'? 'closeIcon' : 'hamburger'
    })
  }

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
                <li><a href="">RESERVATIONS</a></li>
                <li><a href="">ORDER ONLINE</a></li>
                <li onClick={setLogin} className='mobile navlogin'>LOGIN</li>
            </ul>
        </div>
      </div>
      { <div className='mobile-nav'>
          <div className='hamicon' onClick={toggleIcon}>
            <img src={hamIcon === 'hamburger'? hamburger : closeIcon} alt='ham-icon' />
          </div>
          {
            hamIcon !== 'hamburger' &&
            <div className='hamlink-container'>
              <ul className='hamlinks'>
                <li className='mobile'><a href="#about">ABOUT</a></li>
                <li className='mobile'><a href="#home">HOME</a></li>
                <li className='mobile'><a href="#menu">MENU</a></li>
                <li className='mobile'><a href="">RESERVATIONS</a></li>
                <li className='mobile'><a href="">ORDER ONLINE</a></li>
                <li onClick={setLogin} className='mobile navlogin'>LOGIN</li>
              </ul>
            </div>
          }
        </div>
      }
    </nav>
  )
}

export default Navbar