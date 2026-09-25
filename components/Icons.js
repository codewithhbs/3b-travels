// Brand line icons (from identity PDF) rendered via CSS mask so they take `color`.
export function ServiceIcon({ name, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`svc-icon ${className}`}
      style={{ WebkitMaskImage: `url(/brand/icons/${name}.svg)`, maskImage: `url(/brand/icons/${name}.svg)` }}
    />
  );
}

export function ArrowUpRight({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 18 18 6M8 6h10v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="m12 2.5 2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1l-5.9 3.2 1.3-6.5L2.5 9.3l6.6-.8z" />
    </svg>
  );
}

export function Chevron({ dir = "right", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"
      style={{ transform: dir === "left" ? "rotate(180deg)" : undefined }}>
      <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Person + speech bubble, same line style as the brand icons
export function ChatIllustration({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 300 220" fill="none" aria-hidden="true">
      <g stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="100" y="8" width="190" height="130" rx="14" />
        <path d="M150 138 128 176l40-38" />
        <path d="M122 38h144M122 60h144M122 82h144M122 104h56" />
        <circle cx="42" cy="136" r="16" />
        <path d="M18 216v-38a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v38M4 216h88" />
      </g>
    </svg>
  );
}
