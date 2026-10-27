import { useLang } from '../context/LanguageContext.jsx';
import { documentaries, podcasts, reels } from '../data/projects.js';
import AutoplayVideo from './AutoplayVideo.jsx';
import { Play } from './Icons.jsx';
import Reveal from './Reveal.jsx';

function ReelCard({ item, onPlay, index }) {
  const { t, pick } = useLang();
  const title = pick(item.title);

  const open = () =>
    onPlay({
      video: item.video,
      poster: item.poster,
      title,
      meta: [item.platform, item.format, item.duration, pick(item.scope)].join(' · '),
      ratio: '9 / 16',
      vertical: true,
    });

  return (
    <Reveal as="li" className="reel" delay={index * 45}>
      <button
        className="reel__media"
        type="button"
        onClick={open}
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

      <div className="reel__cap">
        <h4 className="reel__title">{title}</h4>
        <p className="reel__meta">
          {item.platform} · {item.format}
        </p>
        <p className="reel__scope">{pick(item.scope)}</p>
      </div>
    </Reveal>
  );
}

function DocCard({ item, onPlay, index }) {
  const { t, pick } = useLang();
  const title = pick(item.title);

  const open = () =>
    onPlay({
      video: item.video,
      poster: item.poster,
      title,
      meta: [item.platform, item.format, item.duration, pick(item.scope)].join(' · '),
      ratio: '16 / 9',
    });

  return (
    <Reveal as="li" className="doc" delay={index * 70}>
      <button
        className="doc__media"
        type="button"
        onClick={open}
        aria-label={`${t.work.play}: ${title} — ${item.platform} ${item.duration}`}
      >
        <img
          src={item.poster}
          alt={`${title} — ${t.ui.still}`}
          width="1280"
          height="720"
          loading="lazy"
          decoding="async"
        />
        <AutoplayVideo src={item.video} poster={item.poster} width="1280" height="720" />
        <span className="doc__play" aria-hidden="true">
          <Play size={18} />
        </span>
        <span className="doc__time">{item.duration}</span>
      </button>

      <div className="doc__body">
        <div className="doc__lead">
          <h4>{title}</h4>
          <p className="doc__meta">
            {item.platform} · {item.format} · {item.duration} · {item.year}
          </p>
          <p className="doc__scope">{pick(item.scope)}</p>
        </div>
        <p className="doc__context">{pick(item.context)}</p>
      </div>
    </Reveal>
  );
}

function GroupHead({ id, label, intro, meta }) {
  return (
    <Reveal className="group__head">
      <h3 className="group__title" id={id}>
        {label}
      </h3>
      <div className="group__aside">
        <p>{intro}</p>
        <span className="group__meta">{meta}</span>
      </div>
    </Reveal>
  );
}

export default function Work({ onPlay }) {
  const { t } = useLang();

  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="shell">
        <Reveal className="work__masthead">
          <h2 className="work__display" id="work-title">
            {t.work.label}
          </h2>
          <div className="work__intro">
            <p className="work__title">{t.work.title}</p>
            <p className="work__desc">{t.work.desc}</p>
          </div>
        </Reveal>

        <div className="work-group" aria-labelledby="group-reels">
          <GroupHead
            id="group-reels"
            label={t.work.reelsLabel}
            intro={t.work.reelsIntro}
            meta={t.work.reelMeta}
          />
          <ul className="reels">
            {reels.map((item, index) => (
              <ReelCard item={item} onPlay={onPlay} index={index} key={item.id} />
            ))}
          </ul>
        </div>

        <div className="work-group" aria-labelledby="group-podcasts">
          <GroupHead
            id="group-podcasts"
            label={t.work.podcastsLabel}
            intro={t.work.podcastsIntro}
            meta={t.work.podcastMeta}
          />
          <ul className="reels reels--offset">
            {podcasts.map((item, index) => (
              <ReelCard item={item} onPlay={onPlay} index={index} key={item.id} />
            ))}
          </ul>
        </div>

        <div className="work-group" aria-labelledby="group-docs">
          <GroupHead
            id="group-docs"
            label={t.work.docsLabel}
            intro={t.work.docsIntro}
            meta={t.work.docMeta}
          />
          <ul className="docs">
            {documentaries.map((item, index) => (
              <DocCard item={item} onPlay={onPlay} index={index} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
