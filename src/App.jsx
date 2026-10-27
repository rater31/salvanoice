import { useCallback, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Showreel from './components/Showreel.jsx';
import Clients from './components/Clients.jsx';
import Work from './components/Work.jsx';
import Motion from './components/Motion.jsx';
import ShortFilms from './components/ShortFilms.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Lightbox from './components/Lightbox.jsx';

export default function App() {
  const [active, setActive] = useState(null);

  const open = useCallback((item) => {
    window.dispatchEvent(new Event('salvanoise:lightbox-open'));
    setActive(item);
  }, []);
  const close = useCallback(() => {
    setActive(null);
    window.dispatchEvent(new Event('salvanoise:lightbox-close'));
  }, []);

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Showreel onPlay={open} />
        <Clients />
        <Work onPlay={open} />
        <Motion onPlay={open} />
        <ShortFilms />
       
        <About />
        <Contact onPlay={open} />
      </main>
      <Footer />
      <Lightbox active={active} onClose={close} />
    </>
  );
}
