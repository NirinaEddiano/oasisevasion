'use client';

import React from 'react';
import Image from 'next/image';
import { Realisation } from '@/data/realisationsData';
import styles from './RealisationDetailContent.module.css';

interface RealisationDetailContentProps {
  realisation: Realisation;
}

const RealisationDetailContent: React.FC<RealisationDetailContentProps> = ({ realisation }) => {
  let paragraphCounter = 0; // Compteur pour insérer les images

  return (
    <div className={styles.detailContent}>
      <div className={styles.heroImageContainer}>
        <Image
          src={realisation.heroImage}
          alt={realisation.title}
          fill
          sizes="75vw"
          priority
          className={styles.heroImage}
        />
      </div>

      <h1 className={styles.title}>{realisation.pageTitle}</h1>
      <p className={styles.description}>{realisation.pageDescription}</p>

      <div className={styles.mainDescription}>
        <p className={styles.shortDescription}>{realisation.shortDescription}</p>
        {realisation.mainDescription.map((paragraph, pIndex) => {
          paragraphCounter++; // Incrémente à chaque paragraphe

          const imagesToInsert = realisation.imagesWithinDescription.filter(
            (img) => img.position === paragraphCounter
          );

          return (
            <React.Fragment key={`para-${pIndex}`}>
              <p>{paragraph}</p>
              {imagesToInsert.map((img, imgIndex) => (
                <div key={`img-in-para-${pIndex}-${imgIndex}`} className={styles.inlineImageContainer}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600} // Largeur fixe, ajuste si besoin
                    height={300} // Hauteur fixe, ajuste si besoin
                    sizes="75vw"
                    className={styles.inlineImage}
                  />
                  <p className={styles.imageCaption}>{img.alt}</p>
                </div>
              ))}
            </React.Fragment>
          );
        })}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Les Étapes de Réalisation</h2>
        <ul className={styles.stepsList}>
          {realisation.steps.map((step, index) => (
            <li key={index} className={styles.stepItem}>
              <strong>{step.title}:</strong> {step.description}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Équipements Utilisés</h2>
        <ul className={styles.equipmentsList}>
          {realisation.equipmentsUsed.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>

      {/* Tu pourrais ajouter une section galerie avec realisation.galleryImages si besoin */}
    </div>
  );
};

export default RealisationDetailContent;