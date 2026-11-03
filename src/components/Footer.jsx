import { useLang } from '../context/LanguageContext.jsx';
import { emailHref, site } from '../data/site.js';
import { ArrowUp, ArrowUpRight } from './Icons.jsx';

const links = ['work', 'films', 'about', 'contact'];

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__brand">
          <a className="logo" href="#top">
            <img
              className="logo__img"
              src={`${import.meta.env.BASE_URL}media/Instagram%202%20.0.png`}
              alt="Salvanoise"
            />
          </a>
          <p className="footer__tagline">{t.footer.tagline}</p>
          <a className="footer__mail" href={emailHref}>
            {site.email}
            <ArrowUpRight size={12} />
          </a>
        </div>

        <nav className="footer__nav" aria-label={t.footer.navLabel}>
          <p className="eyebrow">{t.footer.navLabel}</p>
          {links.map((key) => (
            <a key={key} href={`#${key}`}>
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="footer__meta">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <a
            className="footer__made-by"
            href="https://onisolutions.com.ar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Oni
          </a>
          <a className="footer__top" href="#top">
            {t.footer.backToTop}
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    
    </footer>
  );
}
