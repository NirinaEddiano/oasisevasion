// src/components/ServicePage/ServiceCTA.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceCTA.module.css';
import { FaEnvelope } from 'react-icons/fa';

interface ServiceCTAProps {
  ctaText: string;
  backgroundImage: string; // Image de fond pour le CTA
  title: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ ctaText, backgroundImage, title }) => {
  return (
    <section className={styles.ctaSection}>
      <Image
        src={backgroundImage}
        alt={`Fonds pour l'appel à l'action pour ${title}`}
        fill
        sizes="100vw"
        className={styles.ctaBackground}
      />
      <div className={styles.overlay}></div> {/* Overlay pour la lisibilité */}
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>
          {ctaText || `Envie de réaliser votre projet ${title} ?`}
        </h2>
        <p className={styles.ctaSubtitle}>
          Contactez-nous pour une étude personnalisée et un devis gratuit.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          <FaEnvelope size={18} />
          <span>Demander un devis</span>
        </Link>
      </div>
    </section>
  );
};

export default ServiceCTA;