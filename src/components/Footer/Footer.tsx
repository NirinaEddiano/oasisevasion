import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { servicesData } from '@/data/servicesData'; // Import des données de services
import { equipmentsData } from '@/data/equipmentsData';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Partie 1: Logo, Description et Réseaux Sociaux */}
        <div className={styles.footerPart}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image src="/oasis-evasion-logo.png" alt="Oasis Évasion Logo" width={150} height={100} className={styles.Logo} />
            </Link>
          </div>
          <p className={styles.descriptionText}>
            Architecte designer au Maroc, nous créons des bassins d&apos;exception : des piscines uniques, innovantes et sur mesure.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Partie 2: Navigation Rapide */}
        <div className={styles.footerPart}>
          <h3 className={styles.partTitle}>Navigation Rapide</h3>
          <ul className={styles.navLinks}>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/realisations">Réalisations</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className={styles.footerPart}>
          <h3 className={styles.partTitle}>Nos Équipements</h3>
          <ul className={styles.navLinks}>
            {equipmentsData.map((category) => (
              <li key={category.id}>
                <Link href={`/equipement/${category.slug}`}>
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerPart}>
          <h3 className={styles.partTitle}>Nos Services</h3>
          <ul className={styles.navLinks}>
            {servicesData.map((service) => (
              <li key={service.id}>
                <Link href={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Partie 3: Contact */}
        <div className={styles.footerPart}>
          <h3 className={styles.partTitle}>Contactez-nous</h3>
          <ul className={styles.contactInfo}>
            <li>
              <FaEnvelope />
              <a href="mailto:Wf.groupe@gmail.com">Wf.groupe@gmail.com</a>
            </li>
            <li>
              <FaPhoneAlt />
              <a href="tel:+2120687389435"></a>
            </li>
            <li>
              <FaMapMarkerAlt />
              <span> Maroc</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} Oasis Évasion. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
