// src/components/ServicePage/ServiceContentSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceContentSection.module.css';
import { FaEnvelope } from 'react-icons/fa';

interface ServiceContentSectionProps {
  subtitle: string;
  text: string;
  image: string;
  imageOnRight?: boolean; // Option pour changer l'ordre de l'image/texte
}

const ServiceContentSection: React.FC<ServiceContentSectionProps> = ({
  subtitle,
  text,
  image,
  imageOnRight = false, // Par défaut, l'image est à gauche
}) => {
  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <div className={`${styles.grid} ${imageOnRight ? styles.imageRight : ''}`}>
          <div className={styles.textColumn}>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <p className={styles.description}>{text}</p>
            <Link href="/contact" className={styles.quoteButton}>
              <FaEnvelope size={16} />
              <span>Demander un devis</span>
            </Link>
          </div>
          <div className={styles.imageColumn}>
            <Image
              src={image}
              alt={subtitle}
              width={600} // Largeur fixe, Next.js optimisera
              height={400} // Hauteur fixe
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContentSection;