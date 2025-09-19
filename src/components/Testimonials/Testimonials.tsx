'use client'; // Indique que c'est un composant client

import React from 'react';
import styles from './Testimonials.module.css';
import { FaStar, FaArrowRight } from 'react-icons/fa';

// Fonction utilitaire pour obtenir les initiales
const getInitials = (name: string) => {
  const parts = name.split(' ');
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

const testimonialsData = [
  {
    text: "Nous ne voulions pas une piscine classique mais un projet unique : Oasis Évasion a conçu un bassin qui est devenu la pièce maîtresse de notre maison.",
    author: "Fanny B.",
    role: "Propriétaire à Marrakech",
    stars: 5,
  },
  {
    text: "Une approche d’architecte qui change tout : précision, créativité et élégance. Le résultat a dépassé toutes nos attentes.",
    author: "Karim A.",
    role: "Investisseur à Casablanca",
    stars: 5,
  },
  {
    text: "Aujourd’hui, nous avons une piscine qui ne ressemble à aucune autre. Merci à Oasis Évasion pour leur écoute et leur professionnalisme !",
    author: "Sophie M.",
    role: "Client satisfait à Rabat",
    stars: 5,
  },
  {
    text: "L'équipe d'Oasis Évasion a transformé notre jardin en une véritable oasis de fraîcheur. Un travail impeccable et un suivi irréprochable.",
    author: "Ahmed L.",
    role: "Résident à Fès",
    stars: 5,
  },
  {
    text: "De la conception à la réalisation, tout a été géré avec maîtrise et un sens du détail incroyable. Notre piscine est une œuvre d'art.",
    author: "Nadia D.",
    role: "Architecte d'intérieur, Agadir",
    stars: 5,
  },
  {
    text: "Ils ont su capter notre vision pour créer un espace aquatique unique. Un service client exceptionnel et un rendu magnifique.",
    author: "Youssef K.",
    role: "Hôtelier, Essaouira",
    stars: 5,
  },
  {
    text: "Une entreprise sérieuse et créative. Notre projet de rénovation a donné une nouvelle vie à notre piscine. Nous sommes enchantés !",
    author: "Amine S.",
    role: "Propriétaire à Tanger",
    stars: 5,
  },
  // Dupliquez les témoignages pour un effet de défilement continu
  // Ajoutez-en plus si vous voulez plus de variété avant la duplication
  ...[
    {
      text: "La qualité des matériaux et la précision de l'exécution sont remarquables. Oasis Évasion est la référence au Maroc.",
      author: "Sarah R.",
      role: "Experte en design",
      stars: 5,
    },
    {
      text: "Un projet de piscine qui a été un véritable plaisir du début à la fin. L'équipe est passionnée et cela se voit dans le résultat.",
      author: "Omar G.",
      role: "Client heureux",
      stars: 5,
    }
  ],
];

// Pour un effet de défilement continu avec une seule ligne, nous devons dupliquer les données
// afin que lorsque la fin est atteinte, le début puisse apparaître sans saut visible.
// Un nombre suffisant de duplications est nécessaire pour couvrir la largeur du conteneur.
const duplicatedTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];

const Testimonials = () => {
  return (
    <section id="avis" className={styles.testimonialsSection}>
      <div className={styles.testimonialsTitleContainer}>
        <h2 className={styles.sectionTitle}>
          Ce que disent nos <span className={styles.highlight}>clients</span>.
        </h2>
        <p className={styles.sectionDescription}>
          La satisfaction de nos clients est notre plus belle récompense. Découvrez leurs témoignages.
        </p>
      </div>

      <div className={styles.testimonialsWrapper}> {/* Conteneur pour la rangée unique et les overlays de transparence */}
        <div className={styles.testimonialsRow}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`testimonial-${index}`} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className={styles.reviewText}>{testimonial.text}</p>
              <div className={styles.reviewerInfo}>
                <div className={styles.reviewerAvatar}>
                  {getInitials(testimonial.author)}
                </div>
                <div className={styles.reviewerDetails}>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;