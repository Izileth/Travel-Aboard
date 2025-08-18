export interface TravelPackage {
    id: number;
    title: string;
    location: string;
    country: string;
    price: number;
    originalPrice?: number;
    duration: string;
    rating: number;
    reviews: number;
    category: 'adventure' | 'romance' | 'family' | 'business' | 'cultural' | 'beach' | 'nature';
    image: string;
    description: string;
    highlights: string[];
    included: string[];
    difficulty: 'easy' | 'medium' | 'hard';
    bestTime: string;
}

export interface SearchData {
    destination: string;
    checkin: string;
    checkout: string;
    passengers: number;
    category: string;
    priceRange: [number, number];
    duration: string;
}

export interface FilterOptions {
    showFilters: boolean;
    category: string;
    priceRange: [number, number];
    duration: string;
    rating: number;
    difficulty: string;
}

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const travelPackages: TravelPackage[] = [
    {
      id: 1,
      title: "Paris Romântico",
      location: "Paris",
      country: "França",
      price: 3500,
      originalPrice: 4200,
      duration: "7 dias",
      rating: 4.8,
      reviews: 245,
      category: 'romance',
      image: "https://1.bp.blogspot.com/-XCDP_qtL724/UQgMmYegCuI/AAAAAAAAjdE/hmq_X36t-Hs/s1600/202_1la_tour_eiffel___paris__france.jpg",
      description: "Conheça a cidade luz com roteiro exclusivo para casais",
      highlights: ["Torre Eiffel", "Louvre", "Cruzeiro no Sena", "Montmartre"],
      included: ["Voo", "Hotel 4★", "Café da manhã", "City Tour"],
      difficulty: 'easy',
      bestTime: "Abril a Junho"
    },
    {
      id: 2,
      title: "Aventura no Japão",
      location: "Tóquio",
      country: "Japão",
      price: 4200,
      duration: "10 dias",
      rating: 4.9,
      reviews: 189,
      category: 'cultural',
      image: "https://th.bing.com/th/id/R.62cb7eb1290124b516ec78f624b7735e?rik=6UYblVlKN9fGlg&pid=ImgRaw&r=0",
      description: "Cultura milenar e modernidade em perfeita harmonia",
      highlights: ["Monte Fuji", "Templos de Kyoto", "Shibuya", "Cerimônia do Chá"],
      included: ["Voo", "Hotel", "JR Pass", "Guia especializado"],
      difficulty: 'medium',
      bestTime: "Março a Maio"
    },
    {
      id: 3,
      title: "Safari Africano",
      location: "Serengeti",
      country: "Tanzânia",
      price: 5800,
      duration: "12 dias",
      rating: 4.7,
      reviews: 156,
      category: 'adventure',
      image: "https://wallpaperaccess.com/full/431280.jpg",
      description: "Aventura única na vida selvagem africana",
      highlights: ["Big Five", "Migração dos Gnus", "Ngorongoro", "Masai Mara"],
      included: ["Voo", "Lodge", "Todas as refeições", "Guia safari"],
      difficulty: 'hard',
      bestTime: "Junho a Outubro"
    },
    {
      id: 4,
      title: "Maldivas Paradisíacas",
      location: "Malé",
      country: "Maldivas",
      price: 6200,
      originalPrice: 7500,
      duration: "8 dias",
      rating: 4.9,
      reviews: 298,
      category: 'beach',
      image: "https://th.bing.com/th/id/R.8550e7ffc8891d9b421c4be64b02c725?rik=mRsNtY0O5kElQQ&pid=ImgRaw&r=0",
      description: "Resort exclusivo sobre as águas cristalinas",
      highlights: ["Bangalô sobre a água", "Spa", "Mergulho", "Pôr do sol"],
      included: ["Voo", "Resort 5★", "All Inclusive", "Atividades aquáticas"],
      difficulty: 'easy',
      bestTime: "Novembro a Abril"
    },
    {
      id: 5,
      title: "Patagônia Selvagem",
      location: "El Calafate",
      country: "Argentina",
      price: 4800,
      duration: "14 dias",
      rating: 4.6,
      reviews: 134,
      category: 'nature',
      image: "https://milima.pl/wp-content/uploads/2019/03/laguna-torre-sunrise-1170x778.jpg",
      description: "Paisagens épicas no fim do mundo",
      highlights: ["Glaciar Perito Moreno", "Torres del Paine", "Ushuaia", "Trekking"],
      included: ["Voo", "Pousadas", "Guia especializado", "Equipamentos"],
      difficulty: 'hard',
      bestTime: "Dezembro a Março"
    },
    {
      id: 6,
      title: "Família em Orlando",
      location: "Orlando",
      country: "EUA",
      price: 3200,
      duration: "9 dias",
      rating: 4.5,
      reviews: 412,
      category: 'family',
      image: "https://tse1.mm.bing.net/th/id/OIP.yghoNKxkMhHZD-cgfD5fQQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Diversão garantida para toda a família",
      highlights: ["Disney World", "Universal Studios", "SeaWorld", "City Walk"],
      included: ["Voo", "Hotel", "Ingressos parques", "Transfers"],
      difficulty: 'easy',
      bestTime: "Setembro a Novembro"
    }
  ];
