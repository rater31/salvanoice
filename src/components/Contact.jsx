import { useLang } from '../context/LanguageContext.jsx';
import { bookingHref, emailHref, site, whatsappHref } from '../data/site.js';
import { contactMedia, contactPhoto } from '../data/projects.js';
import AutoplayVideo from './AutoplayVideo.jsx';
import { ArrowUpRight, Play } from './Icons.jsx';
import Reveal from './Reveal.jsx';

const isExternal = (url) => url.startsWith('http');

export default function Contact({ onPlay }) {
  const { t, lang, pick } = useLang();
  const mediaTitle = pick(contactMedia.title);

  const openMedia = () =>
    onPlay({
      video: contactMedia.video,
      poster: contactMedia.poster,
      title: mediaTitle,
      meta: `Vimeo · 16:9 · ${contactMedia.duration}`,
      ratio: '16 / 9',
    });

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="shell">
        <Reveal className="contact__head">
          <div className="contact__status">
            <span className="dot" aria-hidden="true" />
            {t.contact.availability}
          </div>
          <h2 className="contact__display" id="contact-title">
            {t.contact.title}
          </h2>
          <p className="contact__desc">{t.contact.desc}</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__aside">
            <img
              className="contact__photo"
              src={contactPhoto}
              alt={site.owner}
              width="500"
              height="500"
              loading="lazy"
              decoding="async"
            />

            <div className="contact__actions">
              <a className="contact__action" href={emailHref}>
                <span className="contact__action-copy">
                  <small>{t.contact.email}</small>
                  <strong>{site.email}</strong>
                </span>
                <ArrowUpRight size={14} />
              </a>

              <a className="contact__action" href={whatsappHref}>
                <span className="contact__action-copy">
                  <small>{t.contact.whatsapp}</small>
                  <strong>WhatsApp</strong>
                </span>
                <ArrowUpRight size={14} />
              </a>

              <a className="contact__action" href={bookingHref}>
                <span className="contact__action-copy">
                  <small>{t.contact.book}</small>
                  <strong>15 min</strong>
                </span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <dl className="contact__details">
              {t.contact.details.map((detail) => (
                <div className="contact__detail" key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>

            <div className="contact__socials">
              <p className="eyebrow">{t.contact.socialsLabel}</p>
              <ul className="contact__social-list">
                {site.socials.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target={isExternal(social.url) ? '_blank' : undefined}
                      rel={isExternal(social.url) ? 'noopener noreferrer' : undefined}
                    >
                      <span className="contact__social-name">{social.label}</span>
                      <span className="contact__social-handle">
                        {typeof social.handle === 'string' ? social.handle : pick(social.handle)}
                      </span>
                      <ArrowUpRight size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="contact__media" delay={90}>
            <button
              className="contact__video"
              type="button"
              onClick={openMedia}
              aria-label={`${t.work.play}: ${mediaTitle} — ${contactMedia.duration}`}
            >
              <img
                src={contactMedia.poster}
                alt={`${mediaTitle} — ${t.ui.still}`}
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
              />
              <AutoplayVideo
                src={contactMedia.video}
                poster={contactMedia.poster}
                width="1280"
                height="720"
              />
              <span className="play-badge" aria-hidden="true">
                <span>
                  <Play size={22} />
                </span>
              </span>
              <span className="contact__video-cap">
                <span>{mediaTitle}</span>
                <span>{contactMedia.duration}</span>
              </span>
            </button>

            <p className="contact__media-note">{t.contact.mediaLabel}</p>

            <p className="contact__signature">
              <span>{t.contact.signature}</span>
              <span>{site.role[lang]}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
