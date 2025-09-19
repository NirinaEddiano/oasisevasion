// src/data/realisationsData.tsx

export interface RealisationStep {
    title: string;
    description: string;
  }
  
  export interface Realisation {
    id: string;
    slug: string;
    title: string;
    subtitle: string; // Pour les cartes et la sidebar
    cardImage: string; // Image pour la carte de la grille et le carrousel homepage
    heroImage: string; // Grande image pour la section héro de la page de détail
    pageTitle: string; // Titre du héro sur la page de détail
    pageDescription: string; // Texte sous le titre du héro sur la page de détail
    shortDescription: string; // Un court paragraphe pour le début de la description détaillée
    mainDescription: string[]; // Tableau de paragraphes pour la description longue (6+ paragraphes, 7+ phrases chacun)
    imagesWithinDescription: { src: string; alt: string; position: number }[]; // Images à insérer dans la description
    steps: RealisationStep[]; // Étapes de la réalisation
    equipmentsUsed: string[]; // Liste des équipements utilisés
    galleryImages: string[]; // Images supplémentaires pour une galerie éventuelle si tu veux l'ajouter plus tard
  }
  
  export const realisationsData: Realisation[] = [
    {
      id: '1',
      slug: 'piscine-miroir-marrakech',
      title: 'Piscine Miroir & Terrasse Bois',
      subtitle: 'Design contemporain à Marrakech, une fusion parfaite entre luxe et nature.',
      cardImage: '/realisations/piscine-moderne-01.jpg',
      heroImage: '/realisations/piscine-moderne-01-hero.jpg', // Image spécifique pour le hero de la page de détail
      pageTitle: 'Piscine Miroir : L\'Élégance Contemporaine',
      pageDescription: 'Découvrez notre projet à Marrakech, où l\'eau et le bois se rencontrent pour créer une oasis de tranquillité. Ce design intemporel offre une expérience de baignade unique et une esthétique raffinée.',
      shortDescription: 'Cette réalisation emblématique à Marrakech est le fruit d\'une collaboration étroite avec nos clients, souhaitant un espace aquatique qui s\'intègre harmonieusement dans un environnement luxueux. La piscine miroir, avec son débordement subtil, crée un effet visuel saisissant, reflétant le ciel azur et le paysage environnant. Le choix des matériaux, notamment le bois exotique pour la terrasse, a été crucial pour garantir une ambiance chaleureuse et naturelle, tout en assurant une durabilité exceptionnelle face aux conditions climatiques locales.',
      mainDescription: [
        "Le concept de piscine miroir a été choisi pour son esthétique épurée et sa capacité à se fondre dans le décor. L'eau affleure le niveau de la plage, créant une surface sans fin qui maximise le sentiment d'ouverture et d'espace. Ce type de conception est particulièrement apprécié pour les propriétés de luxe, où chaque détail compte pour l'expérience globale. Nous avons mis un point d'honneur à ce que les finitions soient impeccables, de la sélection des margelles à l'intégration discrète des systèmes de filtration. L'éclairage subaquatique a également été pensé pour sublimer la piscine la nuit, transformant le jardin en un lieu magique et invitant à la détente sous les étoiles.",
        "La terrasse en bois IPE, réputée pour sa résistance et sa beauté naturelle, a été installée avec une précision méticuleuse. Elle encercle élégamment la piscine, offrant des espaces de détente et de convivialité. La chaleur du bois contraste magnifiquement avec la fraîcheur de l'eau, créant un équilibre visuel parfait. Ce matériau noble nécessite un entretien régulier, mais ses avantages en termes d'esthétique et de longévité en font un choix privilégié pour nos réalisations haut de gamme. L'intégration de jardinières discrètes avec des plantes locales ajoute une touche de verdure, renforçant l'aspect naturel et apaisant de l'ensemble du projet.",
        "L'un des défis majeurs a été l'optimisation de l'espace pour créer différentes zones fonctionnelles autour de la piscine. Nous avons conçu un coin salon ombragé, idéal pour se protéger du soleil ardent, ainsi qu'une zone de repas en plein air. Chaque espace a été pensé pour maximiser le confort et l'intimité des occupants. La circulation autour de la piscine a été fluidifiée pour permettre un accès facile à toutes les commodités. La sécurité a également été une priorité absolue, avec l'installation de systèmes discrets mais efficaces pour prévenir les accidents, notamment pour les jeunes enfants. L'ensemble architectural se veut à la fois fonctionnel et esthétiquement plaisant, répondant aux attentes les plus exigeantes.",
        "Les systèmes de filtration et de traitement de l'eau sont à la pointe de la technologie, assurant une eau cristalline et saine en permanence. Nous avons opté pour un système de filtration à sable avec un traitement automatique au sel, minimisant l'utilisation de produits chimiques et facilitant l'entretien pour les propriétaires. Cette approche garantit une eau douce et agréable pour la peau, tout en respectant l'environnement. Le local technique a été conçu pour être facilement accessible mais entièrement dissimulé, préservant l'esthétique générale de l'aménagement. La pompe à chaleur intégrée permet de prolonger la saison de baignade, offrant un confort optimal même lors des journées plus fraîches. Notre engagement envers l'innovation technologique se reflète dans chaque aspect de cette réalisation.",
        "La phase de conception a été particulièrement intense, avec de nombreuses esquisses et modélisations 3D pour visualiser le projet avant sa construction. Nous avons travaillé en étroite collaboration avec un architecte paysagiste pour intégrer la piscine dans le jardin existant, en respectant la topographie et la végétation locale. Cette synergie entre les différents corps de métier est essentielle pour la réussite d'un tel projet. Les plans détaillés ont permis de minimiser les imprévus et d'assurer une exécution fluide et efficace. Chaque ligne, chaque courbe a été pensée pour s'harmoniser avec l'environnement et créer une œuvre d'art fonctionnelle. Le rendu final a largement dépassé les attentes, confirmant la pertinence de cette approche intégrée et collaborative.",
        "Enfin, l'expérience client a été au cœur de notre démarche. De la première rencontre à la livraison du projet, nous avons maintenu une communication transparente et régulière. Nous avons veillé à ce que toutes les interrogations soient répondues et que les propriétaires se sentent pleinement impliqués dans chaque étape. Leur satisfaction est notre plus grande récompense, et cette piscine miroir à Marrakech en est le témoignage éclatant. C'est un espace où les souvenirs se créent, où la détente est reine et où la beauté architecturale s'épanouit jour après jour. Nous sommes fiers d'avoir contribué à la réalisation de ce rêve aquatique, offrant une véritable évasion au quotidien."
      ],
      imagesWithinDescription: [
        { src: '/realisations/piscine-moderne-01-desc1.png', alt: 'Détail de la terrasse en bois', position: 1 },
        { src: '/realisations/piscine-moderne-01-desc2.jpg', alt: 'Vue de nuit de la piscine éclairée', position: 3 },
        { src: '/realisations/piscine-moderne-01-desc3.jpg', alt: 'Coin salon extérieur aménagé', position: 5 },
      ],
      steps: [
        { title: 'Conception et Planification', description: 'Élaboration des plans 3D, choix des matériaux et obtention des permis nécessaires. Une phase cruciale pour définir la vision du projet.' },
        { title: 'Terrassement et Gros Œuvre', description: 'Excavation, mise en place des fondations et construction de la structure en béton armé. La solidité est notre priorité.' },
        { title: 'Étanchéité et Revêtement', description: 'Application des couches d\'étanchéité et pose du revêtement intérieur (liner, carrelage, enduit). Précision et qualité sont de mise.' },
        { title: 'Installation Technique', description: 'Mise en place des systèmes de filtration, chauffage, éclairage et traitement de l\'eau. L\'innovation au service du confort.' },
        { title: 'Aménagements Paysagers', description: 'Création de la terrasse en bois, plantation et finitions autour de la piscine. L\'intégration harmonieuse dans le jardin.' },
        { title: 'Mise en Service et Formation', description: 'Remplissage de la piscine, tests des équipements et formation des propriétaires à l\'entretien. Votre piscine prête à l\'emploi.' },
      ],
      equipmentsUsed: [
        'Pompe de filtration à vitesse variable',
        'Filtre à sable haute performance',
        'Électrolyseur au sel dernière génération',
        'Pompe à chaleur réversible',
        'Projecteurs LED subaquatiques',
        'Skimmers miroirs discrets',
        'Bois IPE pour terrasse',
        'Système de débordement périphérique'
      ],
      galleryImages: [
        '/realisations/piscine-moderne-01.jpg',
        '/realisations/piscine-moderne-01-hero.jpg',
        '/realisations/piscine-moderne-01-desc1.jpg',
        '/realisations/piscine-moderne-01-desc2.jpg',
        '/realisations/piscine-moderne-01-desc3.jpg',
        // ... autres images si tu en as plus pour une galerie complète
      ]
    },
    {
      id: '2',
      slug: 'couloir-nage-essaouira',
      title: 'Couloir de Nage Ciel Ouvert',
      subtitle: 'Intégration paysagère à Essaouira, un défi relevé avec brio.',
      cardImage: '/realisations/piscine-debordement-02.jpg',
      heroImage: '/realisations/piscine-debordement-02-hero.jpg',
      pageTitle: 'Couloir de Nage : Sport et Détente en Plein Air',
      pageDescription: 'Découvrez notre projet audacieux à Essaouira, un couloir de nage qui se fond parfaitement dans le paysage côtier, offrant une expérience aquatique unique et ressourçante.',
      shortDescription: 'À Essaouira, nous avons relevé le défi de créer un couloir de nage qui ne soit pas seulement fonctionnel pour l\'exercice, mais aussi une pièce maîtresse du jardin, en parfaite harmonie avec l\'environnement venteux et l\'architecture locale. La longueur du bassin a été optimisée pour la nage sportive, tandis que la profondeur constante garantit un confort maximal. L\'intégration paysagère a été une priorité, avec des matériaux qui résistent aux intempéries marines et une végétation endémique qui sublime les lignes épurées de la piscine. Le résultat est un espace où l\'on peut se dépenser et se détendre, tout en profitant de la beauté naturelle d\'Essaouira.',
      mainDescription: [
        "Le choix d'un couloir de nage a été dicté par le souhait du client d'avoir un espace dédié à l'activité physique sans compromettre l'esthétique du jardin. Sa forme rectiligne et allongée s'intègre naturellement le long de la propriété, créant une perspective visuelle intéressante. L'orientation a été étudiée pour maximiser l'ensoleillement et minimiser l'impact du vent, caractéristique d'Essaouira. Les margelles en pierre locale ont été sélectionnées pour leur résistance et leur couleur, s'harmonisant avec l'environnement. Nous avons également intégré un système de nage à contre-courant, offrant une expérience de natation plus intense pour les sportifs, tout en restant discret lorsqu'il n'est pas utilisé. L'aspect minimaliste du design contribue à une ambiance de sérénité absolue, loin de l'agitation quotidienne.",
        "La robustesse de la structure a été une considération primordiale, étant donné la proximité de la mer et les variations climatiques. Nous avons utilisé des techniques de construction spécifiques pour garantir la longévité de l'ouvrage, y compris un renforcement de l'armature en béton et l'application de revêtements résistants au sel et aux UV. La qualité de l'eau est assurée par un système de filtration avancé, comprenant un filtre à diatomées pour une finesse de filtration exceptionnelle. Un système de régulation automatique du pH et du chlore maintient l'équilibre chimique de l'eau, réduisant ainsi les besoins en intervention manuelle. La durabilité et la facilité d'entretien ont été les maîtres mots de cette conception, assurant une tranquillité d'esprit aux propriétaires pour de nombreuses années.",
        "L'aménagement paysager autour du couloir de nage a été conçu pour créer une continuité visuelle et fonctionnelle. Des plantations résistantes au vent et à la sécheresse ont été choisies, comme des oliviers et des plantes grasses, qui ne nécessitent que peu d'entretien. Des chemins en pas japonais mènent aux différentes zones de détente, incluant un petit espace salon et une douche extérieure. L'éclairage de jardin a été pensé pour mettre en valeur les lignes du bassin la nuit, créant une atmosphère douce et accueillante. Les matériaux naturels prédominent, du bois flotté aux galets, renforçant l'impression d'une intégration parfaite dans le site. Cette attention aux détails transforme l'ensemble en un véritable havre de paix, propice à la relaxation et à la contemplation des paysages marocains.",
        "La conception des plages immergées à l'extrémité du couloir offre un espace idéal pour la relaxation et la baignade des plus jeunes. Ces zones peu profondes permettent de se rafraîchir en toute sécurité, ajoutant une dimension ludique au bassin. Elles sont particulièrement appréciées lors des chaudes journées d'été, offrant un lieu de repos confortable sans quitter l'eau. Leur intégration discrète ne rompt pas la ligne épurée du couloir de nage, prouvant qu'il est possible de concilier fonctionnalité et esthétique. Les matériaux antidérapants ont été utilisés pour la sécurité, assurant une adhérence optimale même pieds mouillés. Ce souci du détail se retrouve dans toutes nos réalisations, car le confort et la sécurité de nos clients sont nos priorités absolues à chaque étape de la réalisation de votre projet.",
        "Le suivi du projet, de l'idée initiale à la livraison finale, a été mené avec la plus grande rigueur. Des réunions régulières avec le client et les différents corps de métier ont permis d'assurer une coordination parfaite et de respecter les délais impartis. Les imprévus, inhérents à tout projet de cette envergure, ont été gérés avec flexibilité et professionnalisme, garantissant la fluidité du chantier. La communication transparente a été essentielle pour la satisfaction du client, qui a pu suivre l'avancement des travaux pas à pas. Nous avons également proposé des solutions innovantes pour surmonter les contraintes techniques liées au terrain, démontrant notre expertise et notre capacité à nous adapter. L'objectif était de livrer un ouvrage d'exception, parfaitement conforme aux attentes.",
        "En somme, ce couloir de nage à Essaouira est un exemple parfait de notre savoir-faire en matière de conception de piscines sur mesure. Il incarne l'alliance réussie entre le design contemporain, la performance technique et l'intégration paysagère. Chaque élément a été pensé pour créer un espace de vie extérieur unique, où la beauté de la nature rencontre le luxe de l'eau. C'est un lieu qui invite à l'évasion, à la pratique sportive et à la contemplation, offrant une qualité de vie incomparable. Les retours positifs de nos clients témoignent de la réussite de ce projet, qui s'inscrit fièrement dans notre portefeuille de réalisations d'exception. Nous sommes honorés d'avoir pu transformer une vision en une réalité aussi magnifique."
      ],
      imagesWithinDescription: [
        { src: '/realisations/piscine-debordement-02-desc1.jpg', alt: 'Vue aérienne du couloir de nage', position: 1 },
        { src: '/realisations/piscine-debordement-02-desc2.jpeg', alt: 'Détail de la pierre locale', position: 3 },
        { src: '/realisations/piscine-debordement-02-desc3.jpg', alt: 'Zone de détente avec végétation', position: 5 },
      ],
      steps: [
        { title: 'Analyse du Site et Conception', description: 'Étude topographique, analyse des vents dominants et création des plans personnalisés. La clé d\'une intégration réussie.' },
        { title: 'Fondations et Structure', description: 'Excavation précise, pose du ferraillage et coulage du béton armé, avec un focus sur la résistance marine.' },
        { title: 'Liner et Systèmes Hydrauliques', description: 'Installation d\'un liner armé spécifique pour l\'environnement salin et mise en place du réseau hydraulique optimisé.' },
        { title: 'Local Technique et Traitement', description: 'Aménagement du local technique avec filtre à diatomées et système de régulation automatique pour une eau parfaite.' },
        { title: 'Aménagements Paysagers Côte Ouest', description: 'Plantation de végétaux adaptés au climat côtier et installation de plages et chemins en pierre naturelle.' },
        { title: 'Tests et Livraison', description: 'Vérification de tous les systèmes, équilibrage de l\'eau et remise des clés avec conseils d\'entretien. Prêt à nager !' },
      ],
      equipmentsUsed: [
        'Pompe de filtration multi-vitesses',
        'Filtre à diatomées',
        'Système de nage à contre-courant',
        'Régulateur automatique pH/chlore',
        'Liner armé résistant au sel',
        'Éclairage LED RGB',
        'Margelles en pierre naturelle d\'Essaouira'
      ],
      galleryImages: [
        '/realisations/piscine-debordement-02.jpg',
        '/realisations/piscine-debordement-02-hero.jpg',
        '/realisations/piscine-debordement-02-desc1.jpg',
        '/realisations/piscine-debordement-02-desc2.jpg',
        '/realisations/piscine-debordement-02-desc3.jpg',
      ]
    },
    {
      id: '3',
      slug: 'bassin-naturel-agadir',
      title: 'Bassin Naturel & Aménagement Zen',
      subtitle: 'Retraite aquatique à Agadir, une oasis de sérénité.',
      cardImage: '/realisations/piscine-zen-03.jpg',
      heroImage: '/realisations/piscine-zen-03-hero.jpg',
      pageTitle: 'Bassin Naturel : Harmonie et Biodiversité',
      pageDescription: 'Découvrez notre création à Agadir, un bassin naturel conçu pour l\'harmonie, où la flore et la faune aquatiques contribuent à un écosystème sain et une beauté intemporelle.',
      shortDescription: 'À Agadir, nous avons concrétisé le rêve d\'un espace de baignade où la nature est reine. Ce bassin naturel est une alternative écologique et esthétique aux piscines traditionnelles, s\'intégrant parfaitement dans un aménagement zen. L\'eau est purifiée biologiquement par les plantes et les micro-organismes, offrant une qualité de baignade exceptionnelle sans produits chimiques. La conception a privilégié des formes organiques et des matériaux bruts pour renforcer le sentiment d\'une nature préservée, faisant de ce bassin un véritable écosystème vivant et un lieu de ressourcement profond. L\'objectif était de créer un lieu où l\'on peut se connecter pleinement avec la nature, loin du tumulte de la vie quotidienne.',
      mainDescription: [
        "Le principe du bassin naturel repose sur un système de filtration biologique où les plantes jouent un rôle essentiel. Plutôt que d'utiliser des produits chimiques, l'eau circule à travers des zones de régénération plantées, où les micro-organismes décomposent les impuretés. Ce processus naturel garantit une eau pure et douce, respectueuse de l'environnement et de la peau. Le design a été inspiré par les paysages naturels, avec des roches, des galets et une variété de végétaux aquatiques qui créent un tableau vivant et évolutif au fil des saisons. L'intégration de petites cascades ou de ruisseaux peut également ajouter un élément sonore apaisant, renforçant l'ambiance zen de l'ensemble du projet. Chaque élément est choisi avec soin pour contribuer à l'équilibre écologique du bassin.",
        "L'aménagement zen autour du bassin est caractérisé par des lignes épurées, des matériaux naturels et une palette de couleurs douces. Des chemins en ardoise, des ponts en bois et des zones de méditation avec des coussins sont autant d'éléments qui invitent à la contemplation et à la relaxation. La végétation environnante a été sélectionnée pour sa discrétion et sa capacité à créer une atmosphère paisible, sans détourner l'attention du bassin lui-même. Des lanternes japonaises et des sculptures minimalistes peuvent compléter le décor, ajoutant une touche d'élégance et de spiritualité. Cet espace est conçu pour être un sanctuaire personnel, un lieu où l'on peut se déconnecter du monde extérieur et se ressourcer en profondeur, en harmonie avec la nature environnante. C'est une invitation constante à la détente et à la sérénité.",
        "La biodiversité est un atout majeur des bassins naturels. En plus des plantes aquatiques, le bassin attire une faune variée : libellules, grenouilles, et parfois même de petits poissons (non prédateurs) peuvent trouver refuge dans cet écosystème. Cette vie foisonnante contribue à l'équilibre du bassin et offre un spectacle fascinant pour les observateurs. L'absence de chlore permet une immersion totale dans un environnement sain et vivant, loin des irritations oculaires ou cutanées associées aux piscines chlorées. C'est une expérience de baignade unique, proche de la nature, qui éveille les sens et nourrit l'âme. La découverte de cette biodiversité est une source d'émerveillement quotidien, ajoutant une dimension éducative au jardin.",
        "L'entretien d'un bassin naturel est différent de celui d'une piscine classique. Il ne s'agit pas d'ajouter des produits chimiques, mais plutôt de veiller à l'équilibre de l'écosystème. Cela implique le nettoyage régulier des skimmers de surface pour enlever les feuilles, la taille des plantes aquatiques et un contrôle occasionnel de la qualité de l'eau. Un système de filtration mécanique peut être ajouté pour les particules grossières, mais le cœur du système reste biologique. Nos équipes fournissent une formation complète aux propriétaires pour leur permettre de gérer facilement leur bassin. Nous proposons également des contrats d'entretien spécifiques pour les bassins naturels, garantissant leur pérennité et leur beauté. La simplicité d'entretien est un atout majeur pour ceux qui recherchent une solution écologique et durable.",
        "La conception de ce bassin à Agadir a également intégré des aspects techniques innovants. Une pompe à faible consommation énergétique assure la circulation de l'eau entre la zone de baignade et la zone de régénération, minimisant l'empreinte écologique. Le système de débordement, bien que discret, permet une excellente oxygénation de l'eau et contribue à son auto-purification. Les matériaux utilisés pour l'étanchéité sont écologiques et durables, garantissant une protection optimale du bassin. Nous avons également intégré un système de remplissage automatique en cas d'évaporation excessive, assurant un niveau d'eau constant. Cette alliance de l'écologie et de la technologie moderne fait de ce bassin un modèle en son genre, prouvant qu'il est possible de concilier respect de l'environnement et confort de baignade.",
        "Ce projet à Agadir est plus qu'un simple bassin ; c'est une philosophie de vie, une invitation à ralentir et à se reconnecter avec les éléments. Il représente notre engagement à créer des espaces aquatiques uniques, qui respectent l'environnement et répondent aux aspirations profondes de nos clients. La réaction des propriétaires, émerveillés par la transformation de leur jardin en ce havre de paix, est notre plus grande satisfaction. C'est un espace où la baignade devient une expérience méditative, où la nature se révèle dans toute sa splendeur. Nous sommes fiers d'avoir réalisé ce bassin naturel, qui témoigne de notre expertise et de notre passion pour l'innovation écologique dans le domaine de la piscine et du bien-être aquatique."
      ],
      imagesWithinDescription: [
        { src: '/realisations/piscine-zen-03-desc1.jpg', alt: 'Vue rapprochée des plantes aquatiques', position: 1 },
        { src: '/realisations/piscine-zen-03-desc2.jpg', alt: 'Chemin zen menant au bassin', position: 3 },
        { src: '/realisations/piscine-zen-03-desc3.jpg', alt: 'Détail de la zone de régénération', position: 5 },
      ],
      steps: [
        { title: 'Étude Biologique et Conception', description: 'Analyse de l\'écosystème local, choix des plantes et design du bassin pour une auto-épuration optimale. Une approche scientifique et esthétique.' },
        { title: 'Terrassement et Zones de Régénération', description: 'Création des différentes profondeurs et des zones dédiées aux plantes épuratrices. La base de l\'équilibre biologique.' },
        { title: 'Installation du Liner et Roches', description: 'Pose d\'un liner EPDM résistant et intégration des roches et galets pour un aspect naturel. Finitions minérales soignées.' },
        { title: 'Plantation Aquatique', description: 'Mise en place des espèces végétales choisies pour leurs propriétés filtrantes et esthétiques. La vie s\'installe dans le bassin.' },
        { title: 'Aménagements Paysagers Zen', description: 'Création de chemins, installation de zones de détente et intégration de la végétation environnante. Harmonie et sérénité.' },
        { title: 'Mise en Eau et Équilibrage', description: 'Remplissage du bassin, vérification de la circulation et ajustement initial de l\'écosystème. Votre havre de paix prend vie.' },
      ],
      equipmentsUsed: [
        'Pompe de circulation basse consommation',
        'Filtre UV (optionnel pour clarifier l\'eau)',
        'Skimmers de surface naturels',
        'Liner EPDM durable et écologique',
        'Variété de plantes aquatiques (nénuphars, iris, roseaux)',
        'Roches et galets naturels'
      ],
      galleryImages: [
        '/realisations/piscine-zen-03.jpg',
        '/realisations/piscine-zen-03-hero.jpg',
        '/realisations/piscine-zen-03-desc1.jpg',
        '/realisations/piscine-zen-03-desc2.jpg',
        '/realisations/piscine-zen-03-desc3.jpg',
      ]
    },
    {
      id: '4',
      slug: 'espace-familial-rabat',
      title: 'Espace Familial avec Cascade',
      subtitle: 'Conception personnalisée à Rabat, pour le plaisir de tous les âges.',
      cardImage: '/realisations/piscine-familiale-04.jpg',
      heroImage: '/realisations/piscine-familiale-04-hero.jpg',
      pageTitle: 'Piscine Familiale : Joie et Convivialité',
      pageDescription: 'Découvrez notre réalisation à Rabat, une piscine conçue pour le bonheur de toute la famille, avec des espaces dédiés aux jeux et à la détente, sublimés par une cascade apaisante.',
      shortDescription: 'À Rabat, nous avons créé une piscine familiale conçue pour la convivialité et le plaisir de tous. Avec des zones de baignade adaptées aux enfants et aux adultes, agrémentée d\'une cascade rafraîchissante, cette piscine est le cœur des activités estivales. La sécurité et le confort ont été au centre de notre démarche, avec des accès facilités et des revêtements antidérapants. Le design intègre des éléments ludiques tout en conservant une esthétique élégante qui s\'intègre parfaitement dans le jardin de la propriété. C\'est un espace de vie extérieur où chaque membre de la famille trouve son compte, des jeux aquatiques aux moments de pure détente sous le soleil marocain.',
      mainDescription: [
        "La conception de cette piscine familiale a été pensée pour offrir un maximum de fonctionnalités pour tous les âges. Une large plage immergée permet aux tout-petits de barboter en toute sécurité et aux adultes de se prélasser au bord de l'eau. La profondeur du bassin évolue progressivement, offrant un espace de jeu confortable pour les enfants et une zone plus profonde pour la nage. La cascade intégrée n'est pas seulement un élément esthétique ; elle apporte une animation sonore apaisante et contribue à l'oxygénation de l'eau, améliorant ainsi la qualité de la baignade. Les jets d'eau massants, discrètement intégrés, ajoutent une touche de bien-être pour les moments de relaxation. L'ensemble est conçu pour être à la fois ludique et élégant, reflétant le style de vie de la famille.",
        "Les matériaux choisis pour cette réalisation à Rabat sont à la fois esthétiques et résistants. Un revêtement en mosaïque de couleur claire donne à l'eau une teinte cristalline et reflète parfaitement la lumière. Les margelles en travertin apportent une touche naturelle et chaleureuse, tout en étant antidérapantes pour la sécurité. La plage de la piscine a été conçue avec un revêtement frais au toucher, même sous le soleil intense. Les équipements de sécurité, comme une alarme immergée discrète et une couverture de sécurité automatique, sont intégrés pour garantir la tranquillité d'esprit des parents. Chaque détail, de la sélection des matériaux à l'intégration des fonctionnalités, a été pensé pour la durabilité et la sécurité, sans jamais compromettre l'esthétique générale du projet aquatique.",
        "L'espace autour de la piscine a été entièrement repensé pour maximiser la convivialité. Une cuisine d'été avec un barbecue a été aménagée à proximité, permettant d'organiser des repas en plein air sans s'éloigner de l'action. Des transats confortables et des parasols élégants offrent des zones d'ombre pour la détente. L'éclairage extérieur a été soigneusement planifié pour créer une ambiance chaleureuse et festive le soir, prolongeant les moments de plaisir jusqu'à la nuit. Des enceintes extérieures, discrètement intégrées, permettent de diffuser de la musique, transformant l'espace en un véritable lieu de fête et de partage. L'aménagement paysager, avec des palmiers et des fleurs locales, complète l'ensemble, créant une atmosphère de vacances permanente dans le jardin familial. C'est un véritable prolongement de la maison, pensé pour le plaisir et la vie en plein air.",
        "Le système de filtration et de traitement de l'eau est de dernière génération, assurant une eau toujours propre et saine pour la famille. Un filtre à cartouche, facile d'entretien, retient les impuretés les plus fines, tandis qu'un traitement au brome ou à l'oxygène actif garantit une désinfection efficace et douce pour la peau. Un système de régulation automatique du pH maintient l'équilibre idéal de l'eau, réduisant les interventions manuelles. La pompe de filtration est silencieuse et économe en énergie, contribuant au respect de l'environnement et à la réduction des coûts d'exploitation. La sécurité est également renforcée par un système de détection de chute, offrant une protection supplémentaire pour les enfants. L'ensemble de ces technologies assure une expérience de baignade optimale, sans souci pour les propriétaires, qui peuvent se concentrer sur les moments de joie passés en famille.",
        "La construction a été menée avec une attention particulière aux détails et aux finitions. L'équipe a travaillé en étroite collaboration avec les propriétaires pour s'assurer que chaque élément correspondait à leurs attentes, depuis la phase de conception jusqu'à la livraison finale. Des inspections régulières ont été effectuées pour garantir le respect des normes de qualité et de sécurité. Les défis techniques, comme l'intégration de la cascade dans le mur existant du jardin, ont été résolus avec ingéniosité et savoir-faire. Le résultat est une piscine non seulement belle, mais aussi parfaitement fonctionnelle et durable. Cette transparence et cette rigueur dans la gestion de projet sont les piliers de notre réputation. Nous veillons à ce que chaque client se sente écouté et que ses désirs soient pleinement réalisés, transformant ainsi chaque projet en une réussite éclatante.",
        "En conclusion, cette piscine familiale avec cascade à Rabat est un véritable chef-d'œuvre de conception et de construction, pensé pour le bonheur et la détente de toute une famille. Elle combine élégance, fonctionnalité et sécurité, créant un espace de vie extérieur où les souvenirs se forgent et les rires fusent. Nous sommes fiers d'avoir accompagné nos clients dans la réalisation de ce projet qui représente un investissement dans leur qualité de vie. C'est un lieu qui invite à la joie, à la relaxation et au partage, reflétant parfaitement notre engagement à créer des piscines d'exception qui enrichissent le quotidien. Le bonheur de cette famille est notre plus belle récompense, et leur piscine, le témoin de notre expertise."
      ],
      imagesWithinDescription: [
        { src: '/realisations/piscine-familiale-04-desc1.jpg', alt: 'Plage immergée pour enfants', position: 1 },
        { src: '/realisations/piscine-familiale-04-desc2.jpg', alt: 'Vue de la cascade et des jets d\'eau', position: 3 },
        { src: '/realisations/piscine-familiale-04-desc3.jpg', alt: 'Cuisine d\'été aménagée près de la piscine', position: 5 },
      ],
      steps: [
        { title: 'Analyse des Besoins et Esquisses', description: 'Rencontre avec la famille, définition des fonctionnalités souhaitées et création des premiers croquis. La personnalisation au cœur du projet.' },
        { title: 'Calculs et Terrassement', description: 'Étude des sols, excavation du bassin avec les différentes profondeurs et préparation des zones de jeu. La base d\'une structure solide.' },
        { title: 'Maçonnerie et Système de Cascade', description: 'Construction de la structure en béton armé et intégration des éléments pour la cascade et les jets d\'eau. Ingéniosité et technique.' },
        { title: 'Revêtement et Équipements Ludiques', description: 'Pose de la mosaïque, installation des projecteurs LED et mise en place des jeux d\'eau. La magie opère.' },
        { title: 'Aménagements Extérieurs et Sécurité', description: 'Création de la terrasse, aménagement paysager et installation des systèmes de sécurité (alarme, couverture). Harmonie et protection.' },
        { title: 'Mise en Route et Formation', description: 'Remplissage, équilibrage de l\'eau et formation complète sur l\'entretien et l\'utilisation des équipements. Prêt pour l\'été !' },
      ],
      equipmentsUsed: [
        'Pompe de filtration silencieuse',
        'Filtre à cartouche haute finesse',
        'Traitement au brome ou oxygène actif',
        'Régulateur automatique de pH',
        'Cascade murale avec pompe dédiée',
        'Jets d\'eau massants',
        'Alarme périmétrique et immergée',
        'Couverture de sécurité automatique',
        'Mosaïque en pâte de verre'
      ],
      galleryImages: [
        '/realisations/piscine-familiale-04.jpg',
        '/realisations/piscine-familiale-04-hero.jpg',
        '/realisations/piscine-familiale-04-desc1.jpg',
        '/realisations/piscine-familiale-04-desc2.jpg',
        '/realisations/piscine-familiale-04-desc3.jpg',
      ]
    },
    {
      id: '5',
      slug: 'piscine-urbaine-casablanca',
      title: 'Piscine Urbaine & Pool House',
      subtitle: 'Optimisation d\'espace à Casablanca, un luxe discret.',
      cardImage: '/realisations/piscine-urbaine-05.jpg',
      heroImage: '/realisations/piscine-urbaine-05-hero.jpg',
      pageTitle: 'Piscine Urbaine : L\'Évasion au Cœur de la Ville',
      pageDescription: 'Découvrez notre projet à Casablanca, une piscine urbaine avec pool house intégré, optimisant l\'espace pour créer un havre de paix et de modernité en plein centre-ville.',
      shortDescription: 'À Casablanca, le défi était de créer un espace aquatique luxueux et fonctionnel dans un environnement urbain contraint. Nous avons conçu une piscine compacte mais élégante, complétée par un pool house entièrement équipé, offrant une oasis de fraîcheur et de modernité. L\'optimisation de l\'espace a été la clé, avec des solutions ingénieuses pour maximiser chaque recoin du jardin. Le design contemporain et les matériaux de haute qualité garantissent une intégration parfaite dans l\'architecture urbaine, faisant de cette réalisation un exemple d\'ingéniosité et de savoir-faire. C\'est une invitation à l\'évasion, au milieu de l\'effervescence de la métropole, un lieu où le luxe et la détente se rencontrent harmonieusement.',
      mainDescription: [
        "La conception d'une piscine en milieu urbain exige une approche astucieuse pour maximiser l'espace disponible. Cette réalisation à Casablanca se caractérise par des lignes épurées et un design compact, qui s'intègre parfaitement dans les contraintes architecturales. La piscine, bien que de taille modeste, offre toutes les fonctionnalités d'un grand bassin : nage, détente, et convivialité. L'accent a été mis sur des solutions techniques discrètes, comme des systèmes de filtration encastrés et des volets roulants immergés, pour préserver l'esthétique minimale. L'orientation du bassin a été pensée pour bénéficier d'un ensoleillement optimal tout au long de la journée, transformant le petit jardin en un véritable solarium privé. L'effet miroir de l'eau ajoute une dimension visuelle, agrandissant l'espace et reflétant le ciel urbain.",
        "Le pool house attenant est une véritable extension de la piscine, offrant des commodités essentielles : une douche extérieure discrète, des toilettes, et un petit coin cuisine pour les rafraîchissements. Son architecture moderne s'harmonise avec celle de la maison principale, utilisant les mêmes matériaux et couleurs pour créer une continuité visuelle. C'est un espace multifonctionnel qui permet de profiter pleinement des abords de la piscine sans avoir à rentrer dans la maison. Un petit salon extérieur aménagé sous une pergola bioclimatique offre une protection solaire modulable, créant un espace ombragé parfait pour la lecture ou les conversations. L'intégration de rangements dissimulés aide à maintenir l'ordre et la propreté, essentiels dans un espace urbain où chaque mètre carré compte. Le pool house devient ainsi un véritable centre de vie autour de la piscine.",
        "Les matériaux choisis pour cette piscine urbaine sont à la fois élégants et faciles d'entretien. Un revêtement en enduit silico-marbreux de couleur anthracite donne à l'eau une profondeur et une teinte très contemporaine. Les plages de piscine en pierre naturelle de Bali apportent une touche d'exotisme et de raffinement, tout en étant résistantes et antidérapantes. L'éclairage LED multicolore intégré permet de varier les ambiances le soir, créant une atmosphère festive ou apaisante selon les désirs. L'automatisation des systèmes de filtration et de traitement de l'eau minimise les efforts d'entretien, une considération importante pour les citadins au rythme de vie effréné. La qualité des matériaux garantit une durabilité exceptionnelle, assurant que cette oasis urbaine restera belle et fonctionnelle pour de nombreuses années. C'est un investissement dans la qualité de vie, offrant un luxe discret au cœur de la ville.",
        "L'optimisation de l'espace a également concerné les aspects techniques. Le local technique, souvent encombrant, a été astucieusement dissimulé sous la terrasse du pool house, le rendant invisible tout en restant facilement accessible pour la maintenance. Des solutions compactes et performantes ont été privilégiées pour les pompes, filtres et systèmes de traitement. Un système de nage à contre-courant a été intégré pour permettre une nage sportive malgré la taille réduite du bassin, offrant ainsi une fonctionnalité inattendue dans un espace urbain. La discrétion acoustique des équipements a été une priorité, afin de ne pas perturber la quiétude du voisinage. Chaque élément technique a été pensé pour être à la fois efficace, compact et silencieux, contribuant à une expérience utilisateur sans faille. Cette ingéniosité technique est une marque de fabrique de nos réalisations.",
        "La phase de conception a été cruciale pour ce projet. Grâce à des rendus 3D réalistes, les clients ont pu visualiser chaque aspect de leur future piscine et pool house, ce qui a permis d'ajuster les détails et de valider les choix esthétiques et fonctionnels. La collaboration avec les architectes et les paysagistes locaux a été essentielle pour intégrer le projet dans son environnement immédiat et respecter les réglementations urbaines. Cette approche collaborative et itérative garantit que le produit final correspond parfaitement aux attentes du client et aux contraintes du site. La flexibilité de notre équipe a permis de s'adapter aux demandes spécifiques, transformant les défis en opportunités de créer des solutions innovantes. Le résultat est un espace qui dépasse les attentes, un véritable joyau au cœur de la ville.",
        "En définitive, cette piscine urbaine avec pool house à Casablanca est un témoignage de notre capacité à créer des espaces aquatiques exceptionnels, même dans les environnements les plus exigeants. Elle offre une solution élégante et fonctionnelle pour ceux qui recherchent le luxe et la détente en plein cœur de la ville, transformant un espace limité en une véritable oasis. Nous sommes extrêmement fiers d'avoir réalisé ce projet, qui allie esthétique moderne, innovation technique et optimisation de l'espace. C'est une réalisation qui prouve que l'on peut rêver grand, même dans un petit jardin, et que le bien-être n'est pas l'apanage des grandes propriétés. C'est une invitation à redéfinir le concept de jardin urbain, en y intégrant une dimension aquatique de haute qualité."
      ],
      imagesWithinDescription: [
        { src: '/realisations/piscine-urbaine-05-desc1.jpg', alt: 'Vue rapprochée du pool house moderne', position: 1 },
        { src: '/realisations/piscine-urbaine-05-desc2.jpg', alt: 'Intérieur du pool house avec coin cuisine', position: 3 },
        { src: '/realisations/piscine-urbaine-05-desc3.jpeg', alt: 'Terrasse en pierre de Bali et salon extérieur', position: 5 },
      ],
      steps: [
        { title: 'Étude d\'Implantation et Permis', description: 'Analyse des contraintes urbaines, optimisation du plan d\'implantation et obtention des autorisations. La planification est essentielle en ville.' },
        { title: 'Terrassement et Raccordements', description: 'Excavation précise et raccordement aux réseaux existants (eau, électricité, évacuation). Une logistique complexe maîtrisée.' },
        { title: 'Construction du Bassin et Pool House', description: 'Édification de la structure de la piscine et du pool house en parallèle. Cohérence architecturale.' },
        { title: 'Installation des Équipements Compacts', description: 'Mise en place des systèmes de filtration, chauffage et éclairage optimisés pour les petits espaces. Performance et discrétion.' },
        { title: 'Aménagements Finaux', description: 'Pose des revêtements, installation du mobilier et végétalisation minimale. Le luxe dans les détails.' },
        { title: 'Mise en Service et Réception', description: 'Tests complets, ajustements et remise du projet clé en main. Votre oasis urbaine est prête.' },
      ],
      equipmentsUsed: [
        'Pompe de filtration compacte',
        'Filtre à cartouche',
        'Traitement UV pour désinfection',
        'Système de nage à contre-courant intégré',
        'Volet roulant immergé',
        'Projecteurs LED haute puissance',
        'Revêtement enduit silico-marbreux',
        'Pierre naturelle de Bali'
      ],
      galleryImages: [
        '/realisations/piscine-urbaine-05.jpg',
        '/realisations/piscine-urbaine-05-hero.jpg',
        '/realisations/piscine-urbaine-05-desc1.jpg',
        '/realisations/piscine-urbaine-05-desc2.jpg',
        '/realisations/piscine-urbaine-05-desc3.jpg',
      ]
    },
    {
      id: '6',
      slug: 'bassin-interieur-fes',
      title: 'Bassin Intérieur Élégant',
      subtitle: 'Luxe et bien-être à Fès, une expérience intime.',
      cardImage: '/realisations/piscine-interieur-06.jpg',
      heroImage: '/realisations/piscine-interieur-06-hero.jpg',
      pageTitle: 'Piscine Intérieure : Confort et Raffinement',
      pageDescription: 'Découvrez notre réalisation à Fès, un bassin intérieur élégant conçu pour le luxe et le bien-être, offrant une expérience de baignade intime et sophistiquée, accessible toute l\'année.',
      shortDescription: 'À Fès, nous avons créé une piscine intérieure qui incarne le luxe et le bien-être, offrant une expérience de baignade exclusive et intime, accessible en toute saison. Le design a été pensé pour s\'intégrer parfaitement à l\'architecture raffinée de la résidence, en utilisant des matériaux nobles et un éclairage sophistiqué. Au-delà de l\'aspect esthétique, le confort et la qualité de l\'air ont été des priorités absolues, avec des systèmes de déshumidification et de chauffage avancés. Cette réalisation est un véritable havre de paix, une pièce maîtresse dédiée à la relaxation et à la sérénité. C\'est un espace de vie supplémentaire, synonyme de raffinement et de moments privilégiés, loin des regards extérieurs et des caprices de la météo.',
      mainDescription: [
        "La conception d'un bassin intérieur est un art qui exige une maîtrise technique et esthétique. Ce projet à Fès met en lumière l'élégance intemporelle des piscines intérieures, offrant un espace de détente et de nage à l'abri des intempéries. Le défi réside dans la gestion de l'humidité et de la température, pour lesquelles nous avons intégré des systèmes de déshumidification et de chauffage de l'air de dernière génération. Ces technologies garantissent un climat intérieur agréable et préviennent la condensation, assurant la pérennité de la structure du bâtiment. L'éclairage, qu'il soit naturel ou artificiel, est soigneusement étudié pour créer une ambiance lumineuse et apaisante, rehaussant la beauté de l'eau et des matériaux. Chaque détail est pensé pour le confort absolu et l'expérience sensorielle de l'utilisateur. La vision est de créer un sanctuaire personnel, un lieu de retraite et de ressourcement, où l'on peut se déconnecter du monde extérieur et profiter d'un luxe discret et intemporel.",
        "Les matériaux utilisés pour cette piscine intérieure sont choisis pour leur résistance à l'humidité et leur esthétique haut de gamme. Un revêtement en carrelage de verre de Murano donne à l'eau des reflets scintillants et une profondeur inégalée, tandis que les murs et le plafond sont habillés de bois précieux et de pierre naturelle. L'acoustique de la pièce a été optimisée pour réduire l'écho et créer une atmosphère de sérénité. De grandes baies vitrées coulissantes ouvrent sur un patio intérieur ou un jardin, permettant de moduler l'espace et de profiter d'une connexion visuelle avec l'extérieur, même en restant à l'intérieur. Le solarium intérieur, avec ses transats confortables et son système de chauffage par le sol, invite à la relaxation après la baignade. L'ensemble architectural se veut une ode au luxe et au bien-être, où chaque texture et chaque couleur contribuent à l'harmonie générale. C'est un espace qui éveille les sens et nourrit l'âme.",
        "Le système de filtration et de traitement de l'eau est ultra-performant, assurant une qualité d'eau irréprochable. Un filtre à verre, réputé pour sa finesse de filtration, associé à un traitement automatique à l'ozone ou aux UV, garantit une eau cristalline sans odeur de chlore. La température de l'eau est maintenue à un niveau constant et agréable grâce à un système de chauffage de l'eau indépendant. Des buses de massage et un système de nage à contre-courant sont intégrés pour agrémenter l'expérience de baignade et offrir des possibilités d'exercice ou de relaxation. La domotique permet de contrôler l'ensemble des paramètres (lumière, température, filtration) à distance, offrant un confort d'utilisation maximal. Cette technologie de pointe assure une gestion facile et efficace de la piscine, permettant aux propriétaires de profiter pleinement de leur investissement sans contrainte technique. C'est le summum de l'innovation au service du confort et de la tranquillité d'esprit.",
        "L'ambiance lumineuse joue un rôle crucial dans une piscine intérieure. Un éclairage LED subtil, avec des variations de couleurs, permet de créer différentes atmosphères, du matin au soir. Des puits de lumière ou des verrières peuvent être intégrés au plafond pour maximiser l'apport de lumière naturelle et créer un lien avec le ciel. Les luminaires sont choisis pour leur design élégant et leur résistance à l'humidité. La nuit, l'éclairage subaquatique met en valeur la profondeur de l'eau et les reflets du carrelage, transformant la pièce en un espace magique et envoûtant. L'utilisation de variateurs permet de moduler l'intensité lumineuse selon les envies, créant une ambiance personnalisée pour chaque occasion. Cette maîtrise de la lumière est essentielle pour sublimer l'architecture et créer une expérience immersive et mémorable, captivant l'attention et nourrissant l'imagination des utilisateurs.",
        "La construction d'une piscine intérieure requiert une expertise technique spécifique, notamment en matière d'étanchéité, d'isolation et de ventilation. Notre équipe possède l'expérience nécessaire pour relever ces défis, garantissant une construction durable et sans problème. Nous travaillons en étroite collaboration avec les architectes et les designers d'intérieur pour que la piscine s'intègre harmonieusement dans l'ensemble de la résidence. Le chantier est géré avec une grande rigueur, minimisant les nuisances et respectant les délais. La qualité des finitions est notre priorité, car chaque détail contribue au sentiment de luxe et de perfection. La satisfaction du client est au cœur de notre démarche, et nous mettons tout en œuvre pour que le résultat final dépasse leurs attentes. Cette approche globale et intégrée est la garantie d'une réussite totale, transformant une vision en une réalité tangible et éclatante de beauté.",
        "En conclusion, cette piscine intérieure à Fès est une ode au raffinement et au bien-être, offrant une expérience de baignade exclusive dans un cadre somptueux. Elle représente l'excellence de notre savoir-faire en matière de conception et de construction de piscines haut de gamme. C'est un espace où le luxe rencontre la fonctionnalité, où la technologie sert le confort et où l'esthétique crée une atmosphère de sérénité absolue. Nous sommes fiers d'avoir pu transformer le rêve de nos clients en une réalité aussi magnifique, un lieu où ils peuvent se ressourcer, se détendre et profiter de moments précieux en toute intimité. Cette réalisation s'inscrit comme une référence dans le domaine des piscines intérieures de prestige, témoignant de notre passion pour l'innovation et la création d'espaces aquatiques exceptionnels. Elle est le symbole d'un art de vivre raffiné et intemporel."
      ],
      imagesWithinDescription: [
        { src: '/realisations/piscine-interieur-06-desc1.jpg', alt: 'Détail du carrelage en verre de Murano', position: 1 },
        { src: '/realisations/piscine-interieur-06-desc2.jpg', alt: 'Vue de l\'éclairage LED et des baies vitrées', position: 3 },
        { src: '/realisations/piscine-interieur-06-desc3.jpg', alt: 'Coin relaxation avec fauteuils', position: 5 },
      ],
      steps: [
        { title: 'Étude Architecturale et Climatisation', description: 'Analyse de l\'intégration dans le bâtiment, étude de l\'humidité et conception du système de déshumidification. La technique au service du confort.' },
        { title: 'Structure et Étanchéité Spécifique', description: 'Construction de la coque en béton armé et application de systèmes d\'étanchéité avancés pour l\'intérieur. Sécurité et durabilité.' },
        { title: 'Revêtement et Finitions Luxueuses', description: 'Pose du carrelage de verre, installation des margelles et des finitions intérieures. Le luxe dans chaque détail.' },
        { title: 'Systèmes CVC et Filtration', description: 'Mise en place des centrales de traitement d\'air, chauffage de l\'eau et filtration haute performance. Une maîtrise technologique complète.' },
        { title: 'Aménagements Intérieurs et Luminaires', description: 'Installation des éclairages, mobilier de relaxation et éléments décoratifs. Création d\'une ambiance exclusive.' },
        { title: 'Mise en Service et Contrôle', description: 'Tests rigoureux de tous les équipements, équilibrage parfait de l\'eau et démonstration complète de la domotique. Votre espace bien-être est prêt.' },
      ],
      equipmentsUsed: [
        'Centrale de traitement d\'air et déshumidification',
        'Pompe à chaleur pour l\'eau et l\'air',
        'Filtre à verre haute performance',
        'Traitement automatique à l\'ozone ou UV',
        'Carrelage de verre de Murano',
        'Système de nage à contre-courant',
        'Buses de massage hydromassantes',
        'Projecteurs LED subaquatiques RGB',
        'Système de domotique pour gestion centralisée'
      ],
      galleryImages: [
        '/realisations/piscine-interieur-06.jpg',
        '/realisations/piscine-interieur-06-hero.jpg',
        '/realisations/piscine-interieur-06-desc1.jpg',
        '/realisations/piscine-interieur-06-desc2.jpg',
        '/realisations/piscine-interieur-06-desc3.jpg',
      ]
    },
  ];