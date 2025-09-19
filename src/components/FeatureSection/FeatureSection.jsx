// src/components/FeatureSection/FeatureSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeatureSection.module.css';
import { FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const FeatureSection = ({ title, description, imageUrl, slug, ctaText, layoutRight = false }) => {
  return (
    <section className={`${styles.featureSection} ${layoutRight ? styles.layoutRight : ''}`}>
      <div className={styles.featureImageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.featureImage}
        />
      </div>
      <div className={styles.featureContent}>
        <h2 className={styles.featureTitle}>{title}</h2>
        <p className={styles.featureDescription}>{description}</p>
        <div className={styles.featureActions}>
          <Link href={`/services/${slug}`} className={`${styles.button} ${styles.primaryButton}`}>
            <FaInfoCircle size={16} />
            <span>Découvrir</span>
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

export default FeatureSection;