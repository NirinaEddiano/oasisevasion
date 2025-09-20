'use client'; // Indique que c'est un composant client pour utiliser les hooks

import { useState, useEffect } from 'react'; // Importez useState et useEffect
import styles from './Hero.module.css';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaDraftingCompass, FaSyncAlt, FaPalette, FaUserTie } from 'react-icons/fa';

// Données pour les cartes de service pour éviter la répétition
const services = [
  {
    icon: <FaDraftingCompass size={24} />,
    title: 'Conception & Construction',
    description: 'Des bassins sur mesure pensés comme des créations architecturales.',
    highlighted: false,
  },
  {
    icon: <FaSyncAlt size={24} />,
    title: 'Rénovation & Transformation',
    description: 'Donnez une nouvelle vie et sublimez votre piscine existante.',
    highlighted: true, // Cette carte sera mise en avant
  },
  {
    icon: <FaPalette size={24} />,
    title: 'Aménagements Extérieurs',
    description: 'Intégration paysagère, terrasses et solutions design.',
    highlighted: false,
  },
  {
    icon: <FaUserTie size={24} />,
    title: 'Accompagnement Personnalisé',
    description: 'Étude, conseils et suivi complet de votre projet du début à la fin.',
    highlighted: false,
  },
];


const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Retarde l'animation pour un effet plus fluide au chargement de la page
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h4 className={`${styles.preTitle} ${isMounted ? styles.animatedIn : ''}`}>Créateurs de piscines sur mesure au Maroc</h4>
        <h1 className={`${styles.mainTitle} ${isMounted ? styles.animatedIn : ''}`}>
          Des bassins d’exception qui deviennent de véritables <span className={styles.highlight}>œuvres architecturales</span>.
        </h1>
        <p className={`${styles.description} ${isMounted ? styles.animatedIn : ''}`}>
          Nous ne concevons pas de simples piscines, mais des espaces de vie uniques qui transforment votre extérieur en une oasis de bien-être.
        </p>
        <div className={`${styles.actions} ${isMounted ? styles.animatedIn : ''}`}>
           <Link href="/demande-de-devis" className={`${styles.button} ${styles.quoteButton}`}>
              <FaEnvelope size={16} />
              <span>Demander un devis</span>
            </Link>
          <a href="tel:+212687389435" className={`${styles.button} ${styles.callButton}`}>
            <FaPhoneAlt size={16} />
            <span>Appeler Maintenant</span>
          </a>
        </div>
      </div>

      {/* La grille des services est affichée uniquement sur desktop par défaut et masquée via CSS sur mobile/tablette */}
      <div className={`${styles.servicesGrid} ${isMounted ? styles.animatedIn : ''}`}>
        {services.map((service, index) => (
          <div key={index} className={`${styles.serviceCard} ${service.highlighted ? styles.highlightedCard : ''}`}>
            <div className={styles.cardIcon}>{service.icon}</div>
            <div className={styles.cardText}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
