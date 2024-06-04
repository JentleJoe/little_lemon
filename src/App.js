import './App.css';
import { useEffect, useState } from 'react';
import { Navbar, Hero, Specials, Testimonials, About, Footer, Login, Promotion, Reservations, Dialog } from './components';

function App() {

  const [navBg, setNavBg] = useState('')
  const [login, setLogin] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("")
  const [hamIcon, setHamIcon] = useState('hamburger')
  // Login State
  const [userLogin, setUserLogin] = useState(false)

  // Handle Nav display on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      if (currentScrollPos > 300 && currentScrollPos > prevScrollPos){
        setScrollDirection("down")
      }else if(currentScrollPos > 50 && currentScrollPos < prevScrollPos){
        setScrollDirection("up")
      }
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  // Handle Nav Background Color
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if (currentScrollPos > 50){
        setNavBg('nav-dark')
      } else {
        setNavBg('nav-transparent')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const triggerLogin = () => {
    setLogin(prev => !prev)
  }
  const handleLogin = () => {
    if (userLogin === true){
      setUserLogin((prevState) => !prevState)
      // Add log out prompt to alert user that they're logged out
    }
    else{
      setLogin(prev => !prev)
    }
  }

  const toggleIcon = () =>  {
    setHamIcon(() => {
      return hamIcon === 'hamburger'? 'closeIcon' : 'hamburger'
    })
  }
  const toggleIconClose = () => {
    if (hamIcon === "closeIcon"){
      setHamIcon('hamburger')
    }
  }

  return (
    <>
      <header className={`${navBg} ${scrollDirection}`}>
        <Navbar toggleIcon={toggleIcon} hamIcon={hamIcon} toggleIconClose={toggleIconClose} setLogin={handleLogin}
         navBg={navBg} scrollDirection={scrollDirection} userLogin={userLogin} setUserLogin={handleLogin} />
      </header>
      <main>
        {login && <Login setLogin={triggerLogin} userLogin={userLogin} setUserLogin={handleLogin} login={login} />}
        <Hero toggleIconClose={toggleIconClose}/>
        <Specials toggleIconClose={toggleIconClose}/>
        <Promotion toggleIconClose={toggleIconClose}/>
        <About toggleIconClose={toggleIconClose}/>
        <Testimonials />
        <Reservations toggleIconClose={toggleIconClose}/>
      </main>
      <footer>
        <Footer userLogin={userLogin} toggleIconClose={toggleIconClose} setLogin={handleLogin}/>
      </footer>
    </>
  );
}

export default App;
