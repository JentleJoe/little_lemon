import './App.css';
import { useState } from 'react';
import { Navbar, Hero, Specials, Testimonials, About, Footer, Login } from './components';

function App() {

  const [navBg, setNavBg] = useState('nav-transparent')
  const [login, setlogin] = useState(true)

  const setNavStyle = () => {
    // USING THE useEffect Hook:
    // set navStyle to either nav-trasparent or nav-dark
    // based on Y scroll direction
  }

  const triggerLogin = (prev) => {
    setlogin(prev == true ? false : true)
  }

  return (
    <>
      <header className={navBg}>
        <Navbar setlogin={triggerLogin}/>
      </header>
      <main>
        {login && <Login setlogin={triggerLogin} />}
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
