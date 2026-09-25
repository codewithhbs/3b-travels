import Link from "next/link";
import Header from "./Header";
import Sparkles from "./Sparkles";
import { ServiceIcon, ArrowUpRight } from "./Icons";
import { services } from "@/lib/data";

const stars = [
  { x: "11.8%", y: "20%", s: 36 }, { x: "7%", y: "29%", s: 18 }, { x: "34.4%", y: "25.5%", s: 20 },
  { x: "62%", y: "39%", s: 36 }, { x: "96%", y: "34%", s: 36 }, { x: "92.5%", y: "42%", s: 18 },
  { x: "6.2%", y: "81%", s: 36 }, { x: "12%", y: "89%", s: 18 },
];

export default function HomeHero() {
  return (
    <section className="home-hero grad-bg">
      <div className="hero-arc arc-left" /><div className="hero-arc arc-right" />
      <Sparkles items={stars} />
      <Header />

      <div className="container hero-body">
        <span className="pill pill-teal">Travel Solutions</span>
        <h1 className="hero-title">Curiously Curated Tours</h1>

        <ul className="hero-services">
          {services.map((s) => (
            <li key={s.key}>
              <ServiceIcon name={s.key} />
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        <p className="hero-text">
          Escape the ordinary and dive into a world of wanderlust with us,<br className="br-lg" />
          {" "}Our passion is turning your travel dreams into unforgettable realities.
        </p>

        <div className="hero-actions">
          <Link href="/destinations" className="pill pill-white">Explore Tours</Link>
          <Link href="/contact#query" className="pill-cta">
            <span className="pill pill-teal">Get in touch</span>
            <span className="circle-btn"><ArrowUpRight /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
