// src/components/Navbar/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { FaPhoneAlt, FaEnvelope, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; // Import des icônes pour le menu burger
import { servicesData } from '@/data/servicesData';
import { equipmentsData } from '@/data/equipmentsData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isServicesHovered, setIsServicesHovered] = useState<boolean>(false);
  const [isEquipementsHovered, setIsEquipementsHovered] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // État pour le menu burger mobile
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState<boolean>(false); // Pour le dropdown Services en mobile
  const [isMobileEquipementsOpen, setIsMobileEquipementsOpen] = useState<boolean>(false); // Pour le dropdown Équipement en mobile

  const pathname: string = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Ferme le menu burger lorsque la route change
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsMobileServicesOpen(false); // Réinitialiser les sous-menus mobiles
      setIsMobileEquipementsOpen(false);
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const headerClasses: string = `${styles.header} ${scrolled ? styles.scrolled : styles.transparent}`;
  const isRealisationsActive: boolean = pathname === '/realisations' || pathname.startsWith('/realisations/');
  const isDemandeDevisActive: boolean = pathname === '/demande-de-devis';

  const handleServicesClick = (e: React.MouseEvent) => {
    // Si sur mobile et le menu est ouvert, basculer le sous-menu
    if (window.innerWidth <= 1024) { // Utiliser un breakpoint similaire à votre CSS
      e.preventDefault(); // Empêche la navigation immédiate
      setIsMobileServicesOpen(prev => !prev);
      setIsMobileEquipementsOpen(false); // Ferme l'autre sous-menu si ouvert
    }
  };

  const handleEquipementsClick = (e: React.MouseEvent) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setIsMobileEquipementsOpen(prev => !prev);
      setIsMobileServicesOpen(false); // Ferme l'autre sous-menu si ouvert
    }
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileEquipementsOpen(false);
  };

  return (
    <header className={headerClasses}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link href="/" onClick={closeMobileMenu}>
            <Image src="/oasis-evasion-logo.png" alt="Oasis Évasion Logo" width={56} height={65} className={styles.logo} priority />
          </Link>
        </div>

        {/* Bouton Burger */}
        <div className={styles.burgerMenuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Menu principal et actions (version desktop/mobile) */}
        <div className={`${styles.menuContainer} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.menu}>
            <li><Link href="/" className={pathname === '/' ? styles.activeLink : ''} onClick={closeMobileMenu}>Accueil</Link></li>
            <li><Link href="/a-propos" className={pathname === '/a-propos' ? styles.activeLink : ''} onClick={closeMobileMenu}>À propos</Link></li>
            <li
              className={styles.servicesMenuItem}
              onMouseEnter={() => window.innerWidth > 1024 && setIsServicesHovered(true)}
              onMouseLeave={() => window.innerWidth > 1024 && setIsServicesHovered(false)}
            >
              <Link
                href="/services"
                className={pathname.startsWith('/services') ? styles.activeLink : ''}
                onClick={handleServicesClick} // Gère le clic pour mobile
              >
                Services <FaChevronDown size={10} className={`${styles.dropdownArrow} ${isServicesHovered || isMobileServicesOpen ? styles.rotated : ''}`} />
              </Link>
              {(isServicesHovered || isMobileServicesOpen) && (
                <ul className={styles.dropdownMenu}>
                  {servicesData.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/services/${service.slug}`}
                        className={pathname === `/services/${service.slug}` ? styles.activeDropdownLink : ''}
                        onClick={closeMobileMenu} // Ferme le menu entier et le sous-menu
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              className={styles.servicesMenuItem}
              onMouseEnter={() => window.innerWidth > 1024 && setIsEquipementsHovered(true)}
              onMouseLeave={() => window.innerWidth > 1024 && setIsEquipementsHovered(false)}
            >
              <Link
                href="/equipement"
                className={pathname.startsWith('/equipement') ? styles.activeLink : ''}
                onClick={handleEquipementsClick} // Gère le clic pour mobile
              >
                Équipement <FaChevronDown size={10} className={`${styles.dropdownArrow} ${isEquipementsHovered || isMobileEquipementsOpen ? styles.rotated : ''}`} />
              </Link>
              {(isEquipementsHovered || isMobileEquipementsOpen) && (
                <ul className={styles.dropdownMenu}>
                  {equipmentsData.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/equipement/${category.slug}`}
                        className={pathname === `/equipement/${category.slug}` ? styles.activeDropdownLink : ''}
                        onClick={closeMobileMenu}
                      >
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link href="/realisations" className={isRealisationsActive ? styles.activeLink : ''} onClick={closeMobileMenu}>Réalisations</Link></li>
            <li><Link href="/contact" className={pathname === '/contact' ? styles.activeLink : ''} onClick={closeMobileMenu}>Contact</Link></li>
          </ul>

          <div className={styles.actions}>
            <Link href="/demande-de-devis" className={`${styles.button} ${styles.quoteButton} ${isDemandeDevisActive ? styles.activeQuoteButton : ''}`} onClick={closeMobileMenu}>
              <FaEnvelope size={16} />
              <span>Demander un devis</span>
            </Link>
            <a href="tel:+212687389435" className={`${styles.button} ${styles.callButton}`} onClick={closeMobileMenu}>
              <FaPhoneAlt size={16} />
              <span>Appeler Maintenant</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
