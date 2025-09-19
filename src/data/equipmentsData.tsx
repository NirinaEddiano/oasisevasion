// src/data/equipmentsData.tsx

export const equipmentsData = [
    {
      id: 1,
      slug: 'structure-design',
      title: 'Structure & Design ',
      description: "Découvrez des formes uniques, des matériaux nobles et des finitions sur mesure pour une piscine qui s'intègre parfaitement à votre environnement, reflétant votre style et vos envies.",
      imageUrl: '/images/equipments/category-structure-design.jpg', // Image pour le carousel
      equipmentItems: [
        {
          title: 'Formes de Bassin',
          description: "Que vous rêviez d'un couloir de nage élégant, d'une piscine rectangulaire classique, d'une forme libre organique ou d'un bassin miroir épuré, nous réalisons des designs personnalisés. Nos piscines à débordement offrent une esthétique spectaculaire, tandis que les fonds mobiles maximisent l'espace et la sécurité. Demandez un devis pour votre forme idéale.",
          image: '/images/equipments/structure-forms.jpg',
        },
        {
          title: 'Matériaux & Revêtements',
          description: "Optez pour la robustesse du béton armé, la simplicité d'une coque polyester, la personnalisation du liner et PVC armé, l'élégance du carrelage, de la mosaïque, ou l'authenticité de la pierre naturelle. Nous proposons également des margelles et plages en matériaux premium pour parfaire l'ensemble. Découvrez nos options en demandant un devis personnalisé.",
          image: '/images/equipments/structure-materials.jpg',
        },
        {
          title: 'Pièces à Sceller Innovantes',
          description: "Les skimmers, bondes de fond, buses de refoulement, prises balai et traversées de paroi sont choisis pour leur performance et leur discrétion. Nos pièces en inox garantissent durabilité et esthétique. Chaque élément est sélectionné pour optimiser la circulation de l'eau et faciliter l'entretien. Contactez-nous pour un devis détaillé.",
          image: '/images/equipments/structure-sealing-parts.jpg',
        },
        {
          title: 'Jeux d\'eau & Éléments de Design',
          description: "Transformez votre piscine en œuvre d'art avec des lames d'eau apaisantes, des cascades majestueuses, des geysers ludiques ou des buses de massage relaxantes. Intégrez des banquettes balnéo pour un confort ultime. Les fontaines, brumisateurs et jets laminaires lumineux ajoutent une touche spectaculaire. Explorez nos options en demandant un devis.",
          image: '/images/equipments/design-water-games.jpeg',
        },
      ],
    },
    {
      id: 2,
      slug: 'filtration-hydraulique',
      title: 'Filtration & Hydraulique ',
      description: "Assurez une eau toujours cristalline et saine grâce à nos systèmes de filtration et hydrauliques de pointe, conçus pour l'efficacité et la facilité d'entretien.",
      imageUrl: '/images/equipments/category-filtration-hydraulique.jpg',
      equipmentItems: [
        {
          title: 'Groupes de Filtration Complets',
          description: "Nos groupes de filtration sont des solutions intégrées garantissant une qualité d'eau optimale. Ils combinent filtres, pompes et vannes pour une performance harmonieuse et une installation simplifiée. Demandez un devis pour une filtration sur mesure.",
          image: '/images/equipments/filtration-groups.jpg',
        },
        {
          title: 'Filtres de Haute Qualité',
          description: "Choisissez parmi nos filtres à sable, à verre, à cartouche ou à diatomées, chacun offrant des avantages spécifiques en termes de finesse de filtration et de maintenance. Nos experts vous guident vers la solution la plus adaptée à votre bassin. Contactez-nous pour un devis.",
          image: '/images/equipments/filtration-types.jpg',
        },
        {
          title: 'Pompes Standard & Haute Performance',
          description: "Nos pompes standards assurent une circulation fiable, tandis que nos modèles à haut rendement et vitesse variable réduisent la consommation d'énergie et le bruit. Nous proposons également des surpresseurs pour les robots nettoyeurs. Obtenez un devis pour une solution adaptée.",
          image: '/images/equipments/filtration-pumps.jpg',
        },
        {
          title: 'Nettoyage Automatisé avec Robots',
          description: "Simplifiez l'entretien avec nos robots électriques (adaptés à tous les budgets et types de bassin) ou hydrauliques (à aspiration ou surpresseur). Ils nettoient efficacement fond, parois et ligne d'eau, vous offrant plus de temps pour la baignade. Demandez un devis pour trouver le robot idéal.",
          image: '/images/equipments/cleaning-robots.png',
        },
      ],
    },
    {
      id: 3,
      slug: 'traitement-chauffage',
      title: 'Traitement de l\'eau & Chauffage',
      description: "Profitez d'une eau parfaitement équilibrée et d'une température idéale tout au long de la saison de baignade, grâce à nos solutions de traitement et de chauffage avancées.",
      imageUrl: '/images/equipments/category-traitement-chauffage.png',
      equipmentItems: [
        {
          title: 'Électrolyse au Sel & Régulation Automatique',
          description: "L'électrolyse au sel est une méthode de traitement écologique et douce pour la peau, produisant du chlore naturel. Associée à nos pompes doseuses et régulateurs automatiques de pH et ORP, elle garantit une eau toujours saine et équilibrée. Demandez un devis pour un système complet.",
          image: '/images/equipments/treatment-salt-electrolysis.jpg',
        },
        {
          title: 'Solutions de Traitement Complémentaires',
          description: "Nous proposons également des lampes UV et ozonateurs pour une désinfection puissante sans produits chimiques, ainsi que l'ionisation cuivre/argent. Nos produits d'entretien (chlore, brome, PHMB, anti-algues) et stations d'analyse connectées complètent une gestion parfaite de l'eau. Contactez-nous pour un devis.",
          image: '/images/equipments/treatment-products.jpeg',
        },
        {
          title: 'Pompes à Chaleur Éco-énergétiques',
          description: "Les pompes à chaleur (On/Off ou Inverter) sont la solution la plus économique pour chauffer votre piscine. Elles captent les calories de l'air pour les restituer à l'eau, prolongeant ainsi votre saison de baignade. Nos modèles Inverter offrent un confort acoustique et une économie d'énergie accrue. Demandez un devis.",
          image: '/images/equipments/heating-heat-pumps.jpg',
        },
        {
          title: 'Autres Systèmes de Chauffage',
          description: "Pour des besoins spécifiques, nous installons des échangeurs (compatibles gaz, fioul, PAC maison, solaire) et des réchauffeurs électriques pour une montée en température rapide. Les capteurs solaires et dômes solaires offrent une solution écologique pour réchauffer l'eau. Obtenez un devis personnalisé.",
          image: '/images/equipments/heating-other-systems.jpeg',
        },
      ],
    },
    {
      id: 4,
      slug: 'automatisation-connectivite',
      title: 'Automatisation & Connectivité',
      description: "Pilotez votre piscine du bout des doigts ! Nos solutions d'automatisation transforment l'entretien et la gestion de votre bassin en une expérience simple et intuitive.",
      imageUrl: '/images/equipments/category-automation-connectivity.jpg',
      equipmentItems: [
        {
          title: 'Coffrets Électriques Avancés',
          description: "Nos coffrets électriques intègrent horloges programmables, contacteurs et protections essentielles pour une gestion sécurisée et efficace de tous les équipements de votre piscine. Ils sont le cœur de votre système automatisé. Demandez un devis pour une installation complète.",
          image: '/images/equipments/automation-electric-boxes.jpg',
        },
        {
          title: 'Domotique Piscine Intégrée',
          description: "Transformez votre piscine en un espace intelligent avec nos systèmes de domotique. Pilotez la filtration, l'éclairage, la pompe à chaleur et les traitements de l'eau depuis une interface unique. Créez des scénarios personnalisés pour une expérience sans effort. Contactez-nous pour un devis.",
          image: '/images/equipments/automation-domotics.jpg',
        },
        {
          title: 'Applications Smartphone & Surveillance',
          description: "Gardez un œil sur votre piscine où que vous soyez grâce à nos applications smartphone dédiées. Surveillez les paramètres clés de l'eau, recevez des alertes et ajustez les réglages à distance pour une tranquillité d'esprit totale. Demandez un devis pour une piscine connectée.",
          image: '/images/equipments/automation-smartphone-app.jpg',
        },
        {
          title: 'Vannes Motorisées & Scénarios Personnalisés',
          description: "Optimisez la circulation et les traitements avec des vannes motorisées. Créez des scénarios (hiver, absence, éco) pour adapter automatiquement le fonctionnement de votre piscine à vos besoins. Simplifiez la gestion et réduisez la consommation. Obtenez un devis pour cette innovation.",
          image: '/images/equipments/automation-motorized-valves.jpg',
        },
      ],
    },
    {
      id: 5,
      slug: 'oasis-bien-etre',
      title: 'Oasis de Bien-être & Couvertures',
      description: "Créez un véritable havre de paix avec nos spas, saunas, hammams et assurez la protection de votre bassin avec nos solutions de couvertures élégantes et sécurisées.",
      imageUrl: '/images/equipments/category-oasis-bien-etre.jpg',
      equipmentItems: [
        {
          title: 'Spas & Jacuzzis Sur Mesure',
          description: "Offrez-vous un espace de relaxation ultime avec nos spas et jacuzzis, intégrés ou hors-sol. Profitez de systèmes d'hydromassage sophistiqués, de sièges ergonomiques et d'options d'aromathérapie. Chaque spa est conçu pour votre bien-être. Demandez un devis pour votre oasis personnelle.",
          image: '/images/equipments/wellness-spa.jpg',
        },
        {
          title: 'Saunas & Hammams Authentiques',
          description: "Prolongez l'expérience bien-être avec un sauna finlandais ou un hammam traditionnel. Nos cabines sont personnalisables, intégrant poêles, générateurs de vapeur, chromothérapie et revêtements premium pour une évasion sensorielle. Contactez-nous pour un devis détaillé.",
          image: '/images/equipments/wellness-sauna-hammam.jpeg',
        },
        {
          title: 'Volets Roulants & Bâches de Protection',
          description: "Sécurisez et protégez votre piscine avec nos volets roulants (hors-sol ou immergés, lames PVC/polycarbonate solaires) ou nos bâches (été, hivernage, à barres). Ils maintiennent la température, réduisent l'évaporation et garantissent la sécurité. Demandez un devis pour une couverture adaptée.",
          image: '/images/equipments/covers-rolling-shutters.jpeg',
        },
        {
          title: 'Abris de Piscine Design',
          description: "Prolongez l'utilisation de votre piscine et gagnez en confort avec nos abris bas, mi-hauts ou hauts. Coulissants, télescopiques ou motorisés, ils s'adaptent à vos besoins et à l'esthétique de votre extérieur, offrant protection et espace de vie supplémentaire. Obtenez un devis pour votre abri.",
          image: '/images/equipments/covers-shelters.jpeg',
        },
        {
          title: 'Éclairage & Ambiance Lumineuse',
          description: "Sublimez votre piscine la nuit avec des projecteurs LED (blanc ou RGB) pour des jeux de lumière envoûtants. Leds linéaires, éclairage d'escalier et fibres optiques ajoutent une touche d'élégance. La chromothérapie transforme votre bassin en un espace de détente coloré. Demandez un devis pour une ambiance personnalisée.",
          image: '/images/equipments/lighting-ambiance.jpg',
        },
      ],
    },
  ];