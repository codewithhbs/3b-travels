import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import QuerySection from "@/components/QuerySection";

export const metadata = { title: "Gallery" };

export default function Gallery() {
  return (
    <main>
      <PageHero eyebrow="Gallery" title="Moments from the road"
        text="Mountains, beaches and journeys from the trips we plan and the ones we take ourselves." />
      <section className="section">
        <div className="container"><GalleryGrid /></div>
      </section>
      <QuerySection />
    </main>
  );
}
