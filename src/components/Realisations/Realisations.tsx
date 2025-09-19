// src/components/Realisations/Realisations.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import de Link
import styles from './Realisations.module.css';
import { FaEye, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import des modules Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import des styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';

// Import des données de réalisations
import { realisationsData } from '@/data/realisationsData'; // Utilise les données centralisées

const Realisations = () => {
  return (
    <section id="realisations" className={styles.realisationsSection}>
      <div className={styles.realisationsTitleContainer}>
        <h2 className={styles.sectionTitle}>
          Nos <span className={styles.highlight}>Réalisations</span> d'exception.
        </h2>
        <p className={styles.sectionDescription}>
          Découvrez une galerie de nos projets les plus emblématiques, où chaque piscine raconte une histoire de design et d&apos;innovation.
        </p>
      </div>

      <div className={styles.carouselContainer}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={60}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className={styles.realisationsSwiper}
        >
          {realisationsData.map((item, index) => ( // Utilise realisationsData importé
            <SwiperSlide key={index}>
              <div className={styles.realisationCard}>
                <Image
                  src={item.cardImage} // Utilise cardImage de realisationsData
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                  className={styles.cardImage}
                />
                <Link href={`/realisations/${item.slug}`} className={styles.cardLinkOverlay}> {/* Lien sur toute la carte */}
                  <div className={styles.cardTextOverlay}>
                    <div>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardSubtitle}>{item.subtitle}</p>
                    </div>
                    <div className={styles.eyeIcon}>
                      <FaEye />
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`${styles.swiperButtonPrev} swiper-button-prev-custom`}>
          <FaArrowLeft />
        </div>
        <div className={`${styles.swiperButtonNext} swiper-button-next-custom`}>
          <FaArrowRight />
        </div>
      </div>

      <Link href="/realisations" className={styles.allRealisationsButton}> {/* Lien vers la page de listing */}
        <FaArrowRight size={16} />
        <span>Voir toutes les réalisations</span>
      </Link>
    </section>
  );
};

export default Realisations;