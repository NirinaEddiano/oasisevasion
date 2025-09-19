import React from 'react';
import styles from './AboutHeroSection.module.css';

const AboutHeroSection = () => {
  return (
    <section className={styles.heroAboutSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>À propos d&apos;Oasis Évasion</h1>
        <p className={styles.description}>
          Votre partenaire pour la conception et la réalisation de piscines architecturales uniques au Maroc.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;