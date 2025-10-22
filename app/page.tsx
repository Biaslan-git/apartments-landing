import Hero from "@/components/Hero";
import ApartmentDescription from "@/components/ApartmentDescription";
import SleepingAreas from "@/components/SleepingAreas";
import KitchenAndTech from "@/components/KitchenAndTech";
import AdditionalAmenities from "@/components/AdditionalAmenities";
import AmenitiesAndAccommodation from "@/components/AmenitiesAndAccommodation";

export default function Home() {
  return (
    <main>
      <Hero />
      <ApartmentDescription />
      <SleepingAreas />
      <KitchenAndTech />
      <AdditionalAmenities />
      <AmenitiesAndAccommodation />
    </main>
  );
}
