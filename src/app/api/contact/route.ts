import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Assurez-vous que ces variables sont définies dans votre .env.local
const SENDER_EMAIL = process.env.EMAIL_USER;
const SENDER_PASS = process.env.EMAIL_PASS;
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL;

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, phone, subject, message } = formData;

    // Validation basique des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Veuillez remplir tous les champs obligatoires.' }, { status: 400 });
    }

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Ou 'outlook', 'yahoo', etc.
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASS,
      },
    });

    // Email envoyé à l'entreprise (à vous)
    const mailToCompany = {
      from: `"${name}" <${SENDER_EMAIL}>`, // Affichera le nom de l'expéditeur dans votre boîte
      to: RECIPIENT_EMAIL,
      replyTo: email, // Vous pourrez répondre directement à l'expéditeur
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
          <p>En attendant, n'hésitez pas à explorer nos <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/realisations" style="color: #0077be; text-decoration: none;">réalisations</a> ou à découvrir nos <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/services" style="color: #0077be; text-decoration: none;">services</a>.</p>
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

  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json({ message: 'Échec de l\'envoi du message.' }, { status: 500 });
  }
}