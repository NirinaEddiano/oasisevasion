import React from 'react';
import Image from 'next/image'; // Importation nécessaire pour Image
import styles from './Equipments.module.css';
import {
  FaVectorSquare,    // Pour Structure & bassin
  FaFilter,          // Pour Hydraulique & filtration
  FaThermometerHalf, // Pour Chauffage & maintien en température
  FaRobot,           // Pour Automatisation & connectivité
  FaHotTub,
  FaInfoCircle,          // Pour Spa / Jacuzzi (catégorie Bien-être)
  FaTools,           // Pour le bouton "Découvrir"
} from 'react-icons/fa';

// Données des catégories d'équipement pour la page d'accueil (résumées)
const equipmentsData = [
  {
    icon: <FaVectorSquare />,
    title: 'Design Architectural',
    description: 'Formes uniques, matériaux nobles et finitions sur mesure pour une intégration parfaite.',
    image: '/images/equipment-design.jpg', // Nom d'image original
  },
  {
    icon: <FaFilter />,
    title: 'Pureté & Performance',
    description: 'Filtration avancée et traitements écologiques pour une eau cristalline, toujours saine.',
    image: '/images/equipment-filtration.jpg', // Nom d'image original
  },
  {
    icon: <FaThermometerHalf />,
    title: 'Confort Optimal',
    description: 'Solutions de chauffage intelligentes et couvertures design pour une baignade prolongée.',
    image: '/images/equipment-heating.jpg', // Nom d'image original
  },
  {
    icon: <FaRobot />,
    title: 'Intelligence Connectée',
    description: 'Contrôle intuitif de votre piscine : nettoyage, éclairage, scénarios automatisés.',
    image: '/images/equipment-automation.jpg', // Nom d'image original
  },
  {
    icon: <FaHotTub />,
    title: 'Oasis de Bien-être',
    description: 'Spas, saunas et hammams intégrés, créés sur mesure pour une relaxation ultime.',
    image: '/images/equipment-wellness.jpg', // Nom d'image original
  },
];

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
        {equipmentsData.map((item, index) => (
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
              {/* Le titre est maintenant dans le bloc de contenu pour une meilleure hiérarchie */}
            </div>
            {/* Contenu textuel de la carte */}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <div className={styles.aboutActions}>
                        <a href="/equipement" className={`${styles.button} ${styles.primaryButton}`}>
                          <FaInfoCircle size={16} />
                          <span>En savoir plus</span>
                        </a>
                      </div>
            </div>
          </div>
        ))}

        {/* Le bouton "Découvrir toutes nos solutions" est intégré comme une carte dans la grille */}
        <a href="/equipements" className={styles.discoverGridButton}>
          <div className={styles.discoverGridButtonIcon}>
            <FaTools />
          </div>
          <span className={styles.discoverGridButtonText}>Découvrir toutes nos solutions</span>
        </a>
      </div>
    </section>
  );
};

export default Equipments;