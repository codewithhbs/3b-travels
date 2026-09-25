import PageHero from "@/components/PageHero";
import QuerySection from "@/components/QuerySection";
import DestinationGrid from "@/components/DestinationGrid";
import { destinations } from "@/lib/destinations";

export const metadata = {
  title: "Destinations",
  description: "Curated tour packages across India and abroad: Ladakh, Kerala, Meghalaya, Nepal, Thailand, Dubai, Singapore, Turkey, Georgia and more.",
};

export default function Destinations() {
  return (
    <main>
      <PageHero eyebrow="Destinations" title="Where do you want to go?"
        text="Handpicked trips across India and around the world. Pick a place to see the full plan." />
      <section className="section all-dest">
        <div className="container">
          <DestinationGrid items={destinations} />
        </div>
      </section>
      <QuerySection title="Can't find your place?" />
    </main>
  );
}
