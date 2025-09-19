// src/app/contact/layout.tsx
import type { Metadata } from 'next';
import React from 'react';

// --- Métadonnées de la page de contact ---
export const metadata: Metadata = {
  title: "Contactez-nous - Oasis Évasion",
  description: "Besoin de nous contacter pour une question ou un projet ? Retrouvez toutes nos coordonnées et notre formulaire de contact.",
};

// --- Composant Layout pour la page de contact ---
// Ce layout est minimaliste, il enveloppe simplement le contenu de la page.tsx
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}