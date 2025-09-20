'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import styles from './page.module.css';

// --- Composant Hero Section (inchangé) ---
interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imageUrl }) => {
  return (
    <section className={styles.heroSection}>
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="100vw"
        priority
        className={styles.heroImage}
      />
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDescription}>{description}</p>
      </div>
    </section>
  );
};

// --- Composant Call to Action (CTA) Section (inchangé) ---
interface QuoteCtaSectionProps {
  title: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

const QuoteCtaSection: React.FC<QuoteCtaSectionProps> = ({ title, imageUrl, buttonText, buttonLink }) => {
  const overlayStyle = {
    background: `linear-gradient(90deg, var(--color-marine-blue)CC, var(--color-water-blue)CC)`,
  };

  return (
    <section className={styles.quoteCtaSection}>
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="100vw"
        className={styles.quoteCtaImage}
      />
      <div className={styles.overlay} style={overlayStyle}></div>
      <div className={styles.quoteCtaContent}>
        <h2 className={styles.quoteCtaTitle}>{title}</h2>
        <Link href={buttonLink} className={styles.quoteCtaButton}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

// --- Composant principal de la page Contact ---
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(data.message || 'Votre message a été envoyé !');
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Échec de l\'envoi du message. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      setSubmitStatus('error');
      setSubmitMessage('Une erreur inattendue est survenue. Veuillez vérifier votre connexion ou réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Section Hero de la page Contact */}
      <HeroSection
        title="Contactez-nous"
        description="Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous laisser un message."
        imageUrl="/images/contact-hero-bg.jpg"
      />

      {/* Section principale avec Formulaire et Informations de Contact */}
      <section className={styles.mainContactSection}>
        {/* Partie Gauche : Formulaire de Contact */}
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Une question ? Un projet ? Écrivez-nous !</h2>
          <p className={styles.formIntroText}>
            Utilisez ce formulaire pour toute demande d'information générale, partenariat ou question sur nos services. Pour une demande de devis détaillée, veuillez consulter notre section dédiée ou nous contacter directement.
          </p>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className="sr-only">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom complet"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.inputField}
                disabled={isSubmitting}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className="sr-only">Adresse e-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre adresse e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.inputField}
                disabled={isSubmitting}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className="sr-only">Numéro de téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Votre numéro de téléphone (optionnel)"
                value={formData.phone}
                onChange={handleChange}
                className={styles.inputField}
                disabled={isSubmitting}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className="sr-only">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Sujet de votre message"
                value={formData.subject}
                onChange={handleChange}
                required
                className={styles.inputField}
                disabled={isSubmitting}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className="sr-only">Votre message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message détaillé..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textareaField}
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'} <FaPaperPlane size={16} />
            </button>
            {submitStatus && (
              <p className={`${styles.submitFeedback} ${submitStatus === 'success' ? styles.success : styles.error}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>

        {/* Partie Droite : Informations de Contact et Carte */}
        <div className={styles.infoContainer}>
          <p className={styles.infoIntroText}>
            Nous sommes une entreprise dédiée à la conception et la réalisation de piscines d'exception, ainsi qu'à la distribution d'équipements de haute qualité. Que vous soyez un particulier ou un professionnel, notre équipe est prête à vous accompagner dans vos projets aquatiques. Pour toute information complémentaire, n'hésitez pas à nous solliciter.
          </p>

          <div className={styles.contactCardsGrid}>
            <div className={styles.contactCard}>
              <FaPhoneAlt size={40} className={styles.contactIcon} />
              <h4 className={styles.contactCardTitle}>Téléphone</h4>
              <p className={styles.contactCardText}><a href="tel:+2120687389435">+212 6 87 38 94 35</a></p>
            </div>
            <div className={styles.contactCard}>
              <FaWhatsapp size={40} className={styles.contactIcon} />
              <h4 className={styles.contactCardTitle}>WhatsApp</h4>
              <p className={styles.contactCardText}><a href="https://wa.me/212687389435" target="_blank" rel="noopener noreferrer">+212 6 87 38 94 35</a></p>
            </div>
            <div className={styles.contactCard}>
              <FaEnvelope size={40} className={styles.contactIcon} />
              <h4 className={styles.contactCardTitle}>Email</h4>
              <p className={styles.contactCardText}><a href="mailto:Wf.groupe@gmail.com">Wf.groupe@gmail.com</a></p>
            </div>
            <div className={styles.contactCard}>
              <FaMapMarkerAlt size={40} className={styles.contactIcon} />
              <h4 className={styles.contactCardTitle}>Adresse</h4>
              <p className={styles.contactCardText}>
                 Maroc
              </p>
            </div>
          </div>

          <div className={styles.mapContainer}>
            {/* Remplacer 'YOUR_GOOGLE_MAPS_EMBED_URL' par l'URL d'intégration de votre carte Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.003943034966!2d-7.61905818480112!3d33.59013008073573!2m3!1f0!2f0!0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2eb292d3f41%3A0xe10360a4f5b9d36e!2sCasablanca!5e0!3m2!1sen!2sma!4v1678912345678!5m2!1sen!2sma"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de Oasis Évasion sur Google Maps"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Dernière section pour inciter à demander un devis */}
      <QuoteCtaSection
        title="Prêt à réaliser votre rêve aquatique ?"
        imageUrl="/images/cta-quote-bg.jpg"
        buttonText="Commencer dès maintenant"
        buttonLink="/demande-de-devis"
      />
    </div>
  );
};

export default ContactPage;
