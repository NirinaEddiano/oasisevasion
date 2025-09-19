// src/app/realisations/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import RealisationHero from '@/components/RealisationHero/RealisationHero';
import RealisationDetailContent from '@/components/RealisationDetailContent/RealisationDetailContent';
import RealisationSidebar from '@/components/RealisationSidebar/RealisationSidebar';
import { realisationsData } from '@/data/realisationsData';

// Pour générer les métadonnées spécifiques à la page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const realisation = realisationsData.find((r) => r.slug === params.slug);

  if (!realisation) {
    return {
      title: 'Réalisation Introuvable - Oasis Évasion',
      description: 'La page de la réalisation demandée n\'existe pas.',
    };
  }

  return {
    title: `${realisation.title} - Oasis Évasion`,
    description: realisation.shortDescription,
    // Vous pouvez ajouter d'autres balises meta ici, comme og:image
    openGraph: {
      images: [realisation.heroImage],
    },
  };
}

// Pour générer les chemins statiques lors du build (SSG)
export async function generateStaticParams() {
  return realisationsData.map((realisation) => ({
    slug: realisation.slug,
  }));
}

const DetailedRealisationPage = ({ params }: { params: { slug: string } }) => {
  const realisation = realisationsData.find((r) => r.slug === params.slug);

  if (!realisation) {
    notFound(); // Affiche la page 404 de Next.js si la réalisation n'est pas trouvée
  }

  // Pour la section Hero de la page de détail, j'utilise l'image et le texte spécifiques de la réalisation
  // Note: Nous n'utilisons plus le RealisationHero au top de la page de détail pour éviter la répétition avec le heroImage dans RealisationDetailContent.
  // Si tu souhaites un Hero différent avec un autre visuel en haut, réactive le RealisationHero ici.
  // Pour cette implémentation, RealisationDetailContent commence directement avec sa grande image et titre.

  return (
    <div className='realisation-page-layout'> {/* Utilise une classe pour le layout CSS */}
      <RealisationHero
        title={realisation.pageTitle}
        description={realisation.pageDescription}
        imageUrl={realisation.heroImage}
        overlayColor1="var(--color-water-blue)" // Utilise les variables CSS globales
        overlayColor2="var(--color-marine-blue)" // Utilise les variables CSS globales
      />
      <div className="realisation-content-wrapper">
        <div className="realisation-main-content">
          <RealisationDetailContent realisation={realisation} />
        </div>
        <div className="realisation-sidebar-content">
          <RealisationSidebar realisations={realisationsData} currentRealisationSlug={realisation.slug} />
        </div>
      </div>
    </div>
  );
};

export default DetailedRealisationPage;