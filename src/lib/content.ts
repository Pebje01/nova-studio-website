export const siteConfig = {
  name: "Nova Studio",
  tagline: "Personal training & hormooncoaching in Purmerend",
};

export const navLinks = [
  { label: "Over Nova Studio", href: "#about" },
  { label: "Trainingen", href: "#services" },
];

export const heroContent = {
  headingStart: "Personal training en",
  headingAccent: "bootcamp",
  headingMiddle: "in",
  headingAccent2: "Purmerend",
  headingEnd: "",
  subtitle:
    "Bij Nova Studio train je één op één of in een kleine groep, bij mij thuis in mijn nieuwe sportstudio. Met persoonlijke aandacht en een holistische aanpak werken we aan een nieuwe, fittere jij. Vraag je gratis intake aan!",
  ctaLabel: "Gratis intake aanvragen",
  heroImage: "/nova-hero-1.jpg",
  heroCircleImage: "/nova-shirley-24.jpg",
};

export const sessionsContent = {
  headingStart: "Wat ik",
  headingAccent: "aanbied",
  headingEnd: "",
  sessions: [
    {
      id: 1,
      title: "Personal training",
      description:
        "Één op één training, volledig afgestemd op jou. Jouw doelen, jouw tempo, jouw lichaam. Geen standaard schema. Wel een aanpak die écht werkt.",
    },
    {
      id: 2,
      title: "Training met 2 à 3 personen",
      description:
        "Train samen met een vriendin, partner of collega. Je krijgt persoonlijke begeleiding, maar deelt de energie en motivatie. Het beste van personal training, samen.",
    },
    {
      id: 3,
      title: "Kleine groepstraining",
      description:
        "Trainen in een kleine vaste groep. Denk aan Bootcamp, Booty & Burn en andere lessen. Intensief, gezellig en voor elk niveau.",
    },
  ],
};

export const instructorsCTAContent = {
  headingStart: "Over",
  headingAccent: "Nova Studio",
  subtitle:
    "Ik ben Shirley, gecertificeerd personal trainer. Nova Studio is mijn eigen studio aan huis in Purmerend. Geen grote sportschool, geen nummertje trekken. Bij mij weet ik wie je bent, wat je wil en wat je nodig hebt. Dat merk je meteen.",
  ctaLabel: "Gratis intake inplannen",
  image: "/nova-shirley-24.jpg",
};

export const reviewsContent = {
  headingStart: "Wat anderen",
  headingAccent: "zeggen",
  headingMiddle: "",
  headingAccent2: "",
  headingEnd: "",
  reviews: [
    {
      id: 1,
      title: "Eindelijk iemand die écht luistert.",
      text: "Dankzij de hormooncoaching van Shirley snap ik nu waarom ik me al jaren zo moe voelde. Na twee maanden voel ik me zoveel beter: meer energie, betere slaap en ik ben weer trots op mezelf.",
      name: "Marieke B.",
      variant: "light",
    },
    {
      id: 2,
      title: "Zo fijn: sporten op mijn eigen tempo.",
      text: "Ik was bang om te sporten tijdens mijn zwangerschap, maar bij Shirley voelde ik me meteen op mijn gemak. Ze weet precies wat veilig is en zorgt dat het nooit saai wordt. Ik heb me de hele zwangerschap sterk gevoeld.",
      name: "Fatima A.",
      variant: "dark",
    },
    {
      id: 3,
      title: "Klein studio, groot verschil.",
      text: "Je bent hier geen nummer. Shirley kent jou, jouw lichaam en jouw doelen. De kleinschaligheid maakt het bijzonder. En ja, je lacht ook nog.",
      name: "Denise W.",
      variant: "light",
    },
  ],
};

