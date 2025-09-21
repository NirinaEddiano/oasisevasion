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
      "id": "1",
      "slug": "lagon-oasis-marrakech",
      "title": "Lagon d'Oasis & Plage de Sable",
      "subtitle": "Une évasion naturelle à Marrakech, où l'eau turquoise rencontre le désert.",
      "cardImage": "/realisations/piscine-lagon-01.jpg",
      "heroImage": "/realisations/piscine-lagon-01-hero.jpg",
      "pageTitle": "Lagon d'Oasis : L'Évasion Naturelle",
      "pageDescription": "Découvrez notre projet à Marrakech, une piscine lagon qui recrée une oasis naturelle avec sa plage de sable fin, ses rochers et sa végétation luxuriante. Une invitation au voyage au cœur de votre jardin.",
      "shortDescription": "Cette réalisation emblématique à Marrakech est une véritable oasis artificielle, conçue pour offrir une expérience de baignade unique et dépaysante. Le concept de lagon avec une entrée en plage progressive et des formes organiques permet une intégration parfaite dans le paysage. L'objectif était de créer un espace de détente qui semble avoir toujours été là, en utilisant des matériaux naturels comme la pierre de l'Atlas et un revêtement à effet sable pour une eau cristalline.",
      "mainDescription": [
        "Le concept de piscine lagon a été choisi pour son esthétique naturelle et sa capacité à se fondre dans le décor. L'entrée en pente douce, ou plage immergée, permet de s'allonger au bord de l'eau et offre un espace de jeu sécurisé pour les enfants. Des enrochements naturels ont été intégrés pour créer des cascades douces, dont le murmure apaisant contribue à l'atmosphère relaxante de cette oasis. L'éclairage subaquatique a été pensé pour mettre en valeur les courbes du lagon et les textures des roches la nuit, transformant le jardin en un lieu féerique.",
        "La plage et les abords du lagon sont réalisés avec un revêtement spécial à base de résine et de quartz, offrant une texture douce et antidérapante qui rappelle le sable fin. Ce choix de matériau est crucial pour garantir une ambiance naturelle et un confort optimal. La végétation environnante a été soigneusement sélectionnée pour recréer un écosystème d'oasis, avec des palmiers, des bananiers et des plantes grasses qui demandent peu d'entretien tout en offrant un dépaysement total. L'intégration de ces éléments naturels renforce l'impression d'être dans un véritable lagon.",
        "Un des défis de ce projet a été de concevoir un système de filtration capable de gérer les particularités d'une piscine aux formes libres et avec une plage. Nous avons opté pour un système de filtration biologique assisté, qui utilise des plantes et des minéraux pour purifier l'eau, réduisant ainsi le besoin en produits chimiques. Ce système écologique garantit une eau d'une clarté exceptionnelle, douce pour la peau et respectueuse de l'environnement. Le local technique, entièrement dissimulé sous un faux rocher, préserve l'esthétique naturelle du lagon.",
        "L'espace de vie autour du lagon a été pensé pour la convivialité. Une paillote en bois abrite un bar extérieur et une cuisine d'été, idéale pour les réceptions. Des zones de détente ombragées sont dispersées autour du lagon, offrant des points de vue variés sur ce paysage aquatique. La nuit, l'éclairage paysager met en valeur la végétation et les contours du lagon, créant une ambiance magique et intime. Chaque détail a été pensé pour faire de ce lieu un véritable havre de paix et de convivialité.",
        "La conception de ce lagon a nécessité une étude paysagère approfondie pour s'assurer de son intégration parfaite dans le terrain existant. Des modélisations 3D ont permis au client de visualiser le projet dans son ensemble, de la forme du bassin à l'emplacement de chaque rocher et de chaque plante. Cette phase de planification a été essentielle pour anticiper les défis techniques et garantir un résultat à la hauteur des attentes, créant une œuvre d'art vivante qui évolue au fil des saisons.",
        "L'expérience client a été au cœur de notre démarche. Nous avons accompagné les propriétaires à chaque étape, de la conception à la réalisation, en assurant une communication transparente et une écoute attentive de leurs désirs. Leur satisfaction est notre plus grande fierté, et ce lagon à Marrakech en est la preuve. C'est un espace unique où le rêve d'une oasis privée est devenu réalité, offrant un lieu de ressourcement et de bonheur au quotidien."
      ],
      "imagesWithinDescription": [
        { "src": "/realisations/piscine-lagon-01-desc1.jpg", "alt": "Plage de sable immergée", "position": 1 },
        { "src": "/realisations/piscine-lagon-01-desc2.jpg", "alt": "Cascade en rochers naturels", "position": 3 },
        { "src": "/realisations/piscine-lagon-01-desc3.jpg", "alt": "Paillote et bar extérieur", "position": 5 }
      ],
      "steps": [
        { "title": "Conception Paysagère et Modélisation 3D", "description": "Création d'un design organique sur-mesure, choix des roches et de la végétation. La vision prend forme." },
        { "title": "Terrassement et Modelage des Formes", "description": "Excavation du terrain pour créer les différentes profondeurs et l'entrée en plage. La base du lagon est sculptée." },
        { "title": "Étanchéité et Revêtement Sable", "description": "Pose d'une membrane d'étanchéité souple et application du revêtement en résine et quartz pour un effet sable naturel." },
        { "title": "Installation Hydraulique et Filtration Écologique", "description": "Mise en place d'un système de circulation d'eau adapté aux formes libres et d'une filtration biologique." },
        { "title": "Enrochement et Aménagement Paysager", "description": "Positionnement des rochers, création des cascades et plantation de la végétation exotique. L'oasis prend vie." },
        { "title": "Mise en Eau et Équilibrage Biologique", "description": "Remplissage du lagon et démarrage du cycle de filtration biologique. La nature commence son œuvre." }
      ],
      "equipmentsUsed": [
        "Système de filtration biologique",
        "Pompe à vitesse variable silencieuse",
        "Revêtement en résine et quartz (effet sable)",
        "Rochers naturels de l'Atlas",
        "Projecteurs LED couleur ambre",
        "Système de cascade en circuit fermé",
        "Végétation luxuriante (palmiers, bananiers)",
        "Paillote en bois exotique"
      ],
      "galleryImages": [
        "/realisations/piscine-lagon-01.jpg",
        "/realisations/piscine-lagon-01-hero.jpg",
        "/realisations/piscine-lagon-01-desc1.jpg",
        "/realisations/piscine-lagon-01-desc2.jpg",
        "/realisations/piscine-lagon-01-desc3.jpg"
      ]
    },
    {
    "id": "2",
      "slug": "lagon-oasis-rabat",
      "title": "Lagon d'Oasis Familiale",
      "subtitle": "Une aventure rafraîchissante à Rabat, inspirée des wadis marocains.",
      "cardImage": "/realisations/piscine-oasis-02.jpg",
      "heroImage": "/realisations/piscine-oasis-02-hero.jpg",
      "pageTitle": "Lagon d'Oasis : L'Aventure Marocaine",
      "pageDescription": "Découvrez notre réalisation à Rabat, un lagon familial inspiré des oasis du Maroc, avec son îlot à l'olivier, sa cascade de roche naturelle et sa végétation méditerranéenne.",
      "shortDescription": "À Rabat, nous avons imaginé une piscine familiale comme une véritable oasis marocaine. Le concept s'éloigne des tropiques pour puiser son inspiration dans la beauté des wadis et des sources cachées du Maroc. Avec un îlot central planté d'un olivier, une cascade en roches de l'Atlas et une eau couleur émeraude, cette piscine est une invitation à l'évasion au cœur d'un paysage local authentique. La sécurité et le plaisir familial restent les piliers de ce projet unique, conçu pour créer des souvenirs inoubliables.",
      "mainDescription": [
        "La conception de ce lagon s'articule autour d'un îlot central où trône un magnifique olivier, symbole de la terre marocaine. Il sert de point de mire et d'aire de jeu naturelle. L'entrée dans l'eau se fait par une plage en pente douce, idéale pour les jeunes enfants, tandis que la profondeur évolue pour satisfaire nageurs et plongeurs. Une cascade, construite avec des roches naturelles locales, crée un mouvement d'eau apaisant et dissimule une petite alcôve, offrant un recoin de fraîcheur et d'intimité. L'ensemble évoque un point d'eau secret que l'on découvrirait au détour d'une randonnée dans l'Atlas.",
        "Les matériaux ont été rigoureusement sélectionnés pour leur authenticité et leur résistance. Le revêtement du lagon, à base de quartz et de pigments naturels, donne à l'eau une teinte émeraude profonde, rappelant celle des lacs de montagne. Les plages et margelles sont réalisées en pierre naturelle de la région, offrant une texture agréable et antidérapante. L'intégration d'éléments comme des poteries de Tamegroute et des touches de zellige autour des espaces de repos renforce l'identité marocaine du projet, alliant tradition et nature.",
        "L'espace paysager a été conçu comme un jardin méditerranéen luxuriant. Des palmiers, des bougainvilliers aux couleurs vives, des lauriers-roses et des massifs de lavande entourent le lagon, créant un cocon d'intimité parfumé. Un petit pont en bois d'eucalyptus permet d'enjamber une partie du bassin pour rejoindre un salon extérieur ombragé par une pergola recouverte de canisses. L'éclairage, avec des lanternes en fer forgé et des spots dissimulés, crée une ambiance féerique dès le crépuscule.",
        "Le système de filtration et de traitement de l'eau est à la fois performant et respectueux de l'environnement. Un filtre à sable de grande capacité assure une eau cristalline, et un système d'électrolyse au sel garantit un traitement doux pour la peau, sans produits chimiques agressifs. Une pompe à chaleur discrète permet de chauffer l'eau et de prolonger la saison des baignades du printemps à l'automne, pour que la famille puisse profiter de son oasis le plus longtemps possible.",
        "La construction fut un exercice de style visant à recréer un paysage naturel marocain. La structure en béton projeté nous a permis de sculpter des formes organiques et d'intégrer les enrochements de manière harmonieuse. Chaque pierre a été choisie et positionnée pour son aspect naturel. Ce projet est le fruit d'une collaboration étroite avec les propriétaires, qui souhaitaient un espace de vie extérieur unique et profondément ancré dans la culture et l'esthétique de leur pays.",
        "En conclusion, ce lagon d'oasis à Rabat est bien plus qu'une piscine ; c'est un fragment de nature marocaine recréé dans un jardin familial. Il allie l'aventure et le jeu à la sérénité d'un paysage authentique. Nous sommes fiers d'avoir su traduire le désir de nos clients en un lieu de vie exceptionnel, qui célèbre la beauté du Maroc et invite chaque jour à la détente et au bonheur partagé."
      ],
      "imagesWithinDescription": [
        { "src": "/realisations/piscine-oasis-02-desc1.jpg", "alt": "Îlot central avec un olivier", "position": 1 },
        { "src": "/realisations/piscine-oasis-02-desc2.jpg", "alt": "Cascade construite en roches naturelles du Maroc", "position": 3 },
        { "src": "/realisations/piscine-oasis-02-desc3.jpg", "alt": "Salon extérieur avec pergola marocaine", "position": 5 }
      ],
      "steps": [
        { "title": "Conception Thématique 'Oasis Marocaine'", "description": "Création des plans sur-mesure inspirés des wadis, avec îlot, cascade et choix de la végétation locale." },
        { "title": "Terrassement et Modelage des Reliefs", "description": "Sculpture du terrain pour créer les formes naturelles du lagon, la plage progressive et l'emplacement des rochers." },
        { "title": "Structure, Étanchéité et Enrochement", "description": "Construction en béton projeté, application de l'étanchéité et intégration des roches naturelles de l'Atlas." },
        { "title": "Pose du Revêtement et des Margelles", "description": "Application du revêtement couleur émeraude et pose des margelles en pierre naturelle locale." },
        { "title": "Aménagements Paysagers Méditerranéens", "description": "Plantation des espèces locales, installation de la pergola et de l'éclairage d'ambiance." },
        { "title": "Mise en Service et Finitions", "description": "Remplissage, équilibrage de l'eau et intégration des derniers détails de décoration artisanale. L'oasis est prête." }
      ],
      "equipmentsUsed": [
        "Filtre à sable haute capacité",
        "Électrolyseur au sel pour un traitement doux",
        "Pompe à chaleur toutes saisons",
        "Revêtement effet wadi (quartz et pigments naturels)",
        "Cascade en circuit fermé",
        "Rochers naturels du Maroc",
        "Végétation méditerranéenne (Olivier, Bougainvillier)",
        "Éclairage d'ambiance avec lanternes marocaines",
        "Margelles en pierre naturelle locale"
      ],
      "galleryImages": [
        "/realisations/piscine-oasis-02.jpg",
        "/realisations/piscine-oasis-02-hero.jpg",
        "/realisations/piscine-oasis-02-desc1.jpg",
        "/realisations/piscine-oasis-02-desc2.jpg",
        "/realisations/piscine-oasis-02-desc3.jpg"
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
        { src: '/realisations/piscine-zen-03-desc1.jpg', alt: 'lagon', position: 1 },
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
      "id": "6",
      "slug": "lagon-interieur-fes",
      "title": "Lagon Intérieur & Jardin Zen",
      "subtitle": "Sérénité et bien-être à Fès, une source de relaxation.",
      "cardImage": "/realisations/piscine-lagon-03.jpg",
      "heroImage": "/realisations/piscine-lagon-03-hero.jpg",
      "pageTitle": "Lagon Intérieur : L'Harmonie Zen",
      "pageDescription": "Découvrez notre réalisation à Fès, un lagon intérieur chauffé qui allie le plaisir de la baignade à la sérénité d'un jardin japonais, accessible en toute saison pour une expérience de bien-être unique.",
      "shortDescription": "À Fès, nous avons relevé le défi de créer un lagon à l'intérieur d'une résidence, pour une utilisation tout au long de l'année. Cet espace a été conçu comme un jardin d'eau zen, avec des roches volcaniques, une végétation intérieure luxuriante et une eau maintenue à température idéale. La maîtrise de l'hygrométrie et la qualité de l'air ont été des priorités pour garantir un confort absolu. C'est un havre de paix qui invite à la méditation et à la détente, à l'abri des regards et des aléas climatiques.",
      "mainDescription": [
        "La conception de ce lagon intérieur s'inspire des jardins japonais, où l'eau, la roche et le végétal sont en parfaite harmonie. Des formes organiques et des courbes douces caractérisent le bassin. Une plage immergée permet de s'asseoir dans l'eau, tandis que des jets de massage ont été intégrés discrètement dans les parois rocheuses. Le défi majeur a été de gérer l'humidité ambiante, ce qui a été résolu par l'installation d'une centrale de traitement de l'air avec déshumidificateur, assurant un environnement sain et confortable en permanence.",
        "Les matériaux ont été choisis pour leur beauté et leur résistance en milieu humide. Le revêtement du lagon est une mosaïque de verre aux tons émeraude, qui donne à l'eau une profondeur et des reflets exceptionnels. Les rochers sont des pierres volcaniques sombres, qui contrastent magnifiquement avec la clarté de l'eau. Une grande baie vitrée s'ouvre sur un patio intérieur, permettant de faire entrer la lumière naturelle et de créer une connexion avec l'extérieur. Le sol autour du lagon est un caillebotis en bois imputrescible.",
        "Le système de filtration est à la pointe de la technologie pour garantir une qualité d'eau irréprochable dans un espace clos. Nous avons opté pour un filtre à diatomées, pour une finesse de filtration extrême, couplé à un système de désinfection par UV, qui élimine les bactéries sans les inconvénients du chlore. La température de l'eau est maintenue à 30°C toute l'année par une pompe à chaleur performante et silencieuse. La gestion de l'ensemble des équipements est centralisée via un système domotique, pour un contrôle simple et intuitif.",
        "L'ambiance lumineuse a été particulièrement soignée. Un puits de lumière zénithal apporte une lumière naturelle douce pendant la journée. Le soir, un éclairage par fibre optique au plafond recrée un ciel étoilé, tandis que des spots LED immergés illuminent l'eau de l'intérieur. Cette combinaison d'éclairages permet de créer différentes ambiances, de la plus vivifiante à la plus relaxante, selon les moments de la journée et les envies des utilisateurs.",
        "La construction d'un lagon intérieur est une opération technique complexe qui requiert une expertise spécifique. L'étanchéité, l'isolation et la ventilation du local ont fait l'objet d'une étude approfondie. Nous avons travaillé en étroite collaboration avec l'architecte de la maison pour que le lagon s'intègre parfaitement à la structure existante. La qualité des finitions a été notre obsession, pour que chaque détail contribue à l'atmosphère de luxe et de sérénité de ce lieu unique.",
        "En conclusion, ce lagon intérieur à Fès est une véritable prouesse technique et esthétique. C'est un espace de bien-être absolu, où l'on peut se ressourcer en toute saison. Nous sommes fiers d'avoir réalisé ce projet d'exception, qui démontre notre capacité à créer des piscines sur-mesure qui repoussent les limites de la créativité. Ce jardin d'eau secret est la plus belle récompense pour nos clients, qui peuvent profiter chaque jour d'une expérience de relaxation inégalée."
      ],
      "imagesWithinDescription": [
        { "src": "/realisations/piscine-lagon-03-desc1.jpg", "alt": "Mosaïque de verre et roches volcaniques", "position": 1 },
        { "src": "/realisations/piscine-lagon-03-desc2.jpg", "alt": "Puits de lumière zénithal", "position": 3 },
        { "src": "/realisations/piscine-lagon-03-desc3.jpg", "alt": "Ciel étoilé en fibre optique", "position": 5 }
      ],
      "steps": [
        { "title": "Étude Technique et Gestion de l'Hygrométrie", "description": "Conception du système de ventilation et de déshumidification. La maîtrise de l'environnement intérieur est la clé." },
        { "title": "Structure et Étanchéité en Milieu Clos", "description": "Création de la coque en béton et application d'un système d'étanchéité multicouche spécifique pour l'intérieur." },
        { "title": "Pose des Revêtements et des Roches", "description": "Installation de la mosaïque de verre et positionnement des roches volcaniques. Le décor prend forme." },
        { "title": "Installation de la Filtration UV et du Chauffage", "description": "Mise en place des systèmes de traitement d'eau haute performance et de la pompe à chaleur." },
        { "title": "Création des Ambiances Lumineuses", "description": "Installation du puits de lumière, de la fibre optique et des éclairages subaquatiques. La magie opère." },
        { "title": "Mise en Service et Contrôles Techniques", "description": "Remplissage, chauffage de l'eau et tests de tous les systèmes (filtration, ventilation, domotique). Votre sanctuaire est prêt." }
      ],
      "equipmentsUsed": [
        "Centrale de traitement de l'air avec déshumidificateur",
        "Filtre à diatomées",
        "Stérilisateur UV",
        "Pompe à chaleur haute performance",
        "Mosaïque de verre",
        "Jets de massage intégrés",
        "Éclairage par fibre optique (ciel étoilé)",
        "Système de gestion domotique"
      ],
      "galleryImages": [
        "/realisations/piscine-lagon-03.jpg",
        "/realisations/piscine-lagon-03-hero.jpg",
        "/realisations/piscine-lagon-03-desc1.jpg",
        "/realisations/piscine-lagon-03-desc2.jpg",
        "/realisations/piscine-lagon-03-desc3.jpg"
      ]
    },
  ];
