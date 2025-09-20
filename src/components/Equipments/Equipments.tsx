import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import de Link
import styles from './Equipments.module.css';
import {
  FaVectorSquare,    // Pour Structure & bassin
  FaFilter,          // Pour Hydraulique & filtration
  FaThermometerHalf, // Pour Chauffage & maintien en température
  FaRobot,           // Pour Automatisation & connectivité
  FaHotTub,          // Pour Spa / Jacuzzi (catégorie Bien-être)
  FaArrowRight,      // Pour le bouton "En savoir plus"
  FaTools,           // Pour le bouton "Découvrir"
} from 'react-icons/fa';

// Importez les données complètes des équipements
import { equipmentsData } from '@/data/equipmentsData';

// Données des catégories d'équipement pour la page d'accueil (résumées)
// Utiliser les données importées directement et les adapter si nécessaire pour l'affichage de l'accueil
const homePageEquipmentsData = equipmentsData.map(category => ({
  slug: category.slug,
  title: category.title,
  description: category.description,
  image: category.imageUrl,
  // Assigner l'icône appropriée en fonction du slug
  icon: (function() {
    switch (category.slug) {
      case 'structure-design': return <FaVectorSquare />;
      case 'filtration-hydraulique': return <FaFilter />;
      case 'traitement-chauffage': return <FaThermometerHalf />;
      case 'automatisation-connectivite': return <FaRobot />;
      case 'oasis-bien-etre': return <FaHotTub />;
      default: return <FaTools />; // Icône par défaut
    }
  })()
}));


const Equipments = () => {
  return (
    <section id="equipements" className={styles.equipmentsSection}>
      {/* Conteneur du titre et description de la section */}
      <div className={styles.equipmentsTitleContainer}>
        <h2 className={styles.sectionTitle}>
          Équipements : la <span className={styles.highlight}>technologie</span> au service de votre rêve.
        </h2>
        <p className={styles.sectionDescription}>
          Découvrez une sélection exclusive d&apos;équipements alliant innovation, performance et design pour une expérience piscine incomparable.
        </p>
      </div>

      {/* Grille des cartes d'équipement avec informations visibles */}
      <div className={styles.equipmentsGrid}>
        {homePageEquipmentsData.map((item, index) => (
          <div key={index} className={styles.equipmentCard}>
            {/* Image d'en-tête de la carte */}
            <div className={styles.cardImageHeader}>
              <Image
                src={item.image}
                alt={`Image pour ${item.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.cardImage}
              />
            </div>
            {/* Bloc de couleur avec l'icône */}
            <div className={styles.cardIconBlock}>
              <div className={styles.cardIcon}>
                {item.icon} {/* Icône principale du service */}
              </div>
            </div>
            {/* Contenu textuel de la carte */}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              {/* Le bouton "En savoir plus" redirige vers la page de la catégorie spécifique */}
              <Link href={`/equipement/${item.slug}`} className={`${styles.button} ${styles.primaryButton}`}>
                <span>En savoir plus</span>
                <FaArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}

        {/* Le bouton "Découvrir toutes nos solutions" est intégré comme une carte dans la grille */}
        <Link href="/equipement" className={styles.discoverGridButton}> {/* Corriger le lien vers la page principale /equipement */}
          <div className={styles.discoverGridButtonIcon}>
            <FaTools />
          </div>
          <span className={styles.discoverGridButtonText}>Découvrir toutes nos solutions</span>
        </Link>
      </div>
    </section>
  );
};

export default Equipments;
