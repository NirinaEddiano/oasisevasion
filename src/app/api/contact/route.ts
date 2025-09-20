// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, phone, subject, message } = formData;

    // Validation basique des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Veuillez remplir tous les champs obligatoires.' }, { status: 400 });
    }

    // Lisez les variables d'environnement directement ici, au moment de l'exécution de la fonction
    const SENDER_EMAIL = process.env.SMTP_USER;
    const SENDER_PASS = process.env.SMTP_PASS;
    const CONTACT_RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL;
    const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';


    // Ajout d'une vérification pour s'assurer que les variables sont chargées
    if (!SENDER_EMAIL || !SENDER_PASS || !CONTACT_RECIPIENT_EMAIL) {
      console.error('Erreur de configuration: Les variables SMTP_USER, SMTP_PASS ou CONTACT_RECIPIENT_EMAIL sont manquantes dans le runtime.');
      // Ne pas exposer directement le message d'erreur de la variable manquante au client pour des raisons de sécurité.
      return NextResponse.json({ message: 'Erreur de configuration du serveur d\'e-mail. Veuillez contacter l\'administrateur.' }, { status: 500 });
    }

    // Configuration du transporteur Nodemailer
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

    // Email envoyé à l'entreprise (à vous)
    const mailToCompany = {
      from: `"${name}" <${SENDER_EMAIL}>`,
      to: CONTACT_RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #003366;">Nouveau message de contact pour Oasis Évasion</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          <p><strong>Sujet:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f4f4f4; padding: 15px; border-left: 5px solid #0077be; white-space: pre-wrap;">${message}</p>
          <p style="font-size: 0.9em; color: #777;">Ce message a été envoyé via le formulaire de contact de votre site web.</p>
        </div>
      `,
    };

    // Email de confirmation envoyé au client
    const mailToClient = {
      from: `Oasis Évasion <${SENDER_EMAIL}>`,
      to: email,
      subject: `Confirmation de réception de votre message - Oasis Évasion`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #003366;">Bonjour ${name},</h2>
          <p>Nous avons bien reçu votre message concernant <strong>"${subject}"</strong> et nous vous remercions de votre intérêt pour Oasis Évasion.</p>
          <p>Nous nous efforçons de vous répondre dans les plus brefs délais, généralement sous 24 à 48 heures ouvrables.</p>
          <p>En attendant, n'hésitez pas à explorer nos <a href="${NEXT_PUBLIC_BASE_URL}/realisations" style="color: #0077be; text-decoration: none;">réalisations</a> ou à découvrir nos <a href="${NEXT_PUBLIC_BASE_URL}/services" style="color: #0077be; text-decoration: none;">services</a>.</p>
          <p>À très bientôt,</p>
          <p>L'équipe Oasis Évasion</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 0.8em; color: #777;">Ceci est un email automatique, merci de ne pas y répondre directement si vous avez déjà un contact.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailToCompany);
    await transporter.sendMail(mailToClient);

    return NextResponse.json({ message: 'Message envoyé avec succès !' }, { status: 200 });

  } catch (error: any) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json({ message: 'Échec de l\'envoi du message.', error: error.message }, { status: 500 });
  }
}
