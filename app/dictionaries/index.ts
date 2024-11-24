export const homeDictionary = {
  no: {
    title: 'Velkommen til',
    subtitle: 'Tollgaarden Gjestegaard',
    description: 'Opplev historiske Larvik i våre komfortable leiligheter, sentralt plassert med gratis parkering.',
    bookRoom: 'Reserver rom',
    reviews: {
      booking: {
        score: '8.7 - Utmerket',
        label: 'på Booking.com'
      },
      expedia: {
        score: '9.4 - Suverent',
        label: 'på Expedia.no'
      }
    },
    links: {
      apartments: 'Se leilighetene våre',
      location: 'Les mer om beliggenheten',
      info: 'Praktisk informasjon'
    }
  },
  en: {
    title: 'Welcome to',
    subtitle: 'Tollgaarden Gjestegaard',
    description: 'Experience historic Larvik in our comfortable apartments, centrally located with free parking.',
    bookRoom: 'Book room',
    reviews: {
      booking: {
        score: '8.7 - Excellent',
        label: 'on Booking.com'
      },
      expedia: {
        score: '9.4 - Superb',
        label: 'on Expedia.com'
      }
    },
    links: {
      apartments: 'See our apartments',
      location: 'Read about the location',
      info: 'Practical information'
    }
  }
}

export const infoDictionary = {
  no: {
    title: 'Praktisk informasjon',
    subtitle: 'Alt du trenger å vite om ditt opphold hos oss',
    checkInOut: {
      title: 'Innsjekking og utsjekking',
      checkIn: {
        title: 'Innsjekking',
        time: 'Fra 15:00 til 22:00',
        note: 'Kontakt oss for sen innsjekking'
      },
      checkOut: {
        title: 'Utsjekking',
        time: 'Fra 05:00 til 11:00'
      }
    },
    facilities: {
      title: 'Fasiliteter',
      parking: {
        title: 'Parkering',
        description: 'Gratis parkering på eiendommen'
      },
      internet: {
        title: 'Internett',
        description: 'Gratis WiFi i alle rom'
      },
      kitchen: {
        title: 'Kjøkken',
        description: 'Fullt utstyrt kjøkken'
      }
    },
    payment: {
      title: 'Betaling',
      onArrival: {
        title: 'Betal når du kommer',
        description: 'Vi tar alle typer kort, Vipps og kontanter'
      },
      advance: {
        title: 'Betal på forhånd',
        description: 'Du kan betale på forhånd når du bestiller på Booking.com'
      }
    }
  },
  en: {
    title: 'Practical Information',
    subtitle: 'Everything you need to know about your stay with us',
    checkInOut: {
      title: 'Check-in and Check-out',
      checkIn: {
        title: 'Check-in',
        time: 'From 15:00 to 22:00',
        note: 'Contact us for late check-in'
      },
      checkOut: {
        title: 'Check-out',
        time: 'From 05:00 to 11:00'
      }
    },
    facilities: {
      title: 'Facilities',
      parking: {
        title: 'Parking',
        description: 'Free parking on premises'
      },
      internet: {
        title: 'Internet',
        description: 'Free WiFi in all rooms'
      },
      kitchen: {
        title: 'Kitchen',
        description: 'Fully equipped kitchen'
      }
    },
    payment: {
      title: 'Payment',
      onArrival: {
        title: 'Pay on arrival',
        description: 'We accept all cards, Vipps, and cash'
      },
      advance: {
        title: 'Pay in advance',
        description: 'You can pay in advance when booking through Booking.com'
      }
    }
  }
}

export const locationDictionary = {
  no: {
    title: 'Beliggenhet',
    description: 'Tollgaarden ligger sentralt plassert på Tollerodden i Larvik. Innen 5 minutters gange finner du en barnevennlig badestrand, Fritzøe Brygge, Bølgen kino og kulturhus, et titalls restauranter og kaféer, og Larvik jernbanestasjon. Du finner også Larvik Sjøfartsmuseum og Herregården rett over gata.',
    transport: {
      title: 'Transport',
      items: [
        { duration: '5 minutter', description: 'med bil unna fergeterminalen' },
        { duration: '30 minutter', description: 'med tog eller bil fra Torp Lufthavn' },
        { duration: '2 timer', description: 'med tog eller bil fra Oslo S' }
      ]
    },
    getDirections: 'Få veibeskrivelse'
  },
  en: {
    title: 'Location',
    description: 'Tollgaarden is located in central Larvik, in the historic Tollerodden area. Within a 5-minute walk, you\'ll find a family-friendly beach, Fritzøe Brygge, Bølgen cinema and cultural center, dozens of restaurants and cafés, and Larvik train station. You\'ll also find Larvik Sjøfartsmuseum and Herregården just across the street.',
    transport: {
      title: 'Transport',
      items: [
        { duration: '5 minutes', description: 'by car from the ferry terminal' },
        { duration: '30 minutes', description: 'by train or car from Torp Airport' },
        { duration: '2 hours', description: 'by train or car from Oslo Central Station' }
      ]
    },
    getDirections: 'Get directions'
  }
}

