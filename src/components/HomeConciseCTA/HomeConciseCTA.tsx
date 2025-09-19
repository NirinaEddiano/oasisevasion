import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './HomeConciseCTA.module.css';

const HomeConciseCTA = () => {
  return (
    <section className={styles.homeConciseCtaSection}>
      <div className={styles.backgroundPattern}></div> {/* Pour un motif/texture subtil */}
      <div className={styles.contentBox}> {/* Boîte de contenu style glassmorphism */}
        <h2 className={styles.title}>
          Votre rêve de piscine sur mesure ? <span className={styles.highlight}>Commençons dès aujourd&apos;hui.</span>
        </h2>
        <p className={styles.description}>
          Chez Oasis Évasion, chaque projet est une œuvre d&apos;art unique, conçue pour refléter votre style et sublimer votre espace.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          <span>Demander une consultation</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default HomeConciseCTA;