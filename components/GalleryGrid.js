"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery } from "@/lib/data";

export default function GalleryGrid() {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    if (open === null) return;
    const k = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  const g = open !== null ? gallery[open] : null;
  return (
    <>
      <div className="gal-grid">
        {gallery.map((g, i) => (
          <button key={g.src} className="gal-item" onClick={() => setOpen(i)} aria-label={`Open ${g.alt}`}>
            <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 400px" />
          </button>
        ))}
      </div>
      {g && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button className="lb-close" aria-label="Close" onClick={() => setOpen(null)}>×</button>
          <button className="lb-nav lb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + gallery.length) % gallery.length); }}>‹</button>
          <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="90vw" onClick={(e) => e.stopPropagation()} />
          <button className="lb-nav lb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % gallery.length); }}>›</button>
        </div>
      )}
    </>
  );
}
