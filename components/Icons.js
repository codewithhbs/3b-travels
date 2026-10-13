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

export function SocialIcon({ name, size = 22 }) {
  const d = {
    instagram: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.3-3.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
    facebook: "M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7H17V3.9S15.8 3.7 14.7 3.7c-2.6 0-4.2 1.5-4.2 4.3v2.5H7.7v3.3h2.8V22h3Z",
    linkedin: "M4.5 9h3.9v12H4.5V9Zm1.9-5.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM10.8 9h3.7v1.7h.1c.5-1 1.8-2 3.7-2 3.9 0 4.6 2.5 4.6 5.8V21h-3.9v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-3.9V9Z",
  }[name];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d={d} /></svg>
  );
}
