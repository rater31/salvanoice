import { useLang } from '../context/LanguageContext.jsx';
import { films } from '../data/projects.js';
import { ArrowUpRight } from './Icons.jsx';
import Reveal from './Reveal.jsx';

const sizes = {
  'film-01': [800, 450],
  'film-02': [800, 450],
  'film-03': [800, 450],
  'film-04': [800, 600],
  'film-05': [800, 800],
};

const normalize = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

function FilmCard({ film, index }) {
  const { t, pick } = useLang();
  const title = pick(film.title);
  const [width, height] = sizes[film.id];
  const showOriginal = normalize(title) !== normalize(film.original);

  return (
    <Reveal
      as="li"
      className={`film${film.id === 'film-05' ? ' film--square' : ''}`}
      delay={index * 45}
    >
      <a
        className="film__link"
        href={film.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.films.watch}: ${title} (${t.ui.external})`}
      >
        <span className="film__media">
          <img
            src={film.poster}
            alt={`${title} — ${film.platform}`}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
          />
          <span className="film__overlay">
            {showOriginal ? <span className="film__original">{film.original}</span> : null}
            <strong className="film__title">{title}</strong>
            <span className="film__role">
              <b>{t.films.role}:</b> {pick(film.role)}
            </span>
          </span>
          <span className="film__ext" aria-hidden="true">
            <ArrowUpRight size={14} />
          </span>
        </span>
      </a>
    </Reveal>
  );
}

export default function ShortFilms() {
  const { t } = useLang();

  return (
    <section className="films" id="films" aria-labelledby="films-title">
      <div className="shell">
        <Reveal className="films__head">
          <h2 className="films__display" id="films-title">
            {t.films.label}
          </h2>
          <div className="films__intro">
            <p className="films__title">{t.films.title}</p>
            <p className="films__desc">{t.films.desc}</p>
          </div>
        </Reveal>

        <div className="films__collage">
          <ul className="films__row films__row--a">
            {films.slice(0, 3).map((film, index) => (
              <FilmCard film={film} index={index} key={film.id} />
            ))}
          </ul>
          <ul className="films__row films__row--b">
            {films.slice(3).map((film, index) => (
              <FilmCard film={film} index={index + 3} key={film.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
