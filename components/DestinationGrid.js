"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Star } from "./Icons";

const tabs = [
  { key: "all", label: "All destinations" },
  { key: "international", label: "International" },
  { key: "india", label: "India" },
  { key: "visa-free", label: "Visa free" },
];

export default function DestinationGrid({ items }) {
  const [tab, setTab] = useState("all");
  const list = items.filter((d) =>
    tab === "all" ? true : tab === "visa-free" ? d.visaFree : d.region === tab
  );

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Filter destinations">
        {tabs.map((t) => (
          <button key={t.key} role="tab" aria-selected={tab === t.key}
            className={tab === t.key ? "tab active" : "tab"} onClick={() => setTab(t.key)}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="all-grid">
        {list.map((d) => (
          <Link href={`/destinations/${d.slug}`} className="all-card" key={d.slug}>
            <div className="dest-card">
              <Image src={d.img} alt={d.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px" />
              <div className="dest-label">
                <span className="line" />
                <span className="name">{d.name}</span>
              </div>
            </div>
            <span className="pkg-badge"><Star />{d.duration}</span>
            <p className="all-tagline">{d.tagline}</p>
          </Link>
        ))}
      </div>
      {list.length === 0 && <p className="empty">No destinations in this list yet. Send us a query and we'll plan one for you.</p>}
    </>
  );
}