export const apartmentsDictionary = {
  no: {
    title: 'Våre Leiligheter',
    subtitle: 'Alle leilighetene har TV, kjøkken og gratis WiFi.',
    checkAvailability: 'Sjekk tilgjengelighet',
    rooms: [
      {
        title: 'Ettromsleilighet standard',
        description: 'Koselig og praktisk leilighet perfekt for par.',
        capacity: '2 personer',
        beds: [
          '1 stor dobbeltseng'
        ],
        amenities: ['Kjøkken', 'TV']
      },
      {
        title: 'Leilighet med 1 soverom',
        description: 'Komfortabel leilighet med separat soverom.',
        capacity: 'Opptil 4 personer',
        beds: [
          '1 dobbeltseng',
          '1 sovesofa'
        ],
        amenities: ['Separat soverom', 'Kjøkken', 'TV']
      },
      {
        title: 'Ettromsleilighet med loft',
        description: 'Sjarmerende leilighet over to plan.',
        capacity: 'Opptil 6 personer',
        beds: [
          '2 enkeltsenger',
          '1 dobbeltseng',
          '1 sovesofa'
        ],
        amenities: ['Kjøkken', 'TV']
      },
      {
        title: 'Ettromsleilighet over 2 plan',
        description: 'Moderne leilighet fordelt over to etasjer.',
        capacity: 'Opptil 4 personer',
        beds: [
          '1 stor dobbeltseng',
          '1 sovesofa'
        ],
        amenities: ['Kjøkken', 'TV']
      },
      {
        title: 'Ettromsleilighet over 2 plan',
        description: 'Moderne leilighet fordelt over to etasjer.',
        capacity: 'Opptil 4 personer',
        beds: [
          '1 stor dobbeltseng',
          '1 sovesofa'
        ],
        amenities: ['Kjøkken', 'TV']
      },
      {
        title: 'Leilighet med balkong',
        description: 'Romslig leilighet med egen balkong.',
        capacity: 'Opptil 5 personer',
        beds: [
          '1 stor dobbeltseng',
          '2 sovesofaer'
        ],
        amenities: ['Balkong']
      }
    ]
  },
  en: {
    title: 'Our Apartments',
    subtitle: 'All apartments have TV, kitchen and free WiFi.',
    checkAvailability: 'Check availability',
    rooms: [
      {
        title: 'Standard Studio Apartment',
        description: 'Cozy and practical apartment perfect for couples.',
        capacity: '2 people',
        beds: [
          '1 large double bed'
        ],
        amenities: ['Kitchen', 'TV']
      },
      {
        title: '1 Bedroom Apartment',
        description: 'Comfortable apartment with separate bedroom.',
        capacity: 'Up to 4 people',
        beds: [
          '1 double bed',
          '1 sofa bed'
        ],
        amenities: ['Separate bedroom', 'Kitchen', 'TV']
      },
      {
        title: 'Studio with Loft',
        description: 'Charming two-level apartment.',
        capacity: 'Up to 6 people',
        beds: [
          '2 single beds',
          '1 double bed',
          '1 sofa bed'
        ],
        amenities: ['Kitchen', 'TV']
      },
      {
        title: 'Two-Level Studio',
        description: 'Modern apartment spread over two floors.',
        capacity: 'Up to 4 people',
        beds: [
          '1 large double bed',
          '1 sofa bed'
        ],
        amenities: ['Kitchen', 'TV']
      },
      {
        title: 'Two-Level Studio',
        description: 'Modern apartment spread over two floors.',
        capacity: 'Up to 4 people',
        beds: [
          '1 large double bed',
          '1 sofa bed'
        ],
        amenities: ['Kitchen', 'TV']
      },
      {
        title: 'Apartment with Balcony',
        description: 'Spacious apartment with private balcony.',
        capacity: 'Up to 5 people',
        beds: [
          '1 large double bed',
          '2 sofa beds'
        ],
        amenities: ['Balcony']
      }
    ]
  }
} 