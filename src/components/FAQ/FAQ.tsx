"use client"; // Indique que ce composant est un Client Component
import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa'; // FaQuestionCircle pour le bouton

// Données des FAQ
const faqData = [
  {
    question: "Qu’est-ce qui différencie Oasis Évasion d’un pisciniste classique ?",
    answer: [
      "Chaque projet est une création unique, conçue par un architecte designer. Nous ne faisons pas de piscines standardisées, mais des bassins d’exception, véritables prolongements de votre art de vivre.",
    ],
  },
  {
    question: "Pouvez-vous intervenir dans tout le Maroc ?",
    answer: [
      "Oui, nous sommes basés à Essaouira, mais notre expertise nous permet d'intervenir dans toutes les régions du Maroc en fonction de l'envergure et de la spécificité de votre projet. Contactez-nous pour en discuter !",
    ],
  },
  {
    question: "Est-il possible de personnaliser entièrement ma piscine ?",
    answer: [
      "Absolument. La personnalisation est au cœur de notre démarche. Tout est pensé sur mesure : formes, matériaux, revêtements, intégration paysagère, options de traitement et équipements connectés. Votre piscine sera unique.",
    ],
  },
  {
    question: "Quelle est votre approche en matière de design ?",
    answer: [
      "Nous abordons chaque piscine comme une œuvre architecturale. Notre processus intègre une étude approfondie de votre environnement, de vos désirs et des dernières tendances pour créer un design intemporel et fonctionnel.",
    ],
  },
  {
    question: "Proposez-vous des solutions écologiques ?",
    answer: [
      "Oui, l'écologie est une préoccupation majeure. Nous privilégions les systèmes de filtration à faible consommation, les pompes à chaleur performantes, et les traitements de l'eau écologiques comme l'électrolyse au sel, pour une piscine respectueuse de l'environnement.",
    ],
  },
  {
    question: "Comment se déroule la gestion de projet ?",
    answer: [
      "Nous assurons un accompagnement personnalisé et un suivi complet de votre projet, de l'étude initiale à la mise en service. Un interlocuteur unique est dédié pour garantir une communication fluide et une réalisation sans accroc.",
    ],
  },
];

const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className={styles.faqItem}>
      <button
        className={styles.faqQuestionButton}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <div className={`${styles.arrowIcon} ${isOpen ? styles.open : ''}`}>
          <FaChevronDown size={14} />
        </div>
      </button>
      <div className={`${styles.faqAnswerContainer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.faqAnswerContent}>
          {item.answer.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.faqTitleContainer}>
        <h2 className={styles.sectionTitle}>
          Vos questions, nos <span className={styles.highlight}>réponses</span>.
        </h2>
        <p className={styles.sectionDescription}>
          Retrouvez ici les réponses aux interrogations les plus fréquentes sur nos services et notre philosophie.
        </p>
      </div>

      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>

      <a href="/contact" className={styles.contactFaqButton}>
        <FaQuestionCircle size={16} />
        <span>Une question ? Contactez-nous</span>
      </a>
    </section>
  );
};

export default FAQ;