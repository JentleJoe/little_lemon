import React from 'react'
import logo from '../assets/img/Logo.svg'

function Navbar({name, setLogin}) {
  return (
    <nav className='navbar'>
      <div>
          <img alt='logo' width={"150"} src={logo}/>
      </div>
      <div>
          <ul className='navlinks'>
              <li className='link'><a href="#home">HOME</a></li>
              <li className='link'><a href="">ABOUT</a></li>
              <li className='link'><a href="#menu">MENU</a></li>
              <li className='link'><a href="">RESERVATIONS</a></li>
              <li className='link'><a href="">ORDER ONLINE</a></li>
              <li onClick={setLogin} className='link navlogin'>LOGIN</li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar