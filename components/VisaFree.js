import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "./Icons";

export default function VisaFree() {
  return (
    <section className="section visa">
      <div className="visa-wrap">
        <h2 className="section-title">Visa Free Destinations</h2>
        <div className="visa-grid">
          <Link href="/contact#query" className="visa-card visa-teal">
            <p>Get in touch with us<br />for best deals</p>
          </Link>

          <Link href="/destinations/seychelles" className="visa-card visa-beach" aria-label="Seychelles">
            <Image src="/images/visa-beach.jpg" alt="Aerial view of a tropical beach" fill
              sizes="(max-width: 768px) 100vw, 660px" style={{ objectPosition: "50% 85%" }} />
          </Link>

          <div className="visa-card visa-asia">
            <Image src="/images/highlights-asia.jpg" alt="Long-tail boats between limestone cliffs" fill
              sizes="(max-width: 768px) 100vw, 690px" style={{ objectPosition: "50% 60%" }} />
            <div className="visa-asia-body">
              <h3><Link href="/destinations/thailand" className="stretch">Highlights Asia</Link></h3>
              <div className="visa-asia-foot">
                <span className="line" />
                <span>Get in touch with us for best deals</span>
              </div>
              <Link href="/destinations/thailand" className="circle-btn" aria-label="View Thailand tour">
                <ArrowUpRight />
              </Link>
            </div>
          </div>

          <Link href="/destinations/thailand" className="visa-card visa-temple" aria-label="Thailand">
            <Image src="/images/visa-temple.jpg" alt="Temple spires under a blue sky" fill
              sizes="(max-width: 768px) 100vw, 300px" />
          </Link>
        </div>
      </div>
    </section>
  );
}
