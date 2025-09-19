// src/components/ServicePage/ServiceDetailSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceDetailSection.module.css';
import { FaEnvelope } from 'react-icons/fa';

interface ServiceDetailSectionProps {
  subtitle: string;
  text: string;
  image1: string;
  image2: string;
  imageOnLeft?: boolean; // Option pour placer les images à gauche
}

const ServiceDetailSection: React.FC<ServiceDetailSectionProps> = ({
  subtitle,
  text,
  image1,
  image2,
  imageOnLeft = false, // Par défaut, les images sont à droite
}) => {
  return (
    <section className={styles.detailSection}>
      <div className={styles.container}>
        <div className={`${styles.grid} ${imageOnLeft ? styles.imageLeft : ''}`}>
          <div className={styles.textColumn}>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <p className={styles.description}>{text}</p>
            <Link href="/contact" className={styles.quoteButton}>
              <FaEnvelope size={16} />
              <span>Demander un devis</span>
            </Link>
          </div>
          <div className={styles.imagesColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={image1}
                alt={`${subtitle} - Image 1`}
                width={500}
                height={350}
                className={styles.image1}
              />
              <Image
                src={image2}
                alt={`${subtitle} - Image 2`}
                width={500}
                height={350}
                className={styles.image2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;