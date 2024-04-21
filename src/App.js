import './App.css';
import { useState } from 'react';
import { Navbar, Hero, Specials, Testimonials, About, Footer, Login } from './components';

function App() {

  const [navBg, setNavBg] = useState('nav-transparent')
  const [login, setLogin] = useState(false)

  const setNavStyle = () => {
    // USING THE useEffect Hook:
    // set navStyle to either nav-trasparent or nav-dark
    // based on Y scroll direction
  }

  const triggerLogin = () => {
    setLogin(prev => !prev)
  }

  return (
    <>
      <header className={navBg}>
        <Navbar setLogin={triggerLogin}/>
      </header>
      <main>
        {login && <Login setLogin={triggerLogin} />}
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
