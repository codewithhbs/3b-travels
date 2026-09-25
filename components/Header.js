"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/data";
import { ArrowUpRight } from "./Icons";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="header-logo" aria-label="3B Travels home">
          <img src="/brand/logo-white-notagline.svg" alt="3B Travels" width="104" height="94" />
        </Link>

        <nav className={`header-nav ${open ? "is-open" : ""}`} aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
              className={path === n.href ? "active" : undefined}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact#query" className="pill-cta mobile-only" onClick={() => setOpen(false)}>
            <span className="pill pill-teal">Have a query</span>
            <span className="circle-btn"><ArrowUpRight /></span>
          </Link>
        </nav>

        <Link href="/contact#query" className="pill-cta desktop-only">
          <span className="pill pill-teal">Have a query</span>
          <span className="circle-btn"><ArrowUpRight /></span>
        </Link>

        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
