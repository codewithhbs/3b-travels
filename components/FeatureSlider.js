"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { featureSlides } from "@/lib/data";
import Dots from "./Dots";

export default function FeatureSlider() {
  const [i, setI] = useState(0);
  const paused = useRef(false);
  const n = featureSlides.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => { if (!paused.current) setI((v) => (v + 1) % n); }, 5500);
    return () => clearInterval(t);
  }, [n]);

  return (
    <section className="section feature" aria-roledescription="carousel"
      onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}>
      <div className="container">
        <div className="feature-frame">
          {featureSlides.map((s, k) => (
            <div key={s.title} className={`feature-slide ${k === i ? "is-active" : ""}`} aria-hidden={k !== i}>
              <Image src={s.img} alt="" fill priority={k === 0} sizes="(max-width: 1240px) 100vw, 1200px" />
              <div className="feature-shade" />
              <div className="feature-body">
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
          <Link href={`/destinations/${featureSlides[i].slug}`} className="feature-link" aria-label={featureSlides[i].title} />
          <img className="feature-logo" src="/brand/logo-white-notagline.svg" alt="" />
        </div>
        <Dots count={n} active={i} onSelect={setI} />
      </div>
    </section>
  );
}
