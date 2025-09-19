// src/app/demande-de-devis/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Import des icônes
import {
  FaSwimmingPool, FaWater, FaSpa, FaHotTub, FaShower, FaPlus, // Étapes 1
  FaFilter, FaShieldAlt, FaThermometerHalf, FaArrowLeft, FaArrowRight, FaPaperPlane, // Boutons de navigation, filtres, sécurité, température
  FaLightbulb, FaHome, FaLeaf, FaMusic, FaUser, // Corrected: FaStairs for stairs, FaLightbulb, FaHome, FaLeaf, FaMusic, FaUser added to imports
} from 'react-icons/fa';

// Import d'icônes supplémentaires de fa6 pour les formes si souhaité
import { FaSquareParking, FaRegSquare, FaBezierCurve, FaCircle } from 'react-icons/fa6';


// --- Définition de l'interface FormData pour un meilleur typage ---
interface FormData {
  projectType: string;
  piscineStyle: string;
  piscineLength: string;
  piscineWidth: string;
  piscineDepthMin: string;
  piscineDepthMax: string;
  piscineShape: string;
  piscineBottomType: string;
  piscineWaterColor: string;
  lagonSize: string;
  lagonLandscaping: string;
  spaPlaces: string;
  spaIndoorOutdoor: string;
  spaOptions: string[]; // Explicitly typed as string[]
  jacuzziPlaces: string;
  jacuzziIndoorOutdoor: string;
  jacuzziOptions: string[]; // Explicitly typed as string[]
  hammamPlaces: string;
  hammamOptions: string[]; // Explicitly typed as string[]
  otherDescription: string;

  // Étape 2 Piscine
  piscineFiltration: string;
  piscineStairShape: string;
  piscineSecurity: string[]; // Explicitly typed as string[]
  piscineComfort: string[]; // Explicitly typed as string[]

  // Étape 2 Lagon
  lagonSwimZone: string;
  lagonBeach: string;
  lagonLining: string;

  // Étape 2 Spa/Jacuzzi/Hammam
  spaJetType: string;
  spaExtraFeatures: string[]; // Explicitly typed as string[]
  spaMaterials: string[]; // Explicitly typed as string[]
  jacuzziJetType: string;
  jacuzziExtraFeatures: string[]; // Explicitly typed as string[]
  jacuzziMaterials: string[]; // Explicitly typed as string[]
  hammamFeatures: string[]; // Explicitly typed as string[]
  hammamMaterials: string[]; // Explicitly typed as string[]

  // Étape 3 Client Info
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  acceptTerms: boolean;
}

// Initialisation de formData avec le type défini
const initialFormData: FormData = {
  projectType: '',
  piscineStyle: '',
  piscineLength: '',
  piscineWidth: '',
  piscineDepthMin: '',
  piscineDepthMax: '',
  piscineShape: '',
  piscineBottomType: '',
  piscineWaterColor: '',
  lagonSize: '',
  lagonLandscaping: '',
  spaPlaces: '',
  spaIndoorOutdoor: '',
  spaOptions: [],
  jacuzziPlaces: '',
  jacuzziIndoorOutdoor: '',
  jacuzziOptions: [],
  hammamPlaces: '',
  hammamOptions: [],
  otherDescription: '',

  piscineFiltration: '',
  piscineStairShape: '',
  piscineSecurity: [],
  piscineComfort: [],

  lagonSwimZone: '',
  lagonBeach: '',
  lagonLining: '',

  spaJetType: '',
  spaExtraFeatures: [],
  spaMaterials: [],
  jacuzziJetType: '',
  jacuzziExtraFeatures: [],
  jacuzziMaterials: [],
  hammamFeatures: [],
  hammamMaterials: [],

  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zipCode: '',
  country: 'Maroc',
  acceptTerms: false,
};

