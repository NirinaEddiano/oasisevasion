// src/components/ServicePage/ServiceCarousel.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { servicesData, Service } from '@/data/servicesData';
import styles from './ServiceCarousel.module.css';
import { FaArrowRight } from 'react-icons/fa';

interface ServiceCarouselProps {
  currentServiceSlug: string; // Pour exclure le service actuel du carousel
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ currentServiceSlug }) => {
  const router = useRouter();

  // Filtrer le service actuel
  const otherServices = servicesData.filter(
    (service) => service.slug !== currentServiceSlug
  );

  if (otherServices.length === 0) {
    return null; // Ne pas afficher le carousel s'il n'y a pas d'autres services
  }

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.sectionTitle}>Découvrez nos autres services</h2>
      <p className={styles.sectionDescription}>
        Explorez l'étendue de notre savoir-faire pour créer votre oasis sur mesure.
      </p>

      <div className={styles.carouselGrid}>
        {otherServices.map((service) => (
          <div key={service.id} className={styles.carouselCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={service.heroImage} // Utilise l'image du héros comme aperçu
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className={styles.cardImage}
              />
              <div className={styles.cardIcon}>
                {service.icon}
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.shortDescription}</p>
              <Link href={`/services/${service.slug}`} className={styles.accessButton}>
                <span>Découvrir</span>
                <FaArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCarousel;