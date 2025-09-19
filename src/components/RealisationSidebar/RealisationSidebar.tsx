// src/components/RealisationSidebar/RealisationSidebar.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Realisation } from '@/data/realisationsData';
import styles from './RealisationSidebar.module.css';
import { FaArrowRight } from 'react-icons/fa';

interface RealisationSidebarProps {
  realisations: Realisation[];
  currentRealisationSlug?: string; // Pour exclure la réalisation actuelle de la liste
}

const RealisationSidebar: React.FC<RealisationSidebarProps> = ({ realisations, currentRealisationSlug }) => {
  const filteredRealisations = realisations.filter(
    (realisation) => realisation.slug !== currentRealisationSlug
  );

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.sidebarTitle}>Autres Réalisations</h3>
      <div className={styles.sidebarList}>
        {filteredRealisations.map((realisation) => (
          <div key={realisation.id} className={styles.sidebarCard}>
            <Link href={`/realisations/${realisation.slug}`} className={styles.cardLink}>
              <div className={styles.imageWrapper}>
                <Image
                  src={realisation.cardImage}
                  alt={realisation.title}
                  fill
                  sizes="25vw"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{realisation.title}</h4>
                <p className={styles.cardText}>{realisation.subtitle}</p>
                <span className={styles.viewButton}>
                  Voir <FaArrowRight size={12} className={styles.buttonIcon} />
                </span>
              </div>
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default RealisationSidebar;