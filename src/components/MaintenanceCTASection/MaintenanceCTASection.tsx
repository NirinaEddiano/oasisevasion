'use client'; // Important pour utiliser les hooks React

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaWrench, FaCalendarAlt, FaStar, FaInfoCircle } from 'react-icons/fa';
import styles from './MaintenanceCTASection.module.css';

const MaintenanceCTASection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && entries[0].intersectionRatio >= 0.2) {
          setIsInView(true);
          observer.disconnect(); // Déconnecter l'observer une fois que la section est apparue
        }
      },
      {
        threshold: 0.2, // Déclencher quand 20% de l'élément est visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      };
    };
  }, []);

  // Définir les éléments une seule fois pour faciliter la duplication et la gestion
  const featureItemsData = [
    {
      icon: FaWrench,
      title: 'Durabilité Assurée',
      description: 'Préservez la durée de vie et la performance de vos équipements.',
    },
    {
      icon: FaStar,
      title: 'Eau Impeccable',
      description: 'Profitez d\'une eau saine, claire et équilibrée en permanence.',
    },
    {
      icon: FaCalendarAlt,
      title: 'Sérénité Quotidienne',
      description: 'Nous nous occupons de tout, vous ne faites que profiter.',
    },
  ];

  return (
    <section className={styles.maintenanceCtaSection} ref={sectionRef}>
      <div className={`${styles.contentWrapper} ${isInView ? styles.animatedIn : ''}`}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>
            L&apos;éclat de votre piscine, une <span className={styles.highlight}>priorité</span> toute l&apos;année.
          </h2>
          <p className={styles.description}>
            Garantissez une eau saine et cristalline, prolongez la vie de vos équipements et profitez d&apos;une tranquillité d&apos;esprit totale. Découvrez nos solutions d&apos;entretien sur mesure, adaptées à vos besoins.
          </p>
          <Link href="/services#entretien" className={styles.ctaButton}>
            <FaInfoCircle size={16} /> {/* Icône correcte */}
            <span>Découvrir nos formules d&apos;entretien</span>
          </Link>
        </div>
        <div className={styles.rightFeatures}>
          <div className={styles.featureItemsWrapper}>
            {/* Rendu des éléments originaux */}
            {featureItemsData.map((item, index) => (
              <div key={`original-${index}`} className={styles.featureItem}>
                <item.icon className={styles.featureIcon} />
                <div className={styles.featureTextContent}>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureDescription}>{item.description}</p>
                </div>
              </div>
            ))}
            {/* Rendu des éléments dupliqués pour la boucle fluide */}
            {featureItemsData.slice(0, 2).map((item, index) => ( // Duplique les 2 premiers items pour un défilement continu
              <div key={`clone-${index}`} className={styles.featureItem}>
                <item.icon className={styles.featureIcon} />
                <div className={styles.featureTextContent}>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureDescription}>{item.description}</p>
                </div>
              </div>
            ))}
             {featureItemsData.slice(0, 3).map((item, index) => ( // Duplique les 2 premiers items pour un défilement continu
              <div key={`clone-${index}`} className={styles.featureItem}>
                <item.icon className={styles.featureIcon} />
                <div className={styles.featureTextContent}>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureDescription}>{item.description}</p>
                </div>
              </div>
            ))}
             {featureItemsData.slice(0, 4).map((item, index) => ( // Duplique les 2 premiers items pour un défilement continu
              <div key={`clone-${index}`} className={styles.featureItem}>
                <item.icon className={styles.featureIcon} />
                <div className={styles.featureTextContent}>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceCTASection;

