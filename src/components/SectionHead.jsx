import Reveal from './Reveal.jsx';

export default function SectionHead({ index, label, title, desc, id }) {
  return (
    <Reveal className="shead">
      <div className="label">
        {index ? <span className="label__index">{index}</span> : null}
        <span>{label}</span>
      </div>
      <div className="shead__row">
        <h2 id={id}>{title}</h2>
        {desc ? <p>{desc}</p> : null}
      </div>
    </Reveal>
  );
}
