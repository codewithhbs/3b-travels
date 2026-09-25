import PageHero from "@/components/PageHero";
import QuerySection from "@/components/QuerySection";
import { site } from "@/lib/data";

export const metadata = { title: "Contact Us" };

const Ico = ({ d }) => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

export default function Contact() {
  const cards = [
    { t: "Call us", v: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`,
      i: <Ico d={<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />} /> },
    { t: "WhatsApp", v: "Chat with a travel expert", href: `https://wa.me/${site.whatsapp}`,
      i: <Ico d={<><path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" /></>} /> },
    { t: "E-mail", v: site.email, href: `mailto:${site.email}`,
      i: <Ico d={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} /> },
    { t: "Visit us", v: site.address, sub: site.hours,
      i: <Ico d={<><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>} /> },
  ];

  return (
    <main>
      <PageHero eyebrow="Contact Us" title="Let's plan your next trip"
        text="Call, message or send a query. Our travel experts reply within one working day." />

      <section className="section contact-cards">
        <div className="container contact-grid">
          {cards.map((c) => {
            const Tag = c.href ? "a" : "div";
            return (
              <Tag key={c.t} className="contact-card" {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}>
                <span className="contact-ico">{c.i}</span>
                <h3>{c.t}</h3>
                <p>{c.v}</p>
                {c.sub && <p className="muted">{c.sub}</p>}
              </Tag>
            );
          })}
        </div>
      </section>

      <QuerySection full title="Send us a query" />
    </main>
  );
}
