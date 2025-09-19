// src/components/LagoonFeatureSection/LagoonFeatureSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LagoonFeatureSection.module.css';
import { FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const LagoonFeatureSection = ({ title, description, imageUrl, slug, ctaText }) => {
  return (
    <section className={styles.lagoonFeatureSection}>
      <div className={styles.lagoonFeatureImageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority // Priorité pour l'image principale
          sizes="100vw"
          className={styles.lagoonFeatureImage}
        />
      </div>
      <div className={styles.lagoonFeatureContent}>
        <h2 className={styles.lagoonFeatureTitle}>{title}</h2>
        <p className={styles.lagoonFeatureDescription}>{description}</p>
        <div className={styles.lagoonFeatureActions}>
          <Link href={`/services/${slug}`} className={`${styles.button} ${styles.primaryButton}`}>
            <FaInfoCircle size={16} />
            <span>Découvrir la Piscine Lagon</span>
          </Link>
          <Link href="/contact" className={`${styles.button} ${styles.secondaryButton}`}>
            <FaEnvelope size={16} />
            <span>Demander un devis</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LagoonFeatureSection;