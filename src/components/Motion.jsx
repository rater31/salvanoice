import { useLang } from '../context/LanguageContext.jsx';
import { motion } from '../data/projects.js';
import AutoplayVideo from './AutoplayVideo.jsx';
import { Play } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function Motion({ onPlay }) {
  const { t, pick } = useLang();

  return (
    <section className="motion" id="motion" aria-labelledby="motion-title">
      <div className="shell">
        <Reveal className="motion__head">
          <h2 className="motion__display" id="motion-title">
            {t.motion.label}
          </h2>
          <div className="motion__intro">
            <p className="motion__title">{t.motion.title}</p>
            <p className="motion__desc">{t.motion.desc}</p>
          </div>
        </Reveal>

        <div className="motion__grid">
          {motion.map((item, index) => {
            const title = pick(item.title);

            return (
              <Reveal key={item.id} delay={index * 60}>
                <article className="motion-card">
                  <button
                    className="motion-card__media"
                    type="button"
                    onClick={() =>
                      onPlay({
                        video: item.video,
                        poster: item.poster,
                        title,
                        meta: [item.platform, item.format, item.duration, pick(item.scope)].join(' · '),
                        ratio: '9 / 16',
                        vertical: true,
                      })
                    }
                    aria-label={`${t.work.play}: ${title} — ${item.platform} ${item.duration}`}
                  >
                    <img
                      src={item.poster}
                      alt={`${title} — ${t.ui.still}`}
                      width="720"
                      height="1280"
                      loading="lazy"
                      decoding="async"
                    />
                    <AutoplayVideo src={item.video} poster={item.poster} width="720" height="1280" />
                    <span className="reel__play" aria-hidden="true">
                      <Play size={16} />
                    </span>
                    <span className="reel__time">{item.duration}</span>
                  </button>

                  <div className="motion-card__cap">
                    <h3>{title}</h3>
                    <p>
                      {item.platform} · {item.format}
                    </p>
                    <p>{pick(item.scope)}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="motion__note">{t.motion.note}</p>
      </div>
    </section>
  );
}
