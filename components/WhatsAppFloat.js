import { site } from "@/lib/data";
import { SocialIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <SocialIcon name="whatsapp" size={32} />
    </a>
  );
}
