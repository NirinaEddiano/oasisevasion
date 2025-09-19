// src/app/demande-de-devis/layout.tsx
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Demande de Devis Personnalisé - Oasis Évasion",
  description: "Obtenez un devis gratuit et personnalisé pour votre projet de piscine, lagon, spa, jacuzzi ou hammam en quelques étapes simples.",
};

export default function DemandeDeDevisLayout({
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