// --- Composant Hero Section ---
interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imageUrl }) => {
  const overlayStyle = {
    background: `linear-gradient(90deg, var(--color-water-blue)CC, var(--color-marine-blue)CC)`,
  };
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

// --- Composant Call to Action (CTA) Section ---
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


// --- Composant principal de la page de demande de devis ---
const DemandeDeDevisPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { name, value } = target;

    setFormData((prev) => {
      const fieldName = name as keyof FormData;
      const prevValue = prev[fieldName];
      let newValue: FormData[keyof FormData];

      // Handle checkboxes specifically
      if (target.type === 'checkbox') {
        const isChecked = (target as HTMLInputElement).checked; // Safe to cast to HTMLInputElement here
        if (Array.isArray(prevValue)) { // Handles arrays of checkboxes (e.g., piscineSecurity, piscineComfort)
          newValue = isChecked
            ? [...prevValue, value]
            : prevValue.filter((item) => item !== value);
        } else { // Handles single boolean checkboxes (e.g., acceptTerms)
          newValue = isChecked;
        }
      }
      // Handle textareas that store arrays (comma-separated strings)
      else if (target.tagName === 'TEXTAREA' && (
          fieldName === 'spaOptions' || fieldName === 'jacuzziOptions' || fieldName === 'hammamOptions' ||
          fieldName === 'spaExtraFeatures' || fieldName === 'spaMaterials' || fieldName === 'jacuzziExtraFeatures' ||
          fieldName === 'jacuzziMaterials' || fieldName === 'hammamFeatures' || fieldName === 'hammamMaterials'
        )) {
        newValue = value.split(',').map(s => s.trim()).filter(s => s.length > 0);
      }
      // Handle all other input types (text, number, select, radio)
      else {
        newValue = value;
      }
      return { ...prev, [fieldName]: newValue };
    });
  };


  const handleNextStep = () => {
    // Basic validation for current step before moving
    if (currentStep === 1) {
      if (!formData.projectType) {
        alert('Veuillez sélectionner un type de projet.');
        return;
      }
      // Add more specific validation here based on selected projectType
      if (formData.projectType === 'piscine' && (!formData.piscineStyle || !formData.piscineLength || !formData.piscineWidth || !formData.piscineShape)) {
        alert('Veuillez renseigner toutes les informations requises pour votre piscine (Style, Dimensions, Forme).');
        return;
      }
      if (formData.projectType === 'lagon' && !formData.lagonSize) {
        alert('Veuillez sélectionner une taille estimée pour votre lagon.');
        return;
      }
      if ((formData.projectType === 'spa' || formData.projectType === 'jacuzzi') && !formData.spaPlaces) {
        alert('Veuillez renseigner le nombre de places pour votre spa/jacuzzi.');
        return;
      }
      if (formData.projectType === 'hammam' && !formData.hammamPlaces) {
        alert('Veuillez renseigner la capacité souhaitée pour votre hammam.');
        return;
      }
      if (formData.projectType === 'autre' && !formData.otherDescription) {
        alert('Veuillez décrire votre projet.');
        return;
      }
    }
    if (currentStep === 2) {
      if (formData.projectType === 'piscine' && !formData.piscineFiltration) {
        alert('Veuillez sélectionner un système de filtration pour votre piscine.');
        return;
      }
      // You can add more specific validation for other project types/fields here
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert('Veuillez accepter les conditions d\'utilisation.');
      return;
    }
    // Basic final validation for contact info
    if (!formData.lastName || !formData.firstName || !formData.email || !formData.phone) {
      alert('Veuillez renseigner toutes vos coordonnées requises.');
      return;
    }

    console.log('Demande de devis soumise:', formData);
    alert('Votre demande de devis a été envoyée ! Nous vous contacterons rapidement.');
    // Here, you would typically send the formData to your backend or an email service.
    // Reset form after submission
    setFormData(initialFormData); // Utilise l'objet initial pour réinitialiser
    setCurrentStep(1); // Retour à la première étape
  };

  // Helper pour rendre les icônes de progression
  const renderStepIcon = (stepNum: number, Icon: React.ElementType) => (
    <div className={`${styles.stepIcon} ${currentStep === stepNum ? styles.active : ''} ${currentStep > stepNum ? styles.completed : ''}`}>
      <Icon />
      <span>Étape {stepNum}</span>
    </div>
  );


  return (
    <div>
      <HeroSection
        title="Votre devis personnalisé en 3 étapes"
        description="Décrivez-nous votre projet de rêve et obtenez une estimation gratuite et sans engagement."
        imageUrl="/images/demande-de-devis-hero-bg.jpg" // Image à ajouter
      />

      <section className={styles.quoteFormSection}>
        <div className={styles.progressIndicator}>
          {renderStepIcon(1, FaWater)}
          <div className={styles.progressBar}><div className={styles.progressBarFill} style={{ width: `${(currentStep - 1) * 50}%` }}></div></div>
          {renderStepIcon(2, FaFilter)}
          <div className={styles.progressBar}><div className={styles.progressBarFill} style={{ width: `${(currentStep - 1) * 50}%` }}></div></div>
          {renderStepIcon(3, FaUser)}
        </div>

        <form onSubmit={handleSubmit} className={styles.formContent}>
          {/* --- Étape 1: Type de Projet --- */}
          {currentStep === 1 && (
            <div className={styles.stepContainer}>
              <h2 className={styles.stepTitle}>1. Quel type de projet aquatique envisagez-vous ?</h2>
              <p className={styles.stepDescription}>Sélectionnez le type d'installation que vous souhaitez réaliser. Cela nous aidera à adapter les questions suivantes.</p>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Type de projet <span className={styles.required}>*</span></label>
                <div className={styles.radioGrid}>
                  <label className={styles.radioCard}>
                    <input
                      type="radio"
                      name="projectType"
                      value="piscine"
                      checked={formData.projectType === 'piscine'}
                      onChange={handleChange}
                      hidden
                    />
                    <div className={styles.radioCardContent}>
                      <FaSwimmingPool size={30} /> Piscine
                    </div>
                  </label>
                  <label className={styles.radioCard}>
                    <input
                      type="radio"
                      name="projectType"
                      value="lagon"
                      checked={formData.projectType === 'lagon'}
                      onChange={handleChange}
                      hidden
                    />
                    <div className={styles.radioCardContent}>
                      <FaWater size={30} /> Lagon
                    </div>
                  </label>
                  <label className={styles.radioCard}>
                    <input
                      type="radio"
                      name="projectType"
                      value="spa"
                      checked={formData.projectType === 'spa'}
                      onChange={handleChange}
                      hidden
                    />
                    <div className={styles.radioCardContent}>
                      <FaSpa size={30} /> Spa
                    </div>
                  </label>
                  <label className={styles.radioCard}>
                    <input
                      type="radio"
                      name="projectType"
                      value="jacuzzi"
                      checked={formData.jacuzziPlaces === 'jacuzzi'} // Changed here for consistency, but consider if this should be projectType === 'jacuzzi'
                      onChange={handleChange}
                      hidden
                    />
                    <div className={styles.radioCardContent}>
                      <FaHotTub size={30} /> Jacuzzi
                    </div>
                  </label>
                  <label className={styles.radioCard}>
                    <input
                      type="radio"
                      name="projectType"
                      value="hammam"
                      checked={formData.projectType === 'hammam'}
                      onChange={handleChange}
                      hidden
                    />
                    <div className={styles.radioCardContent}>
                      <FaShower size={30} /> Hammam
                    </div>
                  </label>
                  <label className={styles.radioCard}>
                    <input
                      type="radio"
                      name="projectType"
                      value="autre"
                      checked={formData.projectType === 'autre'}
                      onChange={handleChange}
                      hidden
                    />
                    <div className={styles.radioCardContent}>
                      <FaPlus size={30} /> Autre
                    </div>
                  </label>
                </div>
              </div>

              {/* Champs conditionnels pour 'Piscine' */}
              {formData.projectType === 'piscine' && (
                <>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Style de Piscine <span className={styles.required}>*</span></label>
                    <div className={styles.radioGridSmall}>
                      {['Familiale', 'Sportive', 'Mini-piscine', 'Miroir/Esthétique', 'Couloir de nage', 'Intérieure', 'Autre'].map(
                        (style) => (
                          <label key={style} className={styles.radioCardSmall}>
                            <input
                              type="radio"
                              name="piscineStyle"
                              value={style.toLowerCase().replace(/[^a-z0-9]/gi, '')}
                              checked={formData.piscineStyle === style.toLowerCase().replace(/[^a-z0-9]/gi, '')}
                              onChange={handleChange}
                              hidden
                            />
                            <div className={styles.radioCardContentSmall}>{style}</div>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Dimensions <span className={styles.required}>*</span></label>
                    <div className={styles.inputGroupInline}>
                      <input
                        type="number"
                        name="piscineLength"
                        placeholder="Longueur (m)"
                        value={formData.piscineLength}
                        onChange={handleChange}
                        required
                        className={styles.inputField}
                        min="1"
                      />
                      <input
                        type="number"
                        name="piscineWidth"
                        placeholder="Largeur (m)"
                        value={formData.piscineWidth}
                        onChange={handleChange}
                        required
                        className={styles.inputField}
                        min="1"
                      />
                      <input
                        type="number"
                        name="piscineDepthMin"
                        placeholder="Profondeur Min (m)"
                        value={formData.piscineDepthMin}
                        onChange={handleChange}
                        className={styles.inputField}
                        min="0.5"
                      />
                      <input
                        type="number"
                        name="piscineDepthMax"
                        placeholder="Profondeur Max (m)"
                        value={formData.piscineDepthMax}
                        onChange={handleChange}
                        className={styles.inputField}
                        min="0.5"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Forme <span className={styles.required}>*</span></label>
                    <div className={styles.radioGridSmall}>
                      <label className={styles.radioCardSmall}>
                        <input type="radio" name="piscineShape" value="rectangle" checked={formData.piscineShape === 'rectangle'} onChange={handleChange} hidden />
                        <div className={styles.radioCardContentSmall}><FaRegSquare /> Rectangulaire</div>
                      </label>
                      <label className={styles.radioCardSmall}>
                        <input type="radio" name="piscineShape" value="carree" checked={formData.piscineShape === 'carree'} onChange={handleChange} hidden />
                        <div className={styles.radioCardContentSmall}><FaSquareParking /> Carrée</div>
                      </label>
                      <label className={styles.radioCardSmall}>
                        <input type="radio" name="piscineShape" value="enL" checked={formData.piscineShape === 'enL'} onChange={handleChange} hidden />
                        <div className={styles.radioCardContentSmall}><FaBezierCurve /> En L</div>
                      </label>
                      <label className={styles.radioCardSmall}>
                        <input type="radio" name="piscineShape" value="surMesure" checked={formData.piscineShape === 'surMesure'} onChange={handleChange} hidden />
                        <div className={styles.radioCardContentSmall}><FaCircle /> Sur mesure</div>
                      </label>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Type de fond</label>
                    <select name="piscineBottomType" value={formData.piscineBottomType} onChange={handleChange} className={styles.selectField}>
                      <option value="">Sélectionnez un type de fond</option>
                      <option value="plat">Fond plat</option>
                      <option value="penteDouce">Pente douce</option>
                      <option value="compose">Fond composé</option>
                      <option value="fossePlonge">Fosse à plonger</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Couleur de l'eau souhaitée</label>
                    <select name="piscineWaterColor" value={formData.piscineWaterColor} onChange={handleChange} className={styles.selectField}>
                      <option value="">Sélectionnez une couleur</option>
                      <option value="bleuClair">Bleu clair (liner blanc)</option>
                      <option value="bleuProfond">Bleu profond (liner gris/noir)</option>
                      <option value="vertLagon">Vert lagon (liner sable/vert)</option>
                      <option value="grisAnthracite">Gris anthracite</option>
                      <option value="blancPur">Blanc pur (pour effet miroir)</option>
                    </select>
                  </div>
                </>
              )}

              {/* Champs conditionnels pour 'Lagon' */}
              {formData.projectType === 'lagon' && (
                <>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Taille estimée du Lagon</label>
                    <select name="lagonSize" value={formData.lagonSize} onChange={handleChange} className={styles.selectField}>
                      <option value="">Sélectionnez une taille</option>
                      <option value="petit">Petit (moins de 50m²)</option>
                      <option value="moyen">Moyen (50-150m²)</option>
                      <option value="grand">Grand (plus de 150m²)</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Aménagement paysager souhaité</label>
                    <textarea
                      name="lagonLandscaping"
                      placeholder="Décrivez vos envies d'aménagement paysager autour du lagon (roches, cascades, végétation...)"
                      rows={4}
                      value={formData.lagonLandscaping}
                      onChange={handleChange}
                      className={styles.textareaField}
                    ></textarea>
                  </div>
                </>
              )}

              {/* Champs conditionnels pour 'Spa' */}
              {formData.projectType === 'spa' && (
                <>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Nombre de places</label>
                    <input
                      type="number"
                      name="spaPlaces"
                      placeholder="Ex: 4, 6, 8"
                      value={formData.spaPlaces}
                      onChange={handleChange}
                      className={styles.inputField}
                      min="1"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Emplacement</label>
                    <select name="spaIndoorOutdoor" value={formData.spaIndoorOutdoor} onChange={handleChange} className={styles.selectField}>
                      <option value="">Intérieur ou Extérieur ?</option>
                      <option value="interieur">Intérieur</option>
                      <option value="exterieur">Extérieur</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Options supplémentaires (jets, chromothérapie...) <br/> <small>(Séparées par des virgules)</small></label>
                    <textarea
                      name="spaOptions"
                      placeholder="Décrivez les options de jets, chromothérapie, aromathérapie, etc."
                      rows={3}
                      value={formData.spaOptions.join(', ')} // Afficher le tableau comme une string pour la textarea
                      onChange={handleChange} // handleChange convertira en string[]
                      className={styles.textareaField}
                    ></textarea>
                  </div>
                </>
              )}

              {/* Champs conditionnels pour 'Jacuzzi' (similaire au Spa, peut être fusionné ou différencié) */}
              {formData.projectType === 'jacuzzi' && (
                <>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Nombre de places</label>
                    <input
                      type="number"
                      name="jacuzziPlaces"
                      placeholder="Ex: 2, 4, 6"
                      value={formData.jacuzziPlaces}
                      onChange={handleChange}
                      className={styles.inputField}
                      min="1"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Emplacement</label>
                    <select name="jacuzziIndoorOutdoor" value={formData.jacuzziIndoorOutdoor} onChange={handleChange} className={styles.selectField}>
                      <option value="">Intérieur ou Extérieur ?</option>
                      <option value="interieur">Intérieur</option>
                      <option value="exterieur">Extérieur</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Options de jets et de confort <br/><small>(Séparées par des virgules)</small></label>
                    <textarea
                      name="jacuzziOptions"
                      placeholder="Décrivez les options de jets, sièges ergonomiques, etc."
                      rows={3}
                      value={formData.jacuzziOptions.join(', ')}
                      onChange={handleChange}
                      className={styles.textareaField}
                    ></textarea>
                  </div>
                </>
              )}

              {/* Champs conditionnels pour 'Hammam' */}
              {formData.projectType === 'hammam' && (
                <>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Capacité souhaitée</label>
                    <input
                      type="number"
                      name="hammamPlaces"
                      placeholder="Ex: 2 personnes, 4 personnes"
                      value={formData.hammamPlaces}
                      onChange={handleChange}
                      className={styles.inputField}
                      min="1"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Options spécifiques (aromathérapie, chromothérapie, ciel étoilé...) <br/><small>(Séparées par des virgules)</small></label>
                    <textarea
                      name="hammamOptions"
                      placeholder="Décrivez les options spéciales que vous souhaitez pour votre hammam."
                      rows={4}
                      value={formData.hammamOptions.join(', ')}
                      onChange={handleChange}
                      className={styles.textareaField}
                    ></textarea>
                  </div>
                </>
              )}

              {/* Champs conditionnels pour 'Autre' */}
              {formData.projectType === 'autre' && (
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Décrivez votre projet <span className={styles.required}>*</span></label>
                  <textarea
                    name="otherDescription"
                    placeholder="Veuillez décrire en détail le projet aquatique que vous envisagez."
                    rows={6}
                    value={formData.otherDescription}
                    onChange={handleChange}
                    required
                    className={styles.textareaField}
                  ></textarea>
                </div>
              )}

              <div className={styles.buttonGroup}>
                <button type="button" onClick={handleNextStep} className={styles.nextButton}>
                  Étape Suivante <FaArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* --- Étape 2: Caractéristiques et Options --- */}
          {currentStep === 2 && (
            <div className={styles.stepContainer}>
              <h2 className={styles.stepTitle}>2. Précisez les caractéristiques et options souhaitées.</h2>
              <p className={styles.stepDescription}>Personnalisez votre projet avec les équipements et fonctionnalités qui correspondent à vos besoins.</p>

              {/* Champs conditionnels pour 'Piscine' - Étape 2 */}
              {formData.projectType === 'piscine' && (
                <>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Système de Filtration <span className={styles.required}>*</span></label>
                    <select name="piscineFiltration" value={formData.piscineFiltration} onChange={handleChange} className={styles.selectField} required>
                      <option value="">Sélectionnez un système de filtration</option>
                      <option value="sable">À sable</option>
                      <option value="cartouche">À cartouche</option>
                      <option value="diatomees">À diatomées</option>
                      <option value="biologique">Biologique (pour piscines naturelles)</option>
                      <option value="integre">Monobloc / Intégré</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Forme de l'escalier</label>
                    <select name="piscineStairShape" value={formData.piscineStairShape} onChange={handleChange} className={styles.selectField}>
                      <option value="">Sélectionnez une forme d'escalier</option>
                      <option value="droit">Droit</option>
                      <option value="roman">Roman (arrondi)</option>
                      <option value="banquette">Banquette immergée</option>
                      <option value="plage">Plage immergée</option>
                      <option value="sans">Sans escalier (échelle)</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Sécurité (plusieurs choix possibles)</label>
                    <div className={styles.checkboxGrid}>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineSecurity" value="couvertureBarres" checked={Array.isArray(formData.piscineSecurity) && formData.piscineSecurity.includes('couvertureBarres')} onChange={handleChange} />
                        <FaShieldAlt size={20} /> Couverture à barres
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineSecurity" value="voletImmerge" checked={Array.isArray(formData.piscineSecurity) && formData.piscineSecurity.includes('voletImmerge')} onChange={handleChange} />
                        <FaRegSquare /> Volet roulant immergé
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineSecurity" value="voletHorsSol" checked={Array.isArray(formData.piscineSecurity) && formData.piscineSecurity.includes('voletHorsSol')} onChange={handleChange} />
                        <FaRegSquare /> Volet roulant hors-sol
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineSecurity" value="alarme" checked={Array.isArray(formData.piscineSecurity) && formData.piscineSecurity.includes('alarme')} onChange={handleChange} />
                        <FaShieldAlt size={20} /> Alarme immergée
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineSecurity" value="barriere" checked={Array.isArray(formData.piscineSecurity) && formData.piscineSecurity.includes('barriere')} onChange={handleChange} />
                        <FaShieldAlt size={20} /> Barrière de protection
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineSecurity" value="abri" checked={Array.isArray(formData.piscineSecurity) && formData.piscineSecurity.includes('abri')} onChange={handleChange} />
                        <FaRegSquare /> Abri de piscine
                      </label>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Confort & Équipements (plusieurs choix possibles)</label>
                    <div className={styles.checkboxGrid}>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineComfort" value="pompeChaleur" checked={Array.isArray(formData.piscineComfort) && formData.piscineComfort.includes('pompeChaleur')} onChange={handleChange} />
                        <FaThermometerHalf size={20} /> Pompe à chaleur
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineComfort" value="nageContreCourant" checked={Array.isArray(formData.piscineComfort) && formData.piscineComfort.includes('nageContreCourant')} onChange={handleChange} />
                        <FaWater size={20} /> Nage à contre-courant
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineComfort" value="busesMassage" checked={Array.isArray(formData.piscineComfort) && formData.piscineComfort.includes('busesMassage')} onChange={handleChange} />
                        <FaSpa size={20} /> Buses de massage
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineComfort" value="traitementAutomatique" checked={Array.isArray(formData.piscineComfort) && formData.piscineComfort.includes('traitementAutomatique')} onChange={handleChange} />
                        <FaFilter size={20} /> Traitement automatique (sel/UV)
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineComfort" value="doucheExterieure" checked={Array.isArray(formData.piscineComfort) && formData.piscineComfort.includes('doucheExterieure')} onChange={handleChange} />
                        <FaShower size={20} /> Douche extérieure
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineComfort" value="eclairageLED" checked={Array.isArray(formData.piscineComfort) && formData.piscineComfort.includes('eclairageLED')} onChange={handleChange} />
                        <FaLightbulb /> Éclairage LED RGB
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name="piscineComfort" value="poolHouse" checked={Array.isArray(formData.piscineComfort) && formData.piscineComfort.includes('poolHouse')} onChange={handleChange} />
                        <FaHome /> Pool house
                      </label>
                    </div>
                  </div>
                </>
              )}

              {/* Champs conditionnels pour 'Lagon' - Étape 2 */}
              {formData.projectType === 'lagon' && (
                <>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Zones de baignade et de régénération</label>
                    <textarea
                      name="lagonSwimZone"
                      placeholder="Détaillez la séparation entre la zone de baignade et la zone de filtration végétale."
                      rows={3}
                      value={formData.lagonSwimZone}
                      onChange={handleChange}
                      className={styles.textareaField}
                    ></textarea>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Type de plage et de revêtement</label>
                    <textarea
                      name="lagonBeach"
                      placeholder="Préférez-vous des plages en sable stabilisé, des galets, ou autre ? Quel revêtement pour le fond ?"
                      rows={3}
                      value={formData.lagonBeach}
                      onChange={handleChange}
                      className={styles.textareaField}
                    ></textarea>
                  </div>
                  {/* Plus d'options pour les lagons ici si nécessaire */}
                </>
              )}

              {/* Champs conditionnels pour 'Spa'/'Jacuzzi'/'Hammam' - Étape 2 */}
              {(formData.projectType === 'spa' || formData.projectType === 'jacuzzi') && (
                <>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Type de jets et de massages</label>
                    <textarea
                      name={`${formData.projectType}JetType`}
                      placeholder="Souhaitez-vous des jets hydromassants, des jets d'air, des cervicales, etc. ?"
                      rows={3}
                      value={formData[`${formData.projectType}JetType` as keyof FormData] as string}
                      onChange={handleChange}
                      className={styles.textareaField}
                    ></textarea>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Fonctionnalités supplémentaires <br/><small>(Séparées par des virgules)</small></label>
                    <div className={styles.checkboxGrid}>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name={`${formData.projectType}ExtraFeatures`} value="chromotherapie" checked={Array.isArray(formData[`${formData.projectType}ExtraFeatures` as keyof FormData]) && (formData[`${formData.projectType}ExtraFeatures` as keyof FormData] as string[]).includes('chromotherapie')} onChange={handleChange} />
                        <FaLightbulb /> Chromothérapie
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name={`${formData.projectType}ExtraFeatures`} value="aromatherapie" checked={Array.isArray(formData[`${formData.projectType}ExtraFeatures` as keyof FormData]) && (formData[`${formData.projectType}ExtraFeatures` as keyof FormData] as string[]).includes('aromatherapie')} onChange={handleChange} />
                        <FaLeaf /> Aromathérapie
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name={`${formData.projectType}ExtraFeatures`} value="musique" checked={Array.isArray(formData[`${formData.projectType}ExtraFeatures` as keyof FormData]) && (formData[`${formData.projectType}ExtraFeatures` as keyof FormData] as string[]).includes('musique')} onChange={handleChange} />
                        <FaMusic /> Système audio
                      </label>
                      <label className={styles.checkboxCard}>
                        <input type="checkbox" name={`${formData.projectType}ExtraFeatures`} value="chauffage" checked={Array.isArray(formData[`${formData.projectType}ExtraFeatures` as keyof FormData]) && (formData[`${formData.projectType}ExtraFeatures` as keyof FormData] as string[]).includes('chauffage')} onChange={handleChange} />
                        <FaThermometerHalf /> Chauffage additionnel
                      </label>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Matériaux et finitions <br/><small>(Séparés par des virgules)</small></label>
                    <textarea
                      name={`${formData.projectType}Materials`}
                      placeholder="Quels matériaux préférez-vous pour le revêtement (acrylique, carrelage, bois...) ?"
                      rows={3}
                      value={(formData[`${formData.projectType}Materials` as keyof FormData] as string[]).join(', ')}
                      onChange={handleChange}
                      className={styles.textareaField}
                    ></textarea>
                  </div>
                </>
              )}

              {formData.projectType === 'hammam' && (
                <>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Ambiance et design <br/><small>(Séparées par des virgules)</small></label>
                    <textarea
                      name="hammamFeatures"
                      placeholder="Décrivez l'ambiance et le style que vous souhaitez pour votre hammam (traditionnel, moderne, éclairage...)"
                      rows={3}
                      value={formData.hammamFeatures.join(', ')}
                      onChange={handleChange}
                      className={styles.textareaField}
                    ></textarea>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Matériaux souhaités <br/><small>(Séparés par des virgules)</small></label>
                    <textarea
                      name="hammamMaterials"
                      placeholder="Quels matériaux préférez-vous (tadelakt, marbre, mosaïque...) ?"
                      rows={3}
                      value={formData.hammamMaterials.join(', ')}
                      onChange={handleChange}
                      className={styles.textareaField}
                    ></textarea>
                  </div>
                </>
              )}


              <div className={styles.buttonGroup}>
                <button type="button" onClick={handlePrevStep} className={styles.prevButton}>
                  <FaArrowLeft size={16} /> Étape Précédente
                </button>
                <button type="button" onClick={handleNextStep} className={styles.nextButton}>
                  Étape Suivante <FaArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* --- Étape 3: Vos Coordonnées --- */}
          {currentStep === 3 && (
            <div className={styles.stepContainer}>
              <h2 className={styles.stepTitle}>3. Finalisons votre demande.</h2>
              <p className={styles.stepDescription}>Veuillez renseigner vos coordonnées afin de recevoir votre devis personnalisé.</p>

              <div className={styles.formGroup}>
                <label htmlFor="lastName" className="sr-only">Nom</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Votre Nom *"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="firstName" className="sr-only">Prénom</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Votre Prénom *"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className="sr-only">Adresse e-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre Adresse E-mail *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className="sr-only">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Votre Numéro de Téléphone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="address" className="sr-only">Adresse</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Votre Adresse"
                  value={formData.address}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="city" className="sr-only">Ville</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Ville"
                  value={formData.city}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="zipCode" className="sr-only">Code Postal</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Code Postal"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="country" className="sr-only">Pays</label>
                <select name="country" id="country" value={formData.country} onChange={handleChange} className={styles.selectField}>
                  <option value="Maroc">Maroc</option>
                  {/* Ajouter d'autres pays si nécessaire */}
                </select>
              </div>

              <div className={`${styles.formGroup} ${styles.termsCheckbox}`}>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                  />
                  <span className={styles.checkmark}></span>
                  J'accepte les conditions d'utilisation de mes informations. <Link href="/conditions" className={styles.termsLink} target="_blank">(Lire les conditions)</Link>
                </label>
              </div>

              <div className={styles.buttonGroup}>
                <button type="button" onClick={handlePrevStep} className={styles.prevButton}>
                  <FaArrowLeft size={16} /> Étape Précédente
                </button>
                <button type="submit" className={styles.submitButton}>
                  Envoyer ma demande <FaPaperPlane size={16} />
                </button>
              </div>
            </div>
          )}
        </form>
      </section>

      {/* Dernière section pour inciter à demander un devis (si on veut un autre CTA) */}
      
    </div>
  );
};

export default DemandeDeDevisPage;