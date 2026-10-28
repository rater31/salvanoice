import { useEffect, useRef, useState } from 'react';
import { useLang } from '../context/LanguageContext.jsx';
import { ArrowUpRight, Close } from './Icons.jsx';

const links = ['work', 'films', 'about', 'contact'];
const menuLinks = ['showreel', 'work', 'films', 'motion', 'process', 'about', 'contact'];

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      setScrolled(window.scrollY > 24);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <a className="skip" href="#main">
        {t.ui.skip}
      </a>

      <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
        <span className="scroll-progress" ref={progressRef} aria-hidden="true" />
        <div className="shell site-header__inner">
          <a className="logo" href="#top" onClick={close}>
            <img
              className="logo__img"
              src={`${import.meta.env.BASE_URL}media/Instagram%202%20.0.png`}
              alt="Salvanoise"
            />
          </a>

          <nav className="nav" aria-label={t.nav.label}>
            {links.map((key) => (
              <a key={key} href={`#${key}`}>
                {t.nav[key]}
              </a>
            ))}
          </nav>

          <div className="site-header__tools">
            <div className="lang" role="group" aria-label={t.ui.language}>
              <button
                type="button"
                aria-pressed={lang === 'en'}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button
                type="button"
                aria-pressed={lang === 'es'}
                onClick={() => setLang('es')}
              >
                ES
              </button>
            </div>

            <a className="btn btn--solid btn--sm site-header__cta" href="#contact">
              <span>{t.ui.startProject}</span>
              <ArrowUpRight size={12} />
            </a>

            <button
              className="menu-btn"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.ui.closeMenu : t.ui.menu}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <Close size={20} />
              ) : (
                <span className="menu-btn__lines" aria-hidden="true">
                  <span />
                  <span />
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="mobile-menu" id="mobile-menu">
          <nav className="mobile-menu__nav" aria-label={t.nav.label}>
            {menuLinks.map((key, index) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={close}
                style={{ '--i': index }}
              >
                <span className="mobile-menu__index">{String(index + 1).padStart(2, '0')}</span>
                <span>{t.nav[key]}</span>
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>

          <div className="mobile-menu__foot" style={{ '--i': menuLinks.length }}>
            <a className="btn btn--solid" href="#contact" onClick={close}>
              {t.ui.startProject}
              <ArrowUpRight size={13} />
            </a>
            <p>{t.contact.availability}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
