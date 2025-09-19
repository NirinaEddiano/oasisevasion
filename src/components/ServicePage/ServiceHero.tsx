// src/components/ServicePage/ServiceHero.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceHero.module.css';
import { FaEnvelope } from 'react-icons/fa';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className={styles.heroSection}>
      <Image
        src={backgroundImage}
        alt={`Arrière-plan pour ${title}`}
        fill
        priority
        className={styles.heroBackground}
        sizes="100vw"
      />
      <div  className={styles.overlay}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
      </div>
    </section>
  );
};

export default ServiceHero;