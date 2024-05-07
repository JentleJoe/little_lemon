import React, { useState } from 'react'
import logo from '../assets/img/Logo.svg'

function Navbar({setLogin, navBg, scrollDirection}) {

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
      <div>
          <ul className='navlinks'>
              <li className='mobile'><a href="#about">ABOUT</a></li>
              <li className='mobile'><a href="#home">HOME</a></li>
              <li className='mobile'><a href="#menu">MENU</a></li>
              <li className='mobile'><a href="">RESERVATIONS</a></li>
              <li className='mobile'><a href="">ORDER ONLINE</a></li>
              <li onClick={setLogin} className='mobile navlogin'>LOGIN</li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar