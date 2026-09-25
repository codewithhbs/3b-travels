import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import QuerySection from "@/components/QuerySection";
import { ArrowUpRight, Star } from "@/components/Icons";
import { destinations, getDestination } from "@/lib/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return {
    title: `${d.name} Tour Package, ${d.duration}`,
    description: `${d.tagline} ${d.duration} ${d.name} trip by 3B Travels. Best time: ${d.bestTime}.`,
    openGraph: { images: [d.hero || d.img] },
  };
}

const I = ({ children }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const icons = {
  duration: <I><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></I>,
  best: <I><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></I>,
  visa: <I><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="10" r="3" /><path d="M8 17h8" /></I>,
  ideal: <I><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 4a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6" /></I>,
};
const Check = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>
);
const Cross = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
);

export default async function DestinationPage({ params }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const more = [
    ...destinations.filter((x) => x.slug !== d.slug && x.region === d.region),
    ...destinations.filter((x) => x.slug !== d.slug && x.region !== d.region),
  ].slice(0, 6);

  const facts = [
    { k: "duration", label: "Duration", v: d.duration },
    { k: "best", label: "Best time to visit", v: d.bestTime },
    { k: "visa", label: d.region === "india" ? "Permits" : "Visa", v: d.visa },
    { k: "ideal", label: "Ideal for", v: d.idealFor },
  ];

  return (
    <main>
      <section className="dest-hero">
        <Image src={d.hero || d.img} alt="" fill priority sizes="100vw" className="dest-hero-img" />
        <div className="dest-hero-shade" />
        <Header />
        <div className="container dest-hero-body">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/destinations">Destinations</Link><span>/</span>
            <span aria-current="page">{d.name}</span>
          </nav>
          <span className="pkg-badge static"><Star />{d.duration}</span>
          <h1>{d.name}</h1>
          <p>{d.tagline}</p>
          <Link href="#query" className="pill-cta">
            <span className="pill pill-teal">Enquire for {d.name}</span>
            <span className="circle-btn"><ArrowUpRight /></span>
          </Link>
        </div>
      </section>

      <section className="container facts" aria-label="Trip facts">
        {facts.map((f) => (
          <div className="fact" key={f.k}>
            <span className="fact-ico">{icons[f.k]}</span>
            <div>
              <h3>{f.label}</h3>
              <p>{f.v}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="section dest-overview">
        <div className="container overview-grid">
          <div>
            <h2 className="section-title sm">About {d.name}</h2>
            <p className="lead">{d.overview}</p>
          </div>
          <div className="highlights">
            <h3>Trip highlights</h3>
            <ul>
              {d.highlights.map((h) => <li key={h}><span className="tick"><Check /></span>{h}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section dest-itinerary">
        <div className="container narrow">
          <h2 className="section-title sm center">Day-by-day plan</h2>
          <ol className="timeline">
            {d.itinerary.map((day, i) => (
              <li key={day.t}>
                <details open={i === 0}>
                  <summary>
                    <span className="day">Day {i + 1}</span>
                    <span className="day-title">{day.t}</span>
                    <span className="chev" aria-hidden="true" />
                  </summary>
                  <p>{day.d}</p>
                </details>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section dest-incl">
        <div className="container incl-grid">
          <div className="incl-card">
            <h3>What's included</h3>
            <ul>{d.inclusions.map((x) => <li key={x}><span className="tick"><Check /></span>{x}</li>)}</ul>
          </div>
          <div className="incl-card excl">
            <h3>Not included</h3>
            <ul>{d.exclusions.map((x) => <li key={x}><span className="tick"><Cross /></span>{x}</li>)}</ul>
          </div>
        </div>
        <p className="container note">Itinerary and inclusions can be changed to suit you. Prices depend on dates, hotels and group size, so we share a quote after your query.</p>
      </section>

      <section className="section more-dest" aria-label="More destinations">
        <div className="container more-head">
          <h2 className="section-title sm">More destinations</h2>
          <Link href="/destinations" className="pill-cta">
            <span className="pill pill-navy">View all</span>
            <span className="circle-btn dark"><ArrowUpRight /></span>
          </Link>
        </div>
        <div className="track tour-track">
          {more.map((t) => (
            <Link href={`/destinations/${t.slug}`} className="tour-card small" key={t.slug}>
              <Image src={t.img} alt={t.name} fill sizes="(max-width: 640px) 80vw, 380px" />
              <span className="tour-name">{t.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <QuerySection full title={`Plan your ${d.name} trip`} destination={d.name} />
    </main>
  );
}
