import { useLang } from '../context/LanguageContext.jsx';
import { ArrowUpRight, Play } from './Icons.jsx';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell hero__stage">
        <div className="hero__head">
          <div className="hero__title">
            <h1 className="hero__word" id="hero-title">
              {t.hero.word}
            </h1>
            <p className="hero__year">{t.hero.year}</p>
          </div>

          <div className="hero__roles">
            <p className="hero__kicker">{t.hero.kicker}</p>
            <p className="hero__name">{t.hero.name}</p>
          </div>
        </div>

        <div className="hero__foot">
          <div className="hero__pitch">
            <p className="hero__value">{t.hero.value}</p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#contact">
                {t.ui.startProject}
                <ArrowUpRight size={13} />
              </a>
              {/* <a className="btn btn--ghost" href="#showreel">
                <Play size={13} />
                {t.hero.secondary}
                <span className="btn__meta">{t.hero.secondaryMeta}</span>
              </a> */}
            </div>
          </div>

          <ul className="hero__meta">
            {t.hero.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <a className="hero__scroll" href="#showreel">
          <span>{t.ui.scroll}</span>
          <span className="hero__scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