export const galleryContent = {
  headingStart: "Een kijkje in",
  headingAccent: "Nova Studio",
  headingEnd: "",
  images: [
    "/nova-shirley-16.jpg",
    "/studio-1-6.avif",
    "/studio-1-7.avif",
  ],
  extraImages: [
    "/nova-shirley-20.jpg",
    "/nova-shirley-24.jpg",
  ],
};

export const membershipsContent = {
  headingStart: "Wat kost",
  headingAccent: "het?",
  headingEnd: "",
  subtitle:
    "Duidelijke tarieven, geen kleine lettertjes. Maandelijks opzegbaar.",
  plans: [
    {
      id: 1,
      name: "2x per week",
      price: "€79",
      period: "/maand",
      featured: false,
      features: [
        "2x per week groepstraining (60 min)",
        "Persoonlijk trainingsschema",
        "Vaste coach elke les",
        "Kleine groepen (4 tot 8 personen)",
        "Zaterdag bootcamp inbegrepen",
        "Maandelijks opzegbaar",
      ],
    },
    {
      id: 2,
      name: "3x per week",
      price: "€99",
      period: "/maand",
      featured: true,
      features: [
        "3x per week groepstraining (60 min)",
        "Persoonlijk trainingsschema",
        "Vaste coach elke les",
        "Kleine groepen (4 tot 8 personen)",
        "Zaterdag bootcamp inbegrepen",
        "Vrij trainen buiten lestijden",
        "Maandelijks opzegbaar",
      ],
    },
    {
      id: 3,
      name: "Persoonlijke training",
      price: "€70",
      period: "/les",
      featured: false,
      features: [
        "Één op één training met Shirley",
        "Volledig op maat: doelen, anatomie, hormonen",
        "Persoonlijk trainingsschema",
        "Voeding en leefstijladvies",
        "Flexibel inplanbaar",
      ],
    },
  ],
};

export const classesContent = {
  headingStart: "Wanneer",
  headingAccent: "kan je komen?",
  subtitle:
    "Kies een moment dat in je agenda past. Plan je gratis proefles in en kom gewoon kijken.",
  days: [
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag",
  ],
  schedule: {
    Maandag: [
      { time: "9.00 – 10.00", className: "Groepstraining" },
      { time: "11.00 – 12.00", className: "Zwangerschapsfitness" },
    ],
    Dinsdag: [
      { time: "10.00 – 11.00", className: "Zwangerschapsfitness" },
      { time: "19.00 – 20.00", className: "Groepstraining" },
    ],
    Woensdag: [
      { time: "9.00 – 10.00", className: "Groepstraining" },
      { time: "11.00 – 12.00", className: "Zwangerschapsfitness" },
    ],
    Donderdag: [
      { time: "10.00 – 11.00", className: "Groepstraining" },
      { time: "19.00 – 20.00", className: "Zwangerschapsfitness" },
    ],
    Vrijdag: [
      { time: "9.00 – 10.00", className: "Zwangerschapsfitness" },
      { time: "11.00 – 12.00", className: "Groepstraining" },
    ],
    Zaterdag: [
      { time: "10.00 – 11.30", className: "Groepstraining" },
    ],
  } as Record<string, { time: string; className: string }[]>,
  whatsappUrl: "https://wa.me/31612345678?text=Hoi%20Shirley%2C%20ik%20heb%20interesse%20in%20een%20groepsles!",
};

export const contactContent = {
  headingStart: "Vraag een",
  headingAccent: "gratis intake aan.",
  subtitle:
    "Vul je naam en telefoonnummer in. Ik bel je terug om samen te kijken wat bij je past. Geen verplichtingen.",
  image: "/nova-contact.jpg",
};

export const footerContent = {
  description:
    "Nova Studio door Shirley Mujagic",
  menuLinks: [
    { label: "Over Nova Studio", href: "#about" },
    { label: "Trainingen", href: "#services" },
    { label: "Gratis intake", href: "#contact" },
  ],
  copyright: `© Copyright ${new Date().getFullYear()} Nova Studio`,
};
