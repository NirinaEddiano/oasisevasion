import Hero from "@/components/Hero/Hero"; // Import de la nouvelle CTA home
import About from "@/components/About/About";
import LagoonFeatureSection from "@/components/LagoonFeatureSection/LagoonFeatureSection"; // Nouveau
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Services from "@/components/Services/Services";
import Equipments from "@/components/Equipments/Equipments";
import Realisations from "@/components/Realisations/Realisations";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import MaintenanceCTASection from "@/components/MaintenanceCTASection/MaintenanceCTASection"; // Import de la nouvelle CTA maintenance
import { servicesData } from '@/data/servicesData';

export default function Home() {
  const lagonService = servicesData.find(s => s.slug === 'piscine-lagon');
  const jacuzziService = servicesData.find(s => s.slug === 'jacuzzi');
  const spasService = servicesData.find(s => s.slug === 'spas');
  const hammamService = servicesData.find(s => s.slug === 'hammam');
  return (
    <>
      <Hero />
      <About />
      {lagonService && (
        <LagoonFeatureSection
          title={lagonService.title}
          description={lagonService.shortDescription}
          imageUrl={lagonService.heroImage}
          slug={lagonService.slug}
          ctaText={lagonService.ctaText}
        />
      )}

      {jacuzziService && (
        <FeatureSection
          title={jacuzziService.title}
          description={jacuzziService.shortDescription}
          imageUrl={jacuzziService.heroImage}
          slug={jacuzziService.slug}
          ctaText={jacuzziService.ctaText}
          layoutRight={true} // Image à droite pour alterner
        />
      )}

{spasService && (
        <FeatureSection
          title={spasService.title}
          description={spasService.shortDescription}
          imageUrl={spasService.heroImage}
          slug={spasService.slug}
          ctaText={spasService.ctaText}
        />
      )}

      {hammamService && (
        <FeatureSection
          title={hammamService.title}
          description={hammamService.shortDescription}
          imageUrl={hammamService.heroImage}
          slug={hammamService.slug}
          ctaText={hammamService.ctaText}
          layoutRight={true} // Image à droite pour alterner
        />
      )}

      
      <Services />
      <Equipments />
      <Realisations />
      <Testimonials />
      <FAQ />
      <MaintenanceCTASection /> 
     {/* Nouvelle section CTA après la FAQ */}
    </>
  );
}