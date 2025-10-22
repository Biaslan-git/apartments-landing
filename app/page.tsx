import Hero from "@/components/Hero";
import ApartmentDescription from "@/components/ApartmentDescription";
import SleepingAreas from "@/components/SleepingAreas";
import AmenitiesAndAccommodation from "@/components/AmenitiesAndAccommodation";

export default function Home() {
  return (
    <main>
      <Hero />
      <ApartmentDescription />
      <SleepingAreas />
      <AmenitiesAndAccommodation />
    </main>
  );
}
