import { useLang } from '../context/LanguageContext.jsx';
import { aboutFacts } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function About() {
  const { t, pick } = useLang();

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="shell about__grid">
        <Reveal className="about__left">
          <p className="eyebrow">{t.about.label}</p>
          <h2 className="about__display" id="about-title">
            {t.about.title}
          </h2>
          <blockquote className="about__quote">{t.about.quote}</blockquote>
        </Reveal>

        <div className="about__right">
          <Reveal className="about__body">
            <p className="about__lead">{t.about.lead}</p>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </Reveal>

          <Reveal delay={80} className="about__facts">
            <p className="eyebrow">{t.about.factsLabel}</p>
            <dl className="facts">
              {aboutFacts.map((fact) => (
                <div className="fact" key={pick(fact.label)}>
                  <dt>{pick(fact.label)}</dt>
                  <dd>{pick(fact.value)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
