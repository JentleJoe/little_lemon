import React, { useState } from 'react'
import logo from '../assets/img/Logo.svg'
import hamburger from '../assets/img/hamburger-img.png'
import closeIcon from '../assets/img/close-icon.svg'

function Navbar({setLogin, navBg, scrollDirection}) {

  // const [hamIcon, setHamIcon] = useState('hamburger')

  // const toggleIcon = () =>  {
  //   setHamIcon(() => {
  //     hamIcon === 'hamburger'? hamburger : closeIcon
  //   })
  // }

  // const [display,setDisplay] = useState('')

  // const updateDisplay = () =>  {
  //   setDisplay(() => {
  //     display === '' ? "mobile" : ''
  //   })
  // }
  return (
    <nav className={`${navBg} ${scrollDirection} navbar`}>
      <div>
          <img alt='logo' width={"150"} src={logo}/>
      </div>
      <div className='link-container'>
          <ul className='navlinks'>
              <li className='mobile'><a href="#about">ABOUT</a></li>
              <li className='mobile'><a href="#home">HOME</a></li>
              <li className='mobile'><a href="#menu">MENU</a></li>
              <li className='mobile'><a href="">RESERVATIONS</a></li>
              <li className='mobile'><a href="">ORDER ONLINE</a></li>
              <li onClick={setLogin} className='mobile navlogin'>LOGIN</li>
          </ul>
      </div>
      {/* <div className='hamburger' onClick={toggleIcon}>
        <img src={hamIcon === 'hamburger'? hamburger : closeIcon} alt='ham-icon' />
      </div> */}
    </nav>
  )
}

export default Navbar