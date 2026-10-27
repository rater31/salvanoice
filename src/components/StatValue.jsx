import { useEffect, useRef, useState } from 'react';

const reduceMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Counts up the numeric part of a stat the first time it enters the viewport.
 * Values with a range (48–72h) render as-is. Reduced motion shows the final
 * value immediately.
 */
export default function StatValue({ value }) {
  const ref = useRef(null);
  const started = useRef(false);
  const initial = String(value);

  const match = /^(\d+)(\D*)$/.exec(initial);
  const animate = Boolean(match) && !/[–—-]/.test(initial);
  const target = animate ? Number(match[1]) : 0;
  const suffix = animate ? match[2] : '';
  const [display, setDisplay] = useState(initial);

  useEffect(() => {
    setDisplay(initial);
    started.current = false;
  }, [initial]);

  useEffect(() => {
    const el = ref.current;
    if (!animate || !el || reduceMotion() || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const duration = 1100;
        const begin = performance.now();
        setDisplay(`0${suffix}`);

        const tick = (now) => {
          const progress = Math.min(1, (now - begin) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${Math.round(target * eased)}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate, target, suffix]);

  return (
    <span className="stat__value" ref={ref}>
      {display}
    </span>
  );
}
