import Header from "./Header";
import Sparkles from "./Sparkles";

const stars = [
  { x: "12%", y: "38%", s: 30 }, { x: "7%", y: "62%", s: 16 }, { x: "86%", y: "34%", s: 34 },
  { x: "92%", y: "70%", s: 16 }, { x: "34%", y: "80%", s: 14 },
];

// Short gradient hero for inner pages (About / Contact)
export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero grad-bg">
      <div className="hero-arc arc-left" /><div className="hero-arc arc-right" />
      <Sparkles items={stars} />
      <Header />
      <div className="container page-hero-body">
        {eyebrow && <span className="pill pill-teal">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
