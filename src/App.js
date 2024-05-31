import './App.css';
import { useEffect, useState } from 'react';
import { Navbar, Hero, Specials, Testimonials, About, Footer, Login, Promotion, Reservations } from './components';

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
        <Navbar toggleIcon={toggleIcon} hamIcon={hamIcon} toggleIconClose={toggleIconClose} setLogin={triggerLogin}
         navBg={navBg} scrollDirection={scrollDirection} userLogin={userLogin} setUserLogin={setUserLogin} />
      </header>
      <main>
        {login && <Login setLogin={triggerLogin} userLogin={userLogin} setUserLogin={setUserLogin} />}
        <Hero toggleIconClose={toggleIconClose}/>
        <Specials toggleIconClose={toggleIconClose}/>
        <Promotion toggleIconClose={toggleIconClose}/>
        <About toggleIconClose={toggleIconClose}/>
        <Testimonials />
        <Reservations toggleIconClose={toggleIconClose}/>
      </main>
      <footer userLogin={userLogin} setUserLogin={setUserLogin}>
        <Footer toggleIconClose={toggleIconClose} setLogin={triggerLogin}/>
      </footer>
    </>
  );
}

export default App;
