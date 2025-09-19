// src/app/realisations/page.tsx
import type { Metadata } from 'next';
import RealisationHero from '@/components/RealisationHero/RealisationHero';
import RealisationsGrid from '@/components/RealisationsGrid/RealisationsGrid';
import { realisationsData } from '@/data/realisationsData';

export const metadata: Metadata = {
  title: "Nos Réalisations d'Exception - Oasis Évasion",
  description: "Découvrez notre galerie de projets de piscines sur mesure, des créations uniques au Maroc qui témoignent de notre savoir-faire et de notre passion.",
};

const RealisationsPage = () => {
  return (
    <div>
      <RealisationHero
        title="Nos Réalisations"
        description="Explorez notre portfolio et laissez-vous inspirer par nos créations uniques, des piscines qui transforment les rêves en réalité."
        imageUrl="/images/realisations-hero-bg.jpg" // Image de fond pour la page de listing
      />
      <RealisationsGrid realisations={realisationsData} />
    </div>
  );
};

export default RealisationsPage;