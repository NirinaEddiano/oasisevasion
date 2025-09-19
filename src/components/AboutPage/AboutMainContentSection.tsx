import React from 'react';
import Image from 'next/image';
import styles from './AboutMainContentSection.module.css';
import { FaCompass, FaHammer, FaHandshake, FaLightbulb, FaTools, FaGlobe } from 'react-icons/fa'; // Icônes pour les trois cartes

const AboutMainContentSection = () => {
  return (
    <section className={styles.mainContentSection}>
      <div className={styles.contentWrapper}>
        {/* Part 1 & 2 */}
        <div className={styles.topContent}>
          <div className={styles.leftTitleContainer}>
            <h2 className={styles.longTitle}>
              Notre Philosophie : L&apos;Art de l&apos;Eau au Service de votre <span className={styles.highlight}>Exception</span>
            </h2>
          </div>
          <div className={styles.rightTextContainer}>
            <p className={styles.textParagraph}>
              Chez Oasis Évasion, nous concevons des bassins d&apos;exception qui ne ressemblent à aucune autre piscine. Architecte designer en France depuis de nombreuses années, je mets aujourd&apos;hui mon savoir-faire au service du Maroc, où je réside désormais, pour créer des espaces aquatiques uniques et raffinés. Chaque projet est pensé comme une œuvre sur mesure, alliant esthétisme, confort et innovation.
            </p>
            <p className={styles.textParagraph}>
              Après une carrière d&apos;architecte designer en France, où j&apos;ai conçu et supervisé de nombreux projets sur mesure, j&apos;ai choisi de mettre mon expérience au service du Maroc. Installé à Essaouira, je souhaite offrir une approche différente de la piscine : des créations uniques qui associent architecture, design et plaisir de l&apos;eau. Notre mission est de créer des bassins d&apos;exception qui deviennent de véritables œuvres architecturales et qui transforment un extérieur en un lieu de vie incomparable.
            </p>
          </div>
        </div>

        {/* Part 3: Three Cards */}
        <div className={styles.threeCardsGrid}>
          <div className={styles.card}>
            <FaCompass className={styles.cardIcon} />
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>Conception Architecturale</h3>
              <p className={styles.cardDescription}>Chaque piscine est une œuvre unique, pensée et dessinée sur mesure, intégrée harmonieusement à son environnement.</p>
            </div>
          </div>
          <div className={styles.card}>
            <FaHammer className={styles.cardIcon} />
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>Maîtrise de la Réalisation</h3>
              <p className={styles.cardDescription}>De la première esquisse à la dernière finition, un suivi rigoureux garantit une qualité irréprochable et durable.</p>
            </div>
          </div>
          <div className={styles.card}>
            <FaHandshake className={styles.cardIcon} />
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>Accompagnement Personnalisé</h3>
              <p className={styles.cardDescription}>Nous sommes à vos côtés à chaque étape, offrant conseils d'experts et écoute attentive pour concrétiser votre vision.</p>
            </div>
          </div>
        </div>

        {/* Part 4: Image and Video */}
        <div className={styles.imageVideoSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/about-team-work.jpg" // Image de l'équipe ou d'un chantier
              alt="Équipe Oasis Évasion en action"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 75vw"
              className={styles.largeImage}
            />
          </div>
          <div className={styles.videoContainer}>
          <Image
              src="/images/pool-process.jpg" // Image de l'équipe ou d'un chantier
              alt="Équipe Oasis Évasion en action"
              fill
              className={styles.overlayVideo}
            />
            {/* Le texte est maintenant directement dans le conteneur de la vidéo pour être mieux géré */}
            <div className={styles.videoTextOverlay}>
              <h3 className={styles.videoOverlayTitle}>Notre Processus</h3>
              <p className={styles.videoOverlayDescription}>
                Découvrez la passion et la précision qui animent chaque étape de nos réalisations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMainContentSection;