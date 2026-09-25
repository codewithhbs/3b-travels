"use client";
import Image from "next/image";
import Link from "next/link";
import { tours } from "@/lib/data";
import { Chevron } from "./Icons";
import useScrollTrack from "./useScrollTrack";

export default function TourCarousel() {
  const { ref, active, go } = useScrollTrack(tours.length);
  return (
    <section className="section tours" aria-label="Featured tours">
      <div className="tour-wrap">
        <div className="track tour-track" ref={ref}>
          {tours.map((t) => (
            <Link href={`/destinations/${t.slug}`} className="tour-card" key={t.slug}>
              <Image src={t.img} alt={t.name} fill sizes="(max-width: 640px) 85vw, 565px" />
              <span className="tour-name">{t.name}</span>
            </Link>
          ))}
        </div>
        {active > 0 && (
          <button className="track-arrow prev" aria-label="Previous tours" onClick={() => go(active - 1)}>
            <Chevron dir="left" />
          </button>
        )}
        {active < tours.length - 1 && (
          <button className="track-arrow next" aria-label="Next tours" onClick={() => go(active + 1)}>
            <Chevron />
          </button>
        )}
      </div>
    </section>
  );
}
