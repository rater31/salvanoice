export default function Marquee({ children, className = '', duration = 42, reverse = false }) {
  return (
    <div
      className={`marquee ${className}`.trim()}
      style={{ '--marquee-duration': `${duration}s` }}
    >
      <div className={`marquee__track ${reverse ? 'is-reverse' : ''}`.trim()}>
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
