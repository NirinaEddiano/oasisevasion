// src/app/equipement/page.tsx
import { redirect } from 'next/navigation';
import { equipmentsData } from '@/data/equipmentsData';

export default function EquipementRedirectPage() {
  // Redirige vers le premier élément de la liste des équipements
  if (equipmentsData.length > 0) {
    redirect(`/equipement/${equipmentsData[0].slug}`);
  }
  // Fallback si aucune donnée d'équipement n'est disponible
  return <div>Redirection en cours...</div>;
}