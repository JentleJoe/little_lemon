import './App.css';
import { useState } from 'react';
import { Navbar, Hero, Specials, Testimonials, About } from './components';

function App() {

  const [navBg, setNavBg] = useState('nav-transparent')

  const setNavStyle = () => {
    // USING THE useEffect Hook:
    // set navStyle to either nav-trasparent or nav-dark
    // based on Y scroll direction
  }

  return (
    <>
      <header className={navBg}>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}

export default App;
