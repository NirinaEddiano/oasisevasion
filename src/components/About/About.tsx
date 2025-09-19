import React from 'react';
import styles from './About.module.css';
import { FaInfoCircle , FaLightbulb, FaTrophy  } from 'react-icons/fa'; // Icônes pour les boutons

const About = () => {
  const descriptionText = `Chez Oasis Évasion, nous concevons des bassins d’exception qui ne ressemblent à aucune autre piscine. Fort de nombreuses années d'expérience en tant qu'architecte designer en France, je mets aujourd’hui mon savoir-faire au service du Maroc pour créer des espaces aquatiques uniques et raffinés. Chaque projet est une œuvre sur mesure, alliant esthétisme, confort et innovation.`;

  return (
    <section className={styles.aboutSection}>
      {/* Partie gauche : Images (sera masquée en responsive via CSS) */}
      <div className={styles.aboutImages}>
        <div className={styles.aboutImageWrapper}> {/* Nouveau wrapper pour l'image et l'infoBox */}
          <img src="/images/pool-design-sketch.jpg" alt="Conception de piscine sur mesure" className={styles.aboutImage} />
          <div className={styles.infoBox}>
            <FaLightbulb size={20} />
            <span>Innovation & Esthétisme</span>
          </div>
        </div>
        <div className={styles.aboutImageWrapperShifted}> {/* Nouveau wrapper décalé */}
          <div className={styles.infoBox}>
            <FaTrophy size={20} />
            <span>15+ ans d&apos;expérience</span>
          </div>
          <img src="/images/luxury-pool-morocco.jpg" alt="Piscine de luxe au Maroc" className={styles.aboutImage} />
        </div>
      </div>

      {/* Partie droite : Texte et Boutons (sera toujours visible) */}
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>
          À propos de <span className={styles.highlight}>nous</span>
        </h2>
        <p className={styles.aboutDescription}>
          {descriptionText}
        </p>
        <div className={styles.aboutActions}>
          <a href="/a-propos" className={`${styles.button} ${styles.primaryButton}`}>
            <FaInfoCircle size={16} />
            <span>Voir plus</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;