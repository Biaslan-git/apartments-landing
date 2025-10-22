import Hero from "@/components/Hero";
import ApartmentDescription from "@/components/ApartmentDescription";
import SleepingAreas from "@/components/SleepingAreas";
import KitchenAndTech from "@/components/KitchenAndTech";
import AmenitiesAndAccommodation from "@/components/AmenitiesAndAccommodation";

export default function Home() {
  return (
    <main>
      <Hero />
      <ApartmentDescription />
      <SleepingAreas />
      <KitchenAndTech />
      <AmenitiesAndAccommodation />
    </main>
  );
}
