// src/app/equipement/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { equipmentsData } from '@/data/equipmentsData';
import styles from './EquipmentCategoryPage.module.css';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';

// Génère statiquement les chemins pour les slugs
export async function generateStaticParams() {
  return equipmentsData.map((category) => ({
    slug: category.slug,
  }));
}

export default function EquipmentCategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const category = equipmentsData.find((cat) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  // Filtrer les autres catégories pour le carousel
  const otherCategories = equipmentsData.filter((cat) => cat.slug !== slug);

  return (
    <div className={styles.equipmentCategoryPage}>
      {/* Section Hero */}
      <section
        className={styles.heroSection}
        style={{ backgroundImage: `url(${category.imageUrl})` }} // <--- MODIFICATION ICI
      >
        {/* L'overlay et le contenu restent les mêmes */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{category.title}</h1>
          <p className={styles.heroDescription}>{category.description}</p>
        </div>
      </section>

      {/* Section de présentation et de détails des équipements */}
      <section className={styles.equipmentDetailSection}>
        <div className={styles.container}>
          {category.equipmentItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.equipmentItem} ${
                index % 2 === 0 ? styles.layoutLeft : styles.layoutRight
              }`}
            >
              <div className={styles.equipmentTextContent}>
                <h2 className={styles.equipmentItemTitle}>{item.title}</h2>
                <p className={styles.equipmentItemDescription}>{item.description}</p>
                <Link href="/contact" className={styles.quoteButton}>
                  <FaEnvelope size={16} /> Demander un devis
                </Link>
              </div>
              <div className={styles.equipmentImageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.equipmentImage}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Carousel pour naviguer vers les autres catégories */}
      {otherCategories.length > 0 && (
        <section className={styles.carouselSection}>
          <h2 className={styles.carouselTitle}>Découvrez nos autres catégories d&apos;équipements</h2>
          <div className={styles.carouselContainer}>
            {otherCategories.map((otherCat) => (
              <div key={otherCat.id} className={styles.carouselCard}>
                <div className={styles.carouselImageWrapper}>
                  <Image
                    src={otherCat.imageUrl}
                    alt={otherCat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.carouselCardImage}
                  />
                </div>
                <h3 className={styles.carouselCardTitle}>{otherCat.title}</h3>
                <Link href={`/equipement/${otherCat.slug}`} className={styles.carouselButton}>
                  Découvrir <FaArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}