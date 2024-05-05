import './App.css';
import { useEffect, useState } from 'react';
import { Navbar, Hero, Specials, Testimonials, About, Footer, Login, Promotion, Reservations } from './components';

function App() {

  const [navBg, setNavBg] = useState('')
  const [login, setLogin] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("")

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

  return (
    <>
      <header className={`${navBg} ${scrollDirection}`}>
        <Navbar setLogin={triggerLogin}/>
      </header>
      <main>
        {login && <Login setLogin={triggerLogin} />}
        <Hero />
        <Specials />
        <Promotion />
        <About />
        <Testimonials />
        <Reservations />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
