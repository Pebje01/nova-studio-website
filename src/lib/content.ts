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
    "Ik geloof dat elke vrouw zich sterk, energiek en thuis in haar eigen lichaam mag voelen. Daarom help ik vrouwen hun lichaam beter te begrijpen, zodat ze leren samenwerken met hun lichaam in plaats van ertegen te vechten.",
  ctaTeaser: "Klinkt dit als iets wat bij jou past?",
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
      title: "Small group training",
      description:
        "Train in een kleine vaste groep met maximale persoonlijke aandacht. Intensief, gezellig en voor elk niveau.",
    },
    {
      id: 3,
      title: "Zwangerschapsfitness",
      description:
        "Veilig en verantwoord bewegen tijdens je zwangerschap. Afgestemd op jouw lichaam en jouw fase. Zodat je je sterk en energiek voelt gedurende de hele zwangerschap.",
    },
    {
      id: 4,
      title: "Na de bevalling",
      description:
        "Herstel op jouw tempo, met begeleiding die écht rekening houdt met wat jouw lichaam heeft meegemaakt. Stap voor stap terug naar jezelf.",
    },
  ],
};

export const instructorsCTAContent = {
  headingStart: "Over",
  headingAccent: "Nova Studio",
  paragraphs: [
    "Ik geloof dat elke vrouw zich sterk, energiek en thuis in haar eigen lichaam mag voelen. Daarom help ik vrouwen hun lichaam beter te begrijpen, zodat ze leren samenwerken met hun lichaam in plaats van ertegen te vechten.",
    "Want meer resultaat vraagt niet altijd om harder werken. Je hoeft niet nóg minder te eten of nóg meer te sporten. Wanneer je begrijpt wat jouw lichaam nodig heeft en het juiste plan volgt, ontstaat er ruimte voor duurzame verandering, meer energie en meer zelfvertrouwen.",
    "Zodat je niet alleen trots bent op wat je bereikt, maar ook op wie je bent.",
  ],
  tagline: "Vertrouw het proces. Werk met je lichaam. De rest volgt.",
  ctaLabel: "Gratis intake inplannen",
  image: "/nova-shirley-19.jpg",
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
      title: "Fijn en vertrouwd weer sporten na zwangerschap.",
      text: "Na mijn zwangerschap had ik weinig motivatie om te fitnessen. Ik merkte echter dat ik me niet krachtig en zelfverzekerd genoeg voelde en besloot toch maar weer actie te ondernemen. Shirley maakt het minder vervelend om te gaan, en ze oordeelt nooit. Bovendien snapt ze precies wat iemand nodig heeft, in plaats van een streng fitness regime op te dringen kijkt ze naar de persoon en hoe je die in zijn/haar kracht zet. Daarnaast kunnen we ook altijd lachen en ben ik toch weer blij dat ik geweest ben. Het is toch gezelliger dan de sportschool! :)",
      name: "Daley Jansen",
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
    "/studio-1-5.avif",
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
