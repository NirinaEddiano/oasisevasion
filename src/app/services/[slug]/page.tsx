// src/app/services/[slug]/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { servicesData } from '@/data/servicesData';
import ServiceHero from '@/components/ServicePage/ServiceHero';
import ServiceContentSection from '@/components/ServicePage/ServiceContentSection';
import ServiceDetailSection from '@/components/ServicePage/ServiceDetailSection';
import ServiceConstructionDetails from '@/components/ServicePage/ServiceConstructionDetails'; // <-- NOUVEL IMPORT
import ServiceCarousel from '@/components/ServicePage/ServiceCarousel';
import ServiceCTA from '@/components/ServicePage/ServiceCTA';
import { notFound } from 'next/navigation'; // Pour gérer le cas où le service n'est pas trouvé

// Fonction pour générer les métadonnées dynamiques
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const currentService = servicesData.find(service => service.slug === params.slug);

  if (!currentService) {
    return {}; // Retourne un objet vide si non trouvé, ou gérer avec notFound
  }

  return {
    title: currentService.metaTitle,
    description: currentService.metaDescription,
  };
}

// Fonction pour générer les chemins statiques (SSG)
export async function generateStaticParams() {
  return servicesData.map(service => ({
    slug: service.slug,
  }));
}

const ServicePage = ({ params }: { params: { slug: string } }) => {
  const currentService = servicesData.find(service => service.slug === params.slug);

  if (!currentService) {
    notFound(); // Redirige vers la page 404 de Next.js si le service n'existe pas
  }

  return (
    <>
      <ServiceHero
        title={currentService.title}
        subtitle={currentService.heroSubtitle}
        backgroundImage={currentService.heroImage}
      />
      <ServiceContentSection
        subtitle={currentService.section2Subtitle}
        text={currentService.section2Text}
        image={currentService.section2Image}
        imageOnRight={false} // Image à gauche, texte à droite
      />
      <ServiceDetailSection
        subtitle={currentService.section3Subtitle}
        text={currentService.section3Text}
        image1={currentService.section3Image1}
        image2={currentService.section3Image2}
        imageOnLeft={true} // Images à gauche, texte à droite
      />
      {/* NOUVELLE SECTION INTÉGRÉE ICI */}
      <ServiceConstructionDetails service={currentService} /> {/* <-- Utilisation du nouveau composant */}
      <ServiceCarousel currentServiceSlug={currentService.slug} />
      <ServiceCTA
        ctaText={currentService.ctaText}
        backgroundImage={currentService.heroImage} // Peut être une image différente pour le CTA
        title={currentService.title}
      />
    </>
  );
};

export default ServicePage;