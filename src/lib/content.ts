export const siteConfig = {
  name: "Nova Studio",
  tagline: "Fitness & Hormooncoaching",
};

export const navLinks = [
  { label: "Over NOVA Studio", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  headingStart: "De leukste",
  headingAccent: "personal",
  headingMiddle: "training in",
  headingAccent2: "Purmerend",
  headingEnd: "",
  subtitle:
    "Kom trainen in de kleinschalige high-end studio aan huis. Persoonlijke begeleiding met een lach en nog belangrijker: met resultaat. Holistische aanpak, omdat je fit voelen om veel meer gaat dan er alleen maar fit uitzien.",
  ctaLabel: "Vraag proefles aan",
  heroImage: "/nova-hero-1.jpg",
  heroCircleImage: "/nova-shirley-24.jpg",
};

export const sessionsContent = {
  headingStart: "Wat ik voor je doe bij",
  headingAccent: "Nova Studio",
  headingEnd: "",
  sessions: [
    {
      id: 1,
      title: "Personal Training",
      description:
        "Geen standaard schema's. Jouw training baseer ik op jouw doelen, anatomie en hormonen. Één op één, volledig op maat,en met genoeg lol om het nooit als een straf te voelen.",
    },
    {
      id: 2,
      title: "Zwangerschapsfitness",
      description:
        "Of je nu zwanger bent of net bevallen,je lichaam verdient de juiste begeleiding. Ik zorg dat de lessen veilig, effectief en afgestemd zijn op jouw fase. Want sterk zijn mag, ook met een ronde buik of een baby op de heup.",
    },
    {
      id: 3,
      title: "Hormooncoaching",
      description:
        "Mannen en vrouwen trainen hormonaal gezien totaal anders. Met mijn hormooncoaching geef ik je inzicht in wat er in jouw lichaam speelt, zodat je werkt mét je hormonen,en eindelijk voelt hoe het hoort.",
    },
  ],
};

export const instructorsCTAContent = {
  headingStart: "Jouw personal trainer,",
  headingAccent: "Shirley",
  subtitle:
    "Hoi, ik ben Shirley! Ik combineer mijn kennis van hormonen, anatomie en sportwetenschap met een flinke dosis energie en humor. Bij mij train je niet alleen je lichaam, maar ga je ook met een goed gevoel naar huis. Lachen mag,en resultaat is gegarandeerd.",
  ctaLabel: "Boek een proefles",
  image: "/nova-shirley-24.jpg",
};


export const reviewsContent = {
  headingStart: "Wat mijn",
  headingAccent: "klanten",
  headingMiddle: "",
  headingAccent2: "",
  headingEnd: "zeggen",
  reviews: [
    {
      id: 1,
      title: "Eindelijk begrijp ik mijn eigen lichaam!",
      text: "Dankzij de hormooncoaching van Shirley snap ik nu waarom ik me al jaren zo moe voelde. Na twee maanden voel ik me zoveel beter,meer energie, betere slaap en ik ben weer trots op mezelf.",
      name: "Marieke B.",
      variant: "light",
    },
    {
      id: 2,
      title: "Sporten tijdens mijn zwangerschap,beste beslissing ooit.",
      text: "Ik was bang om te sporten tijdens mijn zwangerschap, maar bij Shirley voelde ik me meteen op mijn gemak. Ze weet precies wat veilig is én zorgt dat het nooit saai wordt. Ik heb me de hele zwangerschap sterk gevoeld.",
      name: "Fatima A.",
      variant: "dark",
    },
    {
      id: 3,
      title: "Klein studio, groot resultaat.",
      text: "De kleinschaligheid is precies wat het zo bijzonder maakt. Je bent geen nummer, maar een mens. Shirley kent jou, jouw lichaam en jouw doelen. En ja,je lacht ook nog.",
      name: "Denise W.",
      variant: "light",
    },
  ],
};

export const galleryContent = {
  headingStart: "Een kijkje in",
  headingAccent: "Nova Studio",
  headingEnd: "high-end, kleinschalig, persoonlijk",
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
  headingStart: "Kies het",
  headingAccent: "abonnement",
  headingEnd: "dat bij jou past",
  subtitle:
    "Geen grote groepen, geen standaard aanpak. Bij mij is het kleinschalig en persoonlijk,zodat jij de aandacht krijgt die je verdient.",
  plans: [
    {
      id: 1,
      name: "2x per week",
      price: "€79",
      period: "/maand",
      featured: false,
      features: [
        "2x per week Small Group Training (60 min)",
        "Persoonlijk trainingsschema",
        "Begeleiding door vaste coach",
        "Kleine groepen (4–8 personen)",
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
        "3x per week Small Group Training (60 min)",
        "Persoonlijk trainingsschema",
        "Begeleiding door vaste coach",
        "Kleine groepen (4–8 personen)",
        "Zaterdag bootcamp inbegrepen",
        "Vrij trainen buiten lestijden",
        "Maandelijks opzegbaar",
      ],
    },
    {
      id: 3,
      name: "Personal Training",
      price: "€70",
      period: "/les",
      featured: false,
      features: [
        "Één-op-één training met Shirley",
        "Volledig op maat: doelen, anatomie, hormonen",
        "Persoonlijk trainingsschema",
        "Voeding- en leefstijladvies",
        "Flexibel inplanbaar",
      ],
    },
  ],
};

export const classesContent = {
  headingStart: "Rooster",
  headingAccent: "Small Group Training",
  subtitle:
    "Bekijk wanneer de groepslessen zijn ingepland en meld je aan.",
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
      { time: "9.00 – 10.00", className: "Small Group Training" },
      { time: "11.00 – 12.00", className: "Zwangerschapsfitness" },
    ],
    Dinsdag: [
      { time: "10.00 – 11.00", className: "Zwangerschapsfitness" },
      { time: "19.00 – 20.00", className: "Small Group Training" },
    ],
    Woensdag: [
      { time: "9.00 – 10.00", className: "Small Group Training" },
      { time: "11.00 – 12.00", className: "Zwangerschapsfitness" },
    ],
    Donderdag: [
      { time: "10.00 – 11.00", className: "Small Group Training" },
      { time: "19.00 – 20.00", className: "Zwangerschapsfitness" },
    ],
    Vrijdag: [
      { time: "9.00 – 10.00", className: "Zwangerschapsfitness" },
      { time: "11.00 – 12.00", className: "Small Group Training" },
    ],
    Zaterdag: [
      { time: "10.00 – 11.30", className: "Small Group Training" },
    ],
  } as Record<string, { time: string; className: string }[]>,
  whatsappUrl: "https://wa.me/31612345678?text=Hoi%20Shirley%2C%20ik%20heb%20interesse%20in%20een%20groepsles!",
};

export const contactContent = {
  headingStart: "Klaar om te starten bij",
  headingAccent: "Nova Studio?",
  subtitle:
    "Interesse in een proefles of wil je meer weten over hormooncoaching of zwangerschapsfitness? Stel gerust al je vragen, ik sta voor je klaar!",
  image: "/nova-contact.jpg",
};

export const footerContent = {
  description:
    "NOVA studio by Shirley Mujagic",
  menuLinks: [
    { label: "Over NOVA Studio", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  copyright: `\u00A9 Copyright ${new Date().getFullYear()} Nova Studio`,
};
