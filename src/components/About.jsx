import { useLang } from '../context/LanguageContext.jsx';
import { aboutFacts } from '../data/content.js';
import { contactPhoto } from '../data/projects.js';
import { site } from '../data/site.js';
import Reveal from './Reveal.jsx';

const tools = [
  { name: 'Adobe Premiere Pro', label: 'Pr', bg: '#00005b', fg: '#9999ff' },
  { name: 'Adobe Photoshop', label: 'Ps', bg: '#001e36', fg: '#31a8ff' },
  {
    name: 'Adobe Creative Cloud',
    bg: '#da1f26',
    glyph: (
      <path
        d="M19 33a7 7 0 0 1-.6-13.97A9 9 0 0 1 35.6 22 5.5 5.5 0 0 1 33 33Z"
        fill="none"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
    ),
  },
  { name: 'Adobe After Effects', label: 'Ae', bg: '#00005b', fg: '#d291ff' },
];

export default function About() {
  const { t, pick } = useLang();

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="shell about__grid">
        <Reveal className="about__left">
          <img
            className="about__photo"
            src={contactPhoto}
            alt={site.owner}
            width="500"
            height="500"
            loading="lazy"
            decoding="async"
          />
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

          <Reveal delay={120} className="about__tools">
            <ul className="tools">
              {tools.map((tool) => (
                <li className="tool" key={tool.name} title={tool.name}>
                  <svg viewBox="0 0 48 48" role="img" aria-label={tool.name}>
                    <rect width="48" height="48" rx="10" fill={tool.bg} />
                    {tool.glyph ?? (
                      <text
                        x="24"
                        y="31"
                        textAnchor="middle"
                        fill={tool.fg}
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="20"
                        fontWeight="700"
                      >
                        {tool.label}
                      </text>
                    )}
                  </svg>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
