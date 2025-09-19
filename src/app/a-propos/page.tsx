// app/a-propos/page.tsx
import React from 'react';
import AboutHeroSection from '@/components/AboutPage/AboutHeroSection';
import AboutMainContentSection from '@/components/AboutPage/AboutMainContentSection';
import AboutCTASection from '@/components/AboutPage/AboutCTASection';

// Métadonnées spécifiques à cette page pour le SEO
export const metadata = {
  title: "À Propos - Oasis Évasion : Créateur de piscines d'exception",
  description: "Découvrez la philosophie, l'histoire et l'approche unique d'Oasis Évasion dans la conception de piscines architecturales au Maroc.",
};

const AboutPage = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutMainContentSection />
      <AboutCTASection />
    </>
  );
};

export default AboutPage;