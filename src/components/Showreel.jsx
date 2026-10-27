import { useLang } from '../context/LanguageContext.jsx';
import { showreel } from '../data/projects.js';
import AutoplayVideo from './AutoplayVideo.jsx';
import { Play } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function Showreel({ onPlay }) {
  const { t } = useLang();

  const open = () =>
    onPlay({
      video: showreel.video,
      poster: showreel.poster,
      title: t.showreel.title,
      meta: t.showreel.meta,
      ratio: showreel.ratio,
      vertical: true,
    });

  return (
    <section className="showreel" id="showreel" aria-labelledby="showreel-title">
      <div className="shell showreel__grid">
        <Reveal className="showreel__copy">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" />
            {t.showreel.label}
          </p>
          <h2 id="showreel-title">{t.showreel.title}</h2>
          <p className="showreel__desc">{t.showreel.desc}</p>

          <ul className="showreel__inside">
            {t.showreel.inside.split(' · ').map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="showreel__actions">
            <button className="btn btn--solid" type="button" onClick={open}>
              <Play size={14} />
              {t.showreel.play}
            </button>
            <span className="showreel__meta">{t.showreel.meta}</span>
          </div>

          <p className="showreel__note">{t.showreel.note}</p>
        </Reveal>

        <Reveal className="showreel__visual" delay={90}>
          <button
            className="showreel__frame"
            type="button"
            onClick={open}
            aria-label={`${t.showreel.play} — ${t.showreel.meta}`}
          >
            <img
              src={showreel.poster}
              alt={`${t.showreel.title} — ${t.ui.still}`}
              width="720"
              height="1280"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <AutoplayVideo
              src={showreel.video}
              poster={showreel.poster}
              width="720"
              height="1280"
            />
            <span className="play-badge" aria-hidden="true">
              <span>
                <Play size={24} />
              </span>
            </span>
            <span className="showreel__tag">{t.showreel.meta}</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
