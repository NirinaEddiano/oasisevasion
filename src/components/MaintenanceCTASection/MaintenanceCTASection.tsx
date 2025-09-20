'use client'; // Important pour utiliser les hooks React

import React from 'react';
import Link from 'next/link';
// Import des icônes nécessaires pour les listes et les boutons
import { FaCheckCircle, FaPhoneAlt, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import styles from './MaintenanceCTASection.module.css';

const MaintenanceCTASection = () => {
  // Les données de vos formules d'entretien
  const pricingFormulas = [
    {
      name: 'Essentielle',
      price: '1 200 MAD/mois',
      description: 'Idéale pour un entretien régulier et une eau impeccable.',
      features: [
        '1 passage par semaine',
        'Contrôle et ajustement des paramètres de l’eau (pH, chlore/salt, TAC)',
        'Nettoyage de la ligne d’eau, des skimmers et paniers',
        'Contre-lavage du filtre',
        'Vérification du bon fonctionnement du système de filtration',
      ],
      isHighlighted: false,
    },
    {
      name: 'Confort',
      price: '1 800 MAD/mois',
      description: 'La solution complète pour une piscine toujours propre et fonctionnelle.',
      features: [
        '1 passage par semaine',
        'Toutes les prestations de la formule Essentielle',
        'Aspiration du bassin / robot si nécessaire',
        'Nettoyage complet de la piscine (fond, parois, ligne d’eau)',
        'Petite maintenance (joints, graissage, colmatage mineur)',
      ],
      isHighlighted: true, // Cette formule sera mise en avant
    },
    {
      name: 'Premium Sérénité',
      price: '2 500 MAD/mois',
      description: 'L\'entretien sans soucis, avec un service prioritaire et des produits inclus.',
      features: [
        '2 passages par semaine',
        'Toutes les prestations de la formule Confort',
        'Produits de traitement inclus (chlore, pH-, floculant de base)',
        'Rapport digital mensuel (photos + suivi technique)',
        'Assistance prioritaire en cas de panne',
      ],
      isHighlighted: false,
    },
  ];

  const additionalServices = [
    { name: 'Mise en hivernage', price: 'Dès 2 500 MAD (forfait)' },
    { name: 'Réouverture / mise en service au printemps', price: 'Dès 2 500 MAD' },
    { name: 'Intervention ponctuelle (nettoyage “choc”)', price: 'Sur devis' },
  ];

  return (
    <section  id="entretien-section" className={styles.pricingSection}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nos formules d&apos;entretien mensuel</h1>
        <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitIcon} />
                <p>Eau saine & claire</p>
            </div>
            <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitIcon} />
                <p>Durée de vie des équipements prolongée</p>
            </div>
            <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitIcon} />
                <p>Tranquillité d&apos;esprit</p>
            </div>
            <div className={styles.benefitItem}>
                <FaCheckCircle className={styles.benefitIcon} />
                <p>Réparations coûteuses évitées</p>
            </div>
        </div>
      </div>

      <div className={styles.pricingGrid}>
        {pricingFormulas.map((formula, index) => (
          <div
            key={index}
            className={`${styles.pricingCard} ${formula.isHighlighted ? styles.highlightedCard : ''}`}
          >
            <h2 className={styles.cardName}>{formula.name}</h2>
            <p className={styles.cardPrice}>{formula.price}</p>
            <p className={styles.cardDescription}>{formula.description}</p>
            <ul className={styles.featureList}>
              {formula.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.contactButton}>
                <FaEnvelope /> Contactez-nous
              </Link>
              <a href="tel:+212123456789" className={styles.callButton}>
                <FaPhoneAlt /> Appelez-nous
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.additionalServices}>
        <h2 className={styles.additionalTitle}>Services additionnels</h2>
        <div className={styles.servicesList}>
          {additionalServices.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <FaInfoCircle className={styles.serviceIcon} />
              <span className={styles.serviceName}>{service.name} :</span>
              <span className={styles.servicePrice}>{service.price}</span>
            </div>
          ))}
        </div>
        <p className={styles.customQuote}>Pour toute demande spécifique ou intervention ponctuelle, n&apos;hésitez pas à nous demander un <Link href="/demande-de-devis" className={styles.quoteLink}>devis personnalisé</Link>.</p>
      </div>
    </section>
  );
};

export default MaintenanceCTASection;
