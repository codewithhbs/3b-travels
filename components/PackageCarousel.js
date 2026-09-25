"use client";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/data";
import { Star } from "./Icons";
import Dots from "./Dots";
import useScrollTrack from "./useScrollTrack";

export default function PackageCarousel() {
  const { ref, active, go } = useScrollTrack(packages.length);
  return (
    <section className="section packages" id="tours" aria-label="Tour packages">
      <div className="track pkg-track" ref={ref}>
        {packages.map((p) => (
          <Link href={`/destinations/${p.slug}`} className="pkg-card" key={p.slug}>
            <div className="pkg-media">
              <Image src={p.img} alt={p.name} fill sizes="380px" />
              <span className="pkg-name">{p.name}</span>
            </div>
            <span className="pkg-badge"><Star />{p.duration}</span>
          </Link>
        ))}
      </div>
      <Dots count={packages.length} active={active} onSelect={go} label="package" />
    </section>
  );
}
