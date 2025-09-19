// src/components/Services/Services.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Services.module.css';
import { FaInfoCircle, FaEnvelope, FaCheck } from 'react-icons/fa';
import { servicesData, Service } from '@/data/servicesData';

const Services = () => {
  // Sélectionner les services spécifiques à afficher sur la page d'accueil
  const homePageServices: Service[] = [
    servicesData.find((s) => s.slug === 'piscine-lagon'),
    servicesData.find((s) => s.slug === 'bassins-classiques'),
    servicesData.find((s) => s.slug === 'jacuzzi'),
    servicesData.find((s) => s.slug === 'hammam'),
    servicesData.find((s) => s.slug === 'conception-construction'),
    servicesData.find((s) => s.slug === 'renovation-transformation'),
    servicesData.find((s) => s.slug === 'amenagements-exterieurs'),
    servicesData.find((s) => s.slug === 'accompagnement-personnalise'),
  ].filter((s): s is Service => !!s); // Type guard to ensure non-undefined

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesTitleContainer}>
        <h2 className={styles.sectionTitle}>Nos services d&apos;exception</h2>
        <p className={styles.sectionDescription}>
          Découvrez notre approche unique pour créer des espaces aquatiques qui
          transcendent l&apos;ordinaire.
        </p>
      </div>

      <div className={styles.servicesGridContainer}>
        {homePageServices.map((service) => (
          <div
            key={service.id}
            className={`${styles.serviceCard} ${
              service.slug === 'piscine-lagon' ? styles.lagonHighlight : ''
            }`}
          >
            <div className={styles.serviceImageWrapper}>
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className={styles.serviceImage}
              />
              <div className={styles.serviceOverlayIcon}>{service.icon}</div>
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceCardTitle}>{service.title}</h3>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className={styles.featureItem}>
                    <span className={styles.checkIcon}>
                      <FaCheck size={16} />
                    </span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
              <div className={styles.cardActions}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`${styles.button} ${styles.callButton}`}
                >
                  <FaInfoCircle size={16} />
                  <span>Plus de détails</span>
                </Link>
                <Link
                  href="/contact"
                  className={styles.quoteButtonBottom}
                >
                  <FaEnvelope size={16} />
                  <span>Demander un devis</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;