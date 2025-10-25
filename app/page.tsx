import Hero from "@/components/Hero";
import ApartmentDescription from "@/components/ApartmentDescription";
import SleepingAreas from "@/components/SleepingAreas";
import KitchenAndTech from "@/components/KitchenAndTech";
import AdditionalAmenities from "@/components/AdditionalAmenities";
import LocationAndAttractions from "@/components/LocationAndAttractions";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import HouseRules from "@/components/HouseRules";

export default function Home() {
  return (
    <main>
      <Hero />
      <ApartmentDescription />
      <SleepingAreas />
      <KitchenAndTech />
      <AdditionalAmenities />
      <LocationAndAttractions />
      <ContactSection />
      {/* <MapSection /> */}
      <HouseRules />
    </main>
  );
}
