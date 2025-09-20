// src/components/Home/PoolTypesShowcase.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PoolTypesShowcase.module.css';
import {
  FaArrowRight,
  FaSwimmingPool,   // Pour piscine classique
  FaWater,          // Peut être pour lagon, mais aussi pour eau en général
  FaHome,           // Pour piscine intérieure
  FaLeaf,           // Pour piscine naturelle
  FaUsers,          // Pour famille/ludique (mieux que FaChild)
  FaSwimmer,        // Pour sportif
  FaInfinity,       // Pour piscine à débordement
  FaBezierCurve,    // Pour formes créatives
  FaPlusCircle      // Pour projets spéciaux/audacieux
} from 'react-icons/fa';

const poolCharacteristics = [
  {
    id: 'formes-design',
    title: 'Formes & Design Sur Mesure',
    shortDescription: "Des lignes classiques aux courbes organiques, imaginez la piscine qui s'adapte parfaitement à votre espace.",
    imageUrl: '/images/custom-shape-pool.jpg', // À créer dans public/images/pool-characteristics
    icon: <FaBezierCurve size={30} />,
  },
  {
    id: 'piscines-interieures',
    title: 'Piscines Intérieures',
    shortDescription: "Profitez des plaisirs de la baignade toute l'année, dans un espace élégant intégré à votre domicile.",
    imageUrl: '/images/indoor-pool.jpg', // À créer
    icon: <FaHome size={30} />,
  },
  {
    id: 'piscines-naturelles',
    title: 'Piscines Naturelles & Biologiques',
    shortDescription: "Une baignade saine et écologique dans un écosystème aquatique auto-purifiant, sans produits chimiques.",
    imageUrl: '/images/natural-pool.jpg', // À créer
    icon: <FaLeaf size={30} />,
  },
  {
    id: 'familiales-ludiques',
    title: 'Espaces Familiaux & Ludiques',
    shortDescription: "Des bassins conçus pour le bonheur de tous, avec plages immergées, jeux d'eau et sécurité optimale.",
    imageUrl: '/images/family-fun-pool.jpg', // À créer
    icon: <FaUsers size={30} />,
  },
  {
    id: 'sportives-couloirs',
    title: 'Piscines Sportives & Couloirs de Nage',
    shortDescription: "Entraînement quotidien ou nage à contre-courant, votre piscine devient un espace dédié à la performance.",
    imageUrl: '/images/lap-pool.jpg', // À créer
    icon: <FaSwimmer size={30} />,
  },
  {
    id: 'debordement-miroir',
    title: 'Piscines à Débordement & Miroir',
    shortDescription: "Des effets visuels spectaculaires, une ligne d'eau qui se fond dans l'horizon pour une esthétique épurée.",
    imageUrl: '/images/infinity-pool.jpg', // À créer
    icon: <FaInfinity size={30} />,
  },
];

const PoolTypesShowcase = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [isScrolledToStart, setIsScrolledToStart] = useState(true);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
        const scrollThreshold = 10; // Petite marge pour détecter le début/fin

        setIsScrolledToStart(scrollLeft <= scrollThreshold);
        setIsScrolledToEnd(scrollLeft + clientWidth >= scrollWidth - scrollThreshold);

        // Montrer le hint si le contenu déborde et n'est pas encore à la fin
        setShowScrollHint(scrollWidth > clientWidth && !isScrolledToEnd);
      }
    };

    // Vérifier au chargement et au redimensionnement
    checkScroll();
    window.addEventListener('resize', checkScroll);
    scrollContainerRef.current?.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('resize', checkScroll);
      scrollContainerRef.current?.removeEventListener('scroll', checkScroll);
    };
  }, [isScrolledToEnd]);


  return (
    <section className={styles.poolTypesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Découvrez les <span className={styles.highlight}>Types de Piscines</span> qui vous inspirent.
        </h2>
        <p className={styles.sectionDescription}>
          Chaque projet est une toile blanche. Explorez nos approches, leurs formes, leurs ambiances et imaginez votre futur espace aquatique.
        </p>

        <div className={styles.scrollWrapper}>
          <div ref={scrollContainerRef} className={styles.typesGrid}>
            {poolCharacteristics.map((type) => (
              // Chaque carte mène maintenant à la page de demande de devis pour un projet sur mesure
              <Link href="/demande-de-devis" key={type.id} className={styles.typeCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={type.imageUrl}
                    alt={type.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.typeImage}
                  />
                  <div className={styles.overlayText}>
                    {type.icon}
                    <h3 className={styles.cardTitle}>{type.title}</h3>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>{type.shortDescription}</p>
                  <span className={styles.cardLink}>
                    Demander un devis <FaArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {/* Indicateurs de défilement visuels */}
          {!isScrolledToStart && (
            <div className={`${styles.scrollFade} ${styles.scrollFadeLeft}`}></div>
          )}
          {!isScrolledToEnd && showScrollHint && (
            <div className={`${styles.scrollFade} ${styles.scrollFadeRight}`}></div>
          )}
          {showScrollHint && (
            <div className={styles.scrollHint}>
              <span className={styles.scrollText}>Faites défiler pour plus</span>
              <FaArrowRight className={styles.scrollArrow} />
            </div>
          )}
        </div>

        <Link href="/demande-de-devis" className={styles.mainCtaButton}>
          <span>Commencez votre projet sur mesure</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default PoolTypesShowcase;