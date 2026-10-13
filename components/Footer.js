import Link from "next/link";
import { footerNav, site, socials } from "@/lib/data";
import { SocialIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src="/brand/logo-white.svg" alt="3B Travels" className="footer-logo" />
        <nav aria-label="Footer">
          {footerNav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
        </nav>
        <div className="footer-contact">
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <div className="socials">
            {socials.map((x) => (<a key={x.key} href={x.href} target="_blank" rel="noopener noreferrer" aria-label={x.label}><SocialIcon name={x.key} /></a>))}
          </div>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
