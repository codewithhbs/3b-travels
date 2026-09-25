import Image from "next/image";
import Link from "next/link";
import { popularDestinations } from "@/lib/data";

export default function PopularDestinations() {
  return (
    <section className="section popular" id="destinations">
      <div className="container">
        <h2 className="section-title center">Popular Destinations</h2>
        <div className="popular-grid">
          {popularDestinations.map((d) => (
            <Link href={`/destinations/${d.slug}`} className="dest-card" key={d.name}>
              <Image src={d.img} alt={d.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px" />
              <div className="dest-label">
                <span className="line" />
                <span className="name">{d.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
