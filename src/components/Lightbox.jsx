import { useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext.jsx';
import { Close } from './Icons.jsx';

export default function Lightbox({ active, onClose }) {
  const { t } = useLang();
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;

    const previous = document.activeElement;
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const nodes = panelRef.current?.querySelectorAll(
        'button, [href], video, [tabindex]:not([tabindex="-1"])'
      );
      if (!nodes || nodes.length === 0) return;

      const focusable = Array.from(nodes).filter((node) => !node.disabled);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    document.documentElement.classList.add('no-scroll');

    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('no-scroll');
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [active, onClose]);

  if (!active) return null;

  return (
    <div
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label={active.title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="lb__panel" ref={panelRef}>
        <div className="lb__bar">
          <div className="lb__titles">
            <strong>{active.title}</strong>
            {active.meta ? <span>{active.meta}</span> : null}
          </div>
          <button
            ref={closeRef}
            className="lb__close"
            type="button"
            onClick={onClose}
            aria-label={t.lightbox.close}
          >
            <Close size={18} />
          </button>
        </div>

        <div
          className="lb__video"
          data-vertical={active.vertical ? 'true' : undefined}
          style={{ aspectRatio: active.ratio || '16 / 9' }}
        >
          <video
            key={active.video}
            src={active.video}
            poster={active.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </div>
  );
}
