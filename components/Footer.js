import Link from "next/link";
import { footerNav, site } from "@/lib/data";

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
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
