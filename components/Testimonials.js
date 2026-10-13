"use client";
import { useEffect, useRef } from "react";
import { testimonials } from "@/lib/data";
import { Star, Chevron } from "./Icons";
import Dots from "./Dots";
import useScrollTrack from "./useScrollTrack";

export default function Testimonials() {
  const n = testimonials.length;
  const { ref, active, go } = useScrollTrack(n);
  const paused = useRef(false);
  const cur = useRef(0);
  cur.current = active;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => { if (!paused.current) go((cur.current + 1) % n); }, 5000);
    return () => clearInterval(t);
  }, [go, n]);

  return (
    <section className="section testi" aria-roledescription="carousel" aria-label="Testimonials"
      onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}>
      <div className="container">
        <h2 className="section-title center">What our travellers say</h2>
        <div className="testi-wrap">
          <div className="testi-track" ref={ref}>
            {testimonials.map((t, i) => (
              <figure className="testi-card" key={i}>
                <div className="testi-stars" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((k) => <Star key={k} size={20} />)}</div>
                <blockquote>{t.text}</blockquote>
                <figcaption><strong>{t.name}</strong><span>{t.trip}</span></figcaption>
              </figure>
            ))}
          </div>
          <button className="testi-arrow prev" aria-label="Previous testimonial" onClick={() => go((active - 1 + n) % n)}><Chevron dir="left" /></button>
          <button className="testi-arrow next" aria-label="Next testimonial" onClick={() => go((active + 1) % n)}><Chevron /></button>
        </div>
        <Dots count={n} active={active} onSelect={go} label="testimonial" />
      </div>
    </section>
  );
}
