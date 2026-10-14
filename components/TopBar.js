import { site, socials } from "@/lib/data";
import { SocialIcon, PhoneIcon, MailIcon } from "./Icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-contact">
          {site.phones.map((p) => (
            <a key={p.tel} className="topbar-phone" href={`tel:${p.tel}`}><PhoneIcon />{p.label}</a>
          ))}
          <a className="topbar-mail" href={`mailto:${site.email}`}><MailIcon />{site.email}</a>
        </div>
        <div className="topbar-right">
          <div className="socials">
            {socials.map((x) => (
              <a key={x.key} href={x.href} target="_blank" rel="noopener noreferrer" aria-label={x.label}><SocialIcon name={x.key} size={16} /></a>
            ))}
          </div>
          <a className="topbar-wa" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <SocialIcon name="whatsapp" size={18} /><span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
