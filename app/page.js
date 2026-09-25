import HomeHero from "@/components/HomeHero";
import VisaFree from "@/components/VisaFree";
import PopularDestinations from "@/components/PopularDestinations";
import FeatureSlider from "@/components/FeatureSlider";
import PackageCarousel from "@/components/PackageCarousel";
import TourCarousel from "@/components/TourCarousel";
import QuerySection from "@/components/QuerySection";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <VisaFree />
      <PopularDestinations />
      <FeatureSlider />
      <PackageCarousel />
      <TourCarousel />
      <QuerySection />
    </main>
  );
}
