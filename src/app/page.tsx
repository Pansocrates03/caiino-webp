import CarouselWithNavigation from "@/components/Carousel/carousel";
import PrivacySection from "@/components/privacySection";
import PublicationsCarousel from "@/components/Carousel/publications-carousel";
import NuestroObjetivo from "@/components/Inicio/NuestroObjetivo";
import QuienesSomos from "@/components/Inicio/QuienesSomos";
import QuePretendemos from "@/components/Inicio/QuePretendemos";
import ComoLoHacemos from "@/components/Inicio/ComoLoHacemos";
import ImpactoSection from "@/components/Inicio/ImpactoSection";

export default function Home() {
  return (
    <div>
      
      {/* Navigation Section */}
      <section id="main" className="relative min-h-screen overflow-hidden">
        <CarouselWithNavigation/>
      </section>


      {/* Sections */}
      <QuienesSomos />
      <NuestroObjetivo/>
      <QuePretendemos language="es" />
      <ComoLoHacemos language="es" />
      <ImpactoSection />
      <PublicationsCarousel />
      <PrivacySection/>
    </div>
  );
}
