import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import QuerySection from "@/components/QuerySection";
import { ServiceIcon, ArrowUpRight } from "@/components/Icons";
import { services, socials, site } from "@/lib/data";
import { SocialIcon } from "@/components/Icons";

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

const founderStats = [
  { n: "1999", k: "Career began" },
  { n: "2 decades", k: "Hotels & Travel" },
  { n: "2017", k: "3B Travels founded" },
];

const journey = [
  { y: "1999", t: "Where it began", d: "Began my career with Park Royal, then worked with finer properties and brands like Grand Hyatt, Hyatt Regency, Imperial Hotel and Radisson Mahipalpur." },
  { y: "Beyond hotels", t: "Travel & logistics", d: "Explored opportunities at Kuoni, Sita Travels (Logistics Manager) and LPTI." },
  { y: "2017", t: "3B Travels is born", d: "With the change of management at LPTI, I could either look for a new job or become an entrepreneur. I took on the latter and started 3B Travels." },
  { y: "Nathua Khan", t: "Hospitality in the hills", d: "Always up for new challenges, I managed a resort in Nathua Khan, a small village in the foothills of the Panchachuli peaks in Uttarakhand, to create employment and learning opportunities and drive a culture of hospitality among the locals." },
];

const favourites = ["Ladakh", "Sikkim", "Darjeeling", "Uttarakhand", "Jungles of Madhya Pradesh"];

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

      <section className="section founder">
        <div className="container founder-grid">
          <div className="founder-img"><Image src="/images/kunal-mehra.jpg" alt="Kunal Mehra, founder of 3B Travels, with his Triumph Tiger 900" fill sizes="(max-width: 900px) 100vw, 520px" /></div>
          <div className="about-copy">
            <span className="pill pill-teal">Meet the Founder</span>
            <h2 className="section-title">Kunal Mehra</h2>
            <p className="founder-role">Founder, 3B Travels</p>
            <p className="founder-lead">I am an explorer, a passionate traveller and someone who has seen life from both ends of the spectrum. The only question on my mind is “Where to next?” I am a thrill-seeker, always in the midst of planning my next trip.</p>

            <ul className="founder-stats">
              {founderStats.map((x) => (
                <li key={x.k}><strong>{x.n}</strong><span>{x.k}</span></li>
              ))}
            </ul>

            <ol className="journey">
              {journey.map((j) => (
                <li key={j.t}>
                  <span className="journey-y">{j.y}</span>
                  <h3>{j.t}</h3>
                  <p>{j.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="container founder-more">
          <article className="fcard">
            <h3>My philosophy</h3>
            <p>I am grateful for all that life has given me, and I look at what I can do rather than what I can’t. When life gives you lemons, make lemonade and enjoy. The pandemic had its downside, but I used that time to focus on my mental wellness and came out stronger.</p>
            <p>I follow Sadhguru’s philosophy and try to bring some of it into my life. I am a yoga freak and practise it for self-discipline and motivation.</p>
          </article>
          <article className="fcard">
            <h3>Where I have travelled</h3>
            <p>I have travelled almost all of India. My favourites:</p>
            <ul className="chips">
              {favourites.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <p>I have also explored all South East Asian countries, the UAE, Bhutan, Sri Lanka and parts of Europe, learning from their rich cultural heritage.</p>
          </article>
          <article className="fcard">
            <h3>How I work</h3>
            <p>I believe that when you work in areas of your passion and interest, you reach greater heights.</p>
            <p>My strategy is a happy customer experience and a long-lasting, trust-based relationship. With two decades in hotels and travel, I want to create lifelong memories and a great travel experience for my high-profile clients.</p>
          </article>
        </div>

        <div className="container">
          <div className="founder-close">
            <p className="founder-quote">“My experiences of travelling the world have been ecstatic and breath-taking, and I aspire to share them with the world through the services I provide.”</p>
            <div className="founder-reach">
              <span>Please reach me at</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href="tel:+919953300005">+91 99533 00005</a>
            </div>
            <div className="founder-links">
              {socials.map((x) => (<a key={x.key} href={x.href} target="_blank" rel="noopener noreferrer" aria-label={x.label}><SocialIcon name={x.key} /></a>))}
            </div>
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
