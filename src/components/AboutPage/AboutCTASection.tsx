import React from 'react';
import Link from 'next/link';
import { FaPaperPlane } from 'react-icons/fa';
import styles from './AboutCTASection.module.css';

const AboutCTASection = () => {
  return (
    <section className={styles.aboutCtaSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Prêt à créer votre propre <span className={styles.highlight}>Oasis sur Mesure</span> ?
        </h2>
        <p className={styles.description}>
          Discutons de votre projet unique. Notre expertise en architecture et design transformera votre vision en une réalité aquatique d&apos;exception.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          <FaPaperPlane size={18} />
          <span>Demander un devis personnalisé</span>
        </Link>
      </div>
    </section>
  );
};

export default AboutCTASection;