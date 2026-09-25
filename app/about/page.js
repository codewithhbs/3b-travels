import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import QuerySection from "@/components/QuerySection";
import { ServiceIcon, ArrowUpRight } from "@/components/Icons";
import { services } from "@/lib/data";

export const metadata = { title: "About Us" };

const serviceText = {
  "hotels": "Handpicked stays, from boutique homestays to five-star resorts, at rates we negotiate for you.",
  "air-tickets": "Domestic and international flights with the best available fares and flexible options.",
  "holiday-tours": "Ready packages and fully custom itineraries across India and abroad.",
  "visa": "Document checklists, appointments and filing support for tourist and business visas.",
  "insurance": "Travel insurance that covers medical emergencies, delays and lost baggage.",
  "car-rental": "Chauffeur-driven cars and airport transfers wherever your trip takes you.",
  "mice": "Meetings, incentives, conferences and events planned end to end for your team.",
};

const steps = [
  { t: "Tell us your plan", d: "Share where you want to go, when, and who's travelling. A rough idea is enough." },
  { t: "Get a curated itinerary", d: "Our travel expert sends a day-by-day plan with stays, transfers and a clear price." },
  { t: "Fine-tune it together", d: "Swap hotels, add days or change the pace until the trip feels right." },
  { t: "Travel with support", d: "Tickets, vouchers and a direct contact for help at every step of the journey." },
];

export default function About() {
  return (
    <main>
      <PageHero eyebrow="About Us" title="Travel planned with care"
        text="3B Travels turns your travel dreams into unforgettable realities, with every detail looked after." />

      <section className="section about-intro">
        <div className="container about-grid">
          <div className="about-media">
            <div className="about-img about-img-a"><Image src="/images/ladakh-banner.jpg" alt="Traveller in the Ladakh mountains" fill sizes="(max-width: 900px) 100vw, 560px" /></div>
            <div className="about-img about-img-b"><Image src="/images/highlights-asia.jpg" alt="Boats in a turquoise bay" fill sizes="280px" /></div>
          </div>
          <div className="about-copy">
            <h2 className="section-title">Who we are</h2>
            <p>
              3B Travels stands for <strong>Bed, Breakfast and Broadband</strong>: the three things every traveller needs
              to feel at home anywhere. We started with that simple promise and grew into a complete travel partner for
              families, couples, solo explorers and companies.
            </p>
            <p>
              From a quiet week in Kerala to a visa-free escape in Asia or a team offsite abroad, we plan each trip
              around you. No copy-paste packages, just tours that are curiously curated.
            </p>
            <Link href="/contact#query" className="pill-cta">
              <span className="pill pill-teal">Plan my trip</span>
              <span className="circle-btn"><ArrowUpRight /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section about-services">
        <div className="container">
          <h2 className="section-title center">What we do</h2>
          <div className="svc-grid">
            {services.map((s) => (
              <article key={s.key} className="svc-card">
                <ServiceIcon name={s.key} />
                <h3>{s.label}</h3>
                <p>{serviceText[s.key]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-steps">
        <div className="container">
          <h2 className="section-title center">How we plan your trip</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="step-no">{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <QuerySection />
    </main>
  );
}
