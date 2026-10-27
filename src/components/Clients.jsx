import { useLang } from '../context/LanguageContext.jsx';
import { clients } from '../data/projects.js';
import Reveal from './Reveal.jsx';
import StatValue from './StatValue.jsx';

const rows = [clients.slice(0, 4), clients.slice(4)];

export default function Clients() {
  const { t, pick } = useLang();

  return (
    <section className="clients" id="clients" aria-labelledby="clients-title">
      <div className="shell">
        <Reveal className="clients__head">
          <p className="eyebrow eyebrow--center">{t.clients.label}</p>
          <h2 id="clients-title">{t.clients.title}</h2>
          <p className="clients__note">{t.clients.note}</p>
        </Reveal>

        <div className="clients__wall">
          {rows.map((row, rowIndex) => (
            <Reveal
              as="ul"
              className={`client-row client-row--${rowIndex === 0 ? 'a' : 'b'}`}
              key={rowIndex}
              delay={rowIndex * 70}
            >
              {row.map((client, index) => (
                <li className="client" key={client.id} style={{ '--i': index }}>
                  <span className="client__img">
                    <img
                      src={client.src}
                      alt=""
                      width="320"
                      height="320"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="client__name">{client.name}</span>
                  <span className="client__cat">{pick(client.category)}</span>
                </li>
              ))}
            </Reveal>
          ))}
        </div>

        <Reveal className="stats">
          {t.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <StatValue value={stat.value} />
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </Reveal>

        <p className="clients__proof">{t.clients.proof}</p>
      </div>
    </section>
  );
}
