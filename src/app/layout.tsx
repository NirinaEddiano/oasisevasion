import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar"; // Importez la Navbar
import Footer from "@/components/Footer/Footer"; // Importez la Navbar
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oasis Évasion - Créateur de piscines d'exception",
  description: "Conception et construction de piscines sur mesure au Maroc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar /> {/* Ajoutez la Navbar ici */}
        <main> {/* Ajoute un padding pour que le contenu ne soit pas caché sous la navbar fixe */}
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  );
}