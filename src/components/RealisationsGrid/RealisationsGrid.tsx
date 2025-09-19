// src/components/RealisationsGrid/RealisationsGrid.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Realisation } from '@/data/realisationsData'; // Import du type Realisation
import styles from './RealisationsGrid.module.css';
import { FaArrowRight } from 'react-icons/fa';

interface RealisationsGridProps {
  realisations: Realisation[];
}

const RealisationsGrid: React.FC<RealisationsGridProps> = ({ realisations }) => {
  return (
    <section className={styles.realisationsGridSection}>
      <div className={styles.gridContainer}>
        {realisations.map((realisation) => (
          <div key={realisation.id} className={styles.realisationCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={realisation.cardImage}
                alt={realisation.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{realisation.title}</h3>
              <p className={styles.cardText}>{realisation.subtitle}</p>
              <Link href={`/realisations/${realisation.slug}`} className={styles.viewButton}>
                Voir <FaArrowRight size={14} className={styles.buttonIcon} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Tu pourrais ajouter ici un bouton "Charger plus" ou une pagination si tu as beaucoup de réalisations */}
      {/* <button className={styles.loadMoreButton}>Charger plus de réalisations</button> */}
    </section>
  );
};

export default RealisationsGrid;