// src/components/Services/Services.tsx
"use client"; 
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Services.module.css';
import { FaInfoCircle, FaEnvelope, FaCheck, FaWrench } from 'react-icons/fa'; // Garder FaWrench
import { servicesData, Service } from '@/data/servicesData';

const Services = () => {
  // Fonction pour gérer le défilement vers l'ancre
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien (y compris le rafraîchissement)
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Défilement doux, aligné au début de l'élément
      // Optionnel : mettre à jour l'URL avec l'ancre sans recharger la page
      window.history.pushState(null, '', `#${targetId}`);
    } else {
      console.error(`Cible de défilement #${targetId} non trouvée.`);
      // Fallback au comportement par défaut si l'élément n'est pas trouvé
      window.location.href = `#${targetId}`;
    }
  };

  const homePageServices: Service[] = [
    servicesData.find((s) => s.slug === 'piscine-lagon'),
    servicesData.find((s) => s.slug === 'bassins-classiques'),
    servicesData.find((s) => s.slug === 'conception-construction'),
    servicesData.find((s) => s.slug === 'renovation-transformation'),
    servicesData.find((s) => s.slug === 'amenagements-exterieurs'),
    servicesData.find((s) => s.slug === 'accompagnement-personnalise'),
    servicesData.find((s) => s.slug === 'jacuzzi'),
    servicesData.find((s) => s.slug === 'hammam'),
  ].filter((s): s is Service => !!s);

  const maintenanceService = {
    id: 'maintenance-service',
    title: 'Services d\'Entretien',
    shortDescription: 'Un entretien professionnel pour une piscine toujours parfaite, sans effort.',
    heroImage: '/images/services/maintenance-hero.jpg',
    icon: <FaWrench />,
    features: [
      'Garantir une eau saine, claire et équilibrée',
      'Préserver la durée de vie des équipements',
      'Éviter les réparations coûteuses',
      'Tranquillité d’esprit pour le client',
    ],
    buttonText: 'Découvrir nos formules d\'entretien',
    link: 'entretien-section', // L'ID sans le '#' pour faciliter le handleScroll
    isMaintenance: true,
  };

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

        {/* Carte du service d'entretien - Ajoutée manuellement */}
        <div className={`${styles.serviceCard} ${styles.maintenanceCard}`}>
          <div className={styles.serviceImageWrapper}>
            <Image
              src={maintenanceService.heroImage}
              alt={maintenanceService.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className={styles.serviceImage}
            />
            <div className={styles.serviceOverlayIcon}>{maintenanceService.icon}</div>
          </div>
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceCardTitle}>{maintenanceService.title}</h3>
            <ul className={styles.serviceFeatures}>
              {maintenanceService.features.map((feature, fIndex) => (
                <li key={fIndex} className={styles.featureItem}>
                  <span className={styles.checkIcon}>
                    <FaCheck size={16} />
                  </span>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <div className={styles.cardActions}>
              <a // CHANGÉ : Revert à <a> pour le onClick manuel
                href={`#${maintenanceService.link}`} // Ajouter le '#' ici pour l'attribut href
                onClick={(e) => handleScroll(e, maintenanceService.link)} // Appel de la fonction de défilement
                className={`${styles.button} ${styles.callButton}`}
              >
                <FaInfoCircle size={16} />
                <span>{maintenanceService.buttonText}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
