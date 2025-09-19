// src/components/ServicePage/ServiceConstructionDetails.tsx
import React from 'react';
import Image from 'next/image';
import styles from './ServiceConstructionDetails.module.css';
import { Service } from '@/data/servicesData'; // Import de l'interface Service mise à jour

interface ServiceConstructionDetailsProps {
  service: Service;
}

const ServiceConstructionDetails: React.FC<ServiceConstructionDetailsProps> = ({ service }) => {
  // Ne rend rien si aucune donnée spécifique n'est fournie pour cette section
  if (!service.constructionSteps ) {
    return null;
  }

  return (
    <section className={styles.constructionDetailsSection}>
      <div className={styles.container}>
        {/* Section des Étapes de Construction */}
        {service.constructionSteps && service.constructionSteps.length > 0 && (
          <>
            {service.constructionHeadline && (
              <h2 className={styles.sectionHeadline}>
                {service.constructionHeadline.split(' ').map((word, index) => (
                  word.toLowerCase() === 'votre' || word.toLowerCase() === 'notre' || word.toLowerCase() === 'de' || word.toLowerCase() === 'la' || word.toLowerCase() === 'l\'' ?
                    <span key={index}>{word} </span> :
                    <span key={index} className={styles.highlight}>{word} </span>
                ))}
              </h2>
            )}
            {service.constructionDescription && (
              <p className={styles.sectionIntro}>{service.constructionDescription}</p>
            )}

            <div className={styles.stepsContainer}>
              {service.constructionSteps.map((step, index) => (
                <div key={index} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{step.stepNumber}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                  {step.image && (
                    <div className={styles.stepImageWrapper}>
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 767px) 90vw, (max-width: 1024px) 45vw, 300px" // Adjusted sizes for responsiveness
                        className={styles.stepImage}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default ServiceConstructionDetails;