import { useEffect, useRef, useState } from 'react';
import { site } from '../data/site.js';

const MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Muted, looping inline preview — the way the original Canva page played its
 * pieces. It only mounts/plays while the card is near and inside the viewport,
 * and it never autoplays for reduced-motion or Save-Data visitors. If the
 * browser blocks autoplay, the poster underneath stays visible.
 */
export default function AutoplayVideo({ src, poster, className = '', width, height }) {
  const ref = useRef(null);
  const [eligible, setEligible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [suspended, setSuspended] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (site.media?.autoplayPreviews === false) return undefined;

    const query = window.matchMedia(MOTION_QUERY);
    const connection = navigator.connection;

    const update = () => {
      setEligible(!query.matches && connection?.saveData !== true);
    };

    update();
    query.addEventListener?.('change', update);
    return () => query.removeEventListener?.('change', update);
  }, []);

  // Load the file only when the card approaches the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el || !eligible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setLoaded(true);
      },
      { rootMargin: '240px 0px', threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eligible]);

  // Play while visible, pause as soon as the card leaves the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (eligible && loaded && visible && !suspended && !document.hidden) {
      const promise = el.play();
      if (promise) promise.catch(() => {});
    } else {
      el.pause();
    }
  }, [eligible, loaded, visible, suspended]);

  // Pause behind the lightbox and when the tab is hidden.
  useEffect(() => {
    const onOpen = () => setSuspended(true);
    const onClose = () => setSuspended(false);
    const onVisibility = () => {
      const el = ref.current;
      if (!el) return;
      if (document.hidden) {
        el.pause();
      } else if (eligible && loaded && visible && !suspended) {
        const promise = el.play();
        if (promise) promise.catch(() => {});
      }
    };

    window.addEventListener('salvanoise:lightbox-open', onOpen);
    window.addEventListener('salvanoise:lightbox-close', onClose);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('salvanoise:lightbox-open', onOpen);
      window.removeEventListener('salvanoise:lightbox-close', onClose);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [eligible, loaded, visible, suspended]);

  return (
    <video
      ref={ref}
      className={`media-video${playing ? ' is-playing' : ''}${className ? ` ${className}` : ''}`}
      src={loaded ? src : undefined}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
      onPlaying={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
    />
  );
}
