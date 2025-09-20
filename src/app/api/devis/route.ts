// src/app/api/demande-de-devis/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const {
      projectType, piscineStyle, piscineLength, piscineWidth, piscineDepthMin, piscineDepthMax, piscineShape, piscineBottomType, piscineWaterColor,
      lagonSize, lagonLandscaping, lagonSwimZone, lagonBeach,
      spaPlaces, spaIndoorOutdoor, spaOptions, spaJetType, spaExtraFeatures, spaMaterials,
      jacuzziPlaces, jacuzziIndoorOutdoor, jacuzziOptions, jacuzziJetType, jacuzziExtraFeatures, jacuzziMaterials,
      hammamPlaces, hammamOptions, hammamFeatures, hammamMaterials,
      otherDescription,
      piscineFiltration, piscineStairShape, piscineSecurity, piscineComfort,
      lastName, firstName, email, phone, address, city, zipCode, country,
      acceptTerms,
    } = formData;

    // Validation basique des données de contact
    if (!lastName || !firstName || !email || !phone || !projectType || !acceptTerms) {
      return NextResponse.json({ message: 'Veuillez remplir tous les champs obligatoires, y compris l\'acceptation des conditions.' }, { status: 400 });
    }

    // Lisez les variables d'environnement directement ici
    const SENDER_EMAIL = process.env.SMTP_USER;
    const SENDER_PASS = process.env.SMTP_PASS;
    const DEVIS_RECIPIENT_EMAIL = process.env.DEVIS_RECIPIENT_EMAIL;
    const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';


    // Ajout d'une vérification pour s'assurer que les variables sont chargées
    if (!SENDER_EMAIL || !SENDER_PASS || !DEVIS_RECIPIENT_EMAIL) {
        console.error('Erreur de configuration: Les variables SMTP_USER, SMTP_PASS ou DEVIS_RECIPIENT_EMAIL sont manquantes dans le runtime.');
        return NextResponse.json({ message: 'Erreur de configuration du serveur d\'e-mail pour les devis. Veuillez contacter l\'administrateur.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Construction du contenu HTML pour l'entreprise
    let devisDetailsHtml = `
      <h3 style="color: #0077be;">Détails du Projet:</h3>
      <p><strong>Type de Projet:</strong> ${projectType.charAt(0).toUpperCase() + projectType.slice(1)}</p>
    `;

    switch (projectType) {
      case 'piscine':
        devisDetailsHtml += `
          <p><strong>Style de Piscine:</strong> ${piscineStyle}</p>
          <p><strong>Dimensions (L x l):</strong> ${piscineLength}m x ${piscineWidth}m</p>
          ${piscineDepthMin && piscineDepthMax ? `<p><strong>Profondeur:</strong> Min ${piscineDepthMin}m, Max ${piscineDepthMax}m</p>` : ''}
          <p><strong>Forme:</strong> ${piscineShape}</p>
          ${piscineBottomType ? `<p><strong>Type de Fond:</strong> ${piscineBottomType}</p>` : ''}
          ${piscineWaterColor ? `<p><strong>Couleur de l'Eau:</strong> ${piscineWaterColor}</p>` : ''}
          ${piscineFiltration ? `<p><strong>Système de Filtration:</strong> ${piscineFiltration}</p>` : ''}
          ${piscineStairShape ? `<p><strong>Forme de l'Escalier:</strong> ${piscineStairShape}</p>` : ''}
          ${piscineSecurity?.length > 0 ? `<p><strong>Sécurité:</strong> ${piscineSecurity.join(', ')}</p>` : ''}
          ${piscineComfort?.length > 0 ? `<p><strong>Confort & Équipements:</strong> ${piscineComfort.join(', ')}</p>` : ''}
        `;
        break;
      case 'lagon':
        devisDetailsHtml += `
          <p><strong>Taille Estimée:</strong> ${lagonSize}</p>
          ${lagonLandscaping ? `<p><strong>Aménagement Paysager:</strong> ${lagonLandscaping}</p>` : ''}
          ${lagonSwimZone ? `<p><strong>Zones de Baignade/Régénération:</strong> ${lagonSwimZone}</p>` : ''}
          ${lagonBeach ? `<p><strong>Plage & Revêtement:</strong> ${lagonBeach}</p>` : ''}
        `;
        break;
      case 'spa':
      case 'jacuzzi':
        devisDetailsHtml += `
          <p><strong>Nombre de Places:</strong> ${projectType === 'spa' ? spaPlaces : jacuzziPlaces}</p>
          <p><strong>Emplacement:</strong> ${projectType === 'spa' ? spaIndoorOutdoor : jacuzziIndoorOutdoor}</p>
          ${(projectType === 'spa' ? spaOptions : jacuzziOptions)?.length > 0 ? `<p><strong>Options Supplémentaires:</strong> ${projectType === 'spa' ? spaOptions.join(', ') : jacuzziOptions.join(', ')}</p>` : ''}
          ${(projectType === 'spa' ? spaJetType : jacuzziJetType) ? `<p><strong>Type de Jets:</strong> ${projectType === 'spa' ? spaJetType : jacuzziJetType}</p>` : ''}
          ${(projectType === 'spa' ? spaExtraFeatures : jacuzziExtraFeatures)?.length > 0 ? `<p><strong>Fonctionnalités Extra:</strong> ${projectType === 'spa' ? spaExtraFeatures.join(', ') : jacuzziExtraFeatures.join(', ')}</p>` : ''}
          ${(projectType === 'spa' ? spaMaterials : jacuzziMaterials)?.length > 0 ? `<p><strong>Matériaux:</strong> ${projectType === 'spa' ? spaMaterials.join(', ') : jacuzziMaterials.join(', ')}</p>` : ''}
        `;
        break;
      case 'hammam':
        devisDetailsHtml += `
          <p><strong>Capacité Souhaitée:</strong> ${hammamPlaces}</p>
          ${hammamOptions?.length > 0 ? `<p><strong>Options Spécifiques:</strong> ${hammamOptions.join(', ')}</p>` : ''}
          ${hammamFeatures?.length > 0 ? `<p><strong>Ambiance & Design:</strong> ${hammamFeatures.join(', ')}</p>` : ''}
          ${hammamMaterials?.length > 0 ? `<p><strong>Matériaux Souhaités:</strong> ${hammamMaterials.join(', ')}</p>` : ''}
        `;
        break;
      case 'autre':
        devisDetailsHtml += `<p><strong>Description du Projet:</strong> ${otherDescription}</p>`;
        break;
      default:
        devisDetailsHtml += `<p>Aucun détail spécifique fourni pour le type de projet.</p>`;
    }

    // Email envoyé à l'entreprise (à vous)
    const mailToCompany = {
      from: `"${firstName} ${lastName}" <${SENDER_EMAIL}>`,
      to: DEVIS_RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande de devis: ${projectType.toUpperCase()} de ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #003366;">Nouvelle demande de devis pour Oasis Évasion</h2>
          <h3 style="color: #0077be;">Coordonnées du Client:</h3>
          <p><strong>Nom:</strong> ${lastName}</p>
          <p><strong>Prénom:</strong> ${firstName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
          ${address ? `<p><strong>Adresse:</strong> ${address}</p>` : ''}
          ${city ? `<p><strong>Ville:</strong> ${city}</p>` : ''}
          ${zipCode ? `<p><strong>Code Postal:</strong> ${zipCode}</p>` : ''}
          ${country ? `<p><strong>Pays:</strong> ${country}</p>` : ''}
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          ${devisDetailsHtml}
          <p style="font-size: 0.9em; color: #777; margin-top: 20px;">
            Conditions d'utilisation acceptées: ${acceptTerms ? 'Oui' : 'Non'}
            <br>Ce formulaire a été soumis via votre site web.
          </p>
        </div>
      `,
    };

    // Email de confirmation envoyé au client
    const mailToClient = {
      from: `Oasis Évasion <${SENDER_EMAIL}>`,
      to: email,
      subject: `Confirmation de votre demande de devis - Oasis Évasion`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #003366;">Bonjour ${firstName},</h2>
          <p>Nous avons bien reçu votre demande de devis pour un projet de type <strong>"${projectType.charAt(0).toUpperCase() + projectType.slice(1)}"</strong>.</p>
          <p>Notre équipe va examiner attentivement vos besoins et vous contactera dans les plus brefs délais pour discuter des détails et vous proposer une étude personnalisée.</p>
          <p><strong>Votre référence de demande est:</strong> [Référence Automatique - à implémenter si vous avez un système de suivi]</p>
          <p>En attendant, vous pouvez explorer nos <a href="${NEXT_PUBLIC_BASE_URL}/realisations" style="color: #0077be; text-decoration: none;">réalisations</a> ou en apprendre plus sur <a href="${NEXT_PUBLIC_BASE_URL}/a-propos" style="color: #0077be; text-decoration: none;">notre expertise</a>.</p>
          <p>Nous sommes impatients de vous accompagner dans la réalisation de votre projet de rêve !</p>
          <p>Cordialement,</p>
          <p>L'équipe Oasis Évasion</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 0.8em; color: #777;">Ceci est un email automatique, merci de ne pas y répondre directement.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailToCompany);
    await transporter.sendMail(mailToClient);

    return NextResponse.json({ message: 'Demande de devis envoyée avec succès !' }, { status: 200 });

  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de la demande de devis:', error);
    return NextResponse.json({ message: 'Échec de l\'envoi de la demande de devis.', error: error.message }, { status: 500 });
  }
}
