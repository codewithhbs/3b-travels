"use client";
export default function Dots({ count, active, onSelect, label = "slide" }) {
  return (
    <div className="dots" role="tablist">
      {Array.from({ length: count }).map((_, i) => (
        <button key={i} role="tab" aria-selected={i === active} aria-label={`Go to ${label} ${i + 1}`}
          className={i === active ? "dot active" : "dot"} onClick={() => onSelect(i)} />
      ))}
    </div>
  );
}
