// src/components/RealisationHero/RealisationHero.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import styles from './RealisationHero.module.css';

interface RealisationHeroProps {
  title: string;
  description: string;
  imageUrl: string;
  overlayColor1?: string; // Couleur 1 de l'overlay (e.g., --color-water-blue)
  overlayColor2?: string; // Couleur 2 de l'overlay (e.g., --color-marine-blue)
}

const RealisationHero: React.FC<RealisationHeroProps> = ({
  title,
  description,
  imageUrl,
  overlayColor1 = 'var(--color-water-blue)', // Valeur par défaut
  overlayColor2 = 'var(--color-marine-blue)', // Valeur par défaut
}) => {
  // Styles CSS pour l'overlay dynamique
  const overlayStyle = {
    background: `linear-gradient(90deg, ${overlayColor1}CC, ${overlayColor2}CC)`, // CC pour une opacité de 80%
  };

  return (
    <section className={styles.heroSection}>
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="100vw"
        priority
        className={styles.heroImage}
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default RealisationHero;