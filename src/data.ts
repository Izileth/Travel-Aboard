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
    category: 'adventure' | 'romance' | 'family' | 'business' | 'cultural' | 'beach' | 'nature' | 'luxury' | 'wellness' | 'history' | 'gastronomy';
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
    },
    {
      id: 7,
      title: "Rota dos Castelos",
      location: "Edimburgo",
      country: "Escócia",
      price: 4100,
      duration: "8 dias",
      rating: 4.7,
      reviews: 178,
      category: 'history',
      image: "https://guiaviajarmelhor.com.br/wp-content/uploads/2020/03/o-que-fazer-em-edimburgo.jpg",
      description: "Uma viagem medieval por castelos históricos e paisagens mágicas",
      highlights: ["Castelo de Edimburgo", "Loch Ness", "Highlands", "Stirling"],
      included: ["Voo", "Hotel Boutique", "Café da manhã", "Tours guiados"],
      difficulty: 'medium',
      bestTime: "Maio a Setembro"
    },
    {
      id: 8,
      title: "Dubai Futurista",
      location: "Dubai",
      country: "Emirados Árabes Unidos",
      price: 5300,
      originalPrice: 6000,
      duration: "6 dias",
      rating: 4.8,
      reviews: 302,
      category: 'luxury',
      image: "https://cdn.puzzlegarage.com/img/puzzle/10/400_thumb.v5.jpg",
      description: "Luxo e inovação no destino mais futurista do mundo",
      highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah"],
      included: ["Voo", "Hotel 5★", "Traslados", "Passeios VIP"],
      difficulty: 'easy',
      bestTime: "Novembro a Março"
    },
    {
      id: 9,
      title: "Caminho de Santiago",
      location: "Santiago de Compostela",
      country: "Espanha",
      price: 2400,
      duration: "15 dias",
      rating: 4.4,
      reviews: 98,
      category: 'history',
      image: "https://th.bing.com/th/id/R.18326dbd82117e1a278176e8199e24aa?rik=6SUoV2CXOtD2fQ&pid=ImgRaw&r=0",
      description: "Jornada espiritual e cultural pelo lendário caminho dos peregrinos",
      highlights: ["Rota Francesa", "Catedrais históricas", "Vilarejos medievais", "Credencial do Peregrino"],
      included: ["Voo", "Hospedagens simples", "Credencial", "Mapas e apoio"],
      difficulty: 'hard',
      bestTime: "Abril a Outubro"
    },
    {
      id: 10,
      title: "Tailândia Tropical",
      location: "Phuket",
      country: "Tailândia",
      price: 2900,
      duration: "11 dias",
      rating: 4.6,
      reviews: 267,
      category: 'beach',
      image: "https://tse1.mm.bing.net/th/id/OIP.kmpXsTAXU7nx8wY8wx7MLgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Praias paradisíacas e cultura exótica no sudeste asiático",
      highlights: ["Phi Phi Islands", "Templos de Bangkok", "Mercados Flutuantes", "Santuário dos Elefantes"],
      included: ["Voo", "Hotel 4★", "Transfers", "Passeios"],
      difficulty: 'medium',
      bestTime: "Novembro a Março"
    },
    {
      id: 11,
      title: "Rota do Vinho",
      location: "Toscana",
      country: "Itália",
      price: 3900,
      originalPrice: 4500,
      duration: "7 dias",
      rating: 4.9,
      reviews: 212,
      category: 'gastronomy',
      image: "https://tse1.mm.bing.net/th/id/OIP.25B9zrvBdPkRpY1lY1-vwwHaE6?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Sabores, paisagens e vinhos premiados no coração italiano",
      highlights: ["Chianti", "Vernaccia di San Gimignano", "Montalcino", "Degustações"],
      included: ["Voo", "Agriturismo", "Tours de vinícolas", "Café da manhã"],
      difficulty: 'easy',
      bestTime: "Maio a Outubro"
    },
    {
      id: 12,
      title: "Expresso Nórdico",
      location: "Oslo",
      country: "Noruega",
      price: 5100,
      duration: "8 dias",
      rating: 4.7,
      reviews: 145,
      category: 'luxury',
      image: "https://tse1.mm.bing.net/th/id/OIP.CQ-npdJrEymo-9ZUW_XJXwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Aurora boreal e fiordes gelados em paisagens cinematográficas",
      highlights: ["Trem de Bergen", "Aurora Boreal", "Geirangerfjord", "Museu Viking"],
      included: ["Voo", "Hotel", "Passeios guiados", "Trem panorâmico"],
      difficulty: 'medium',
      bestTime: "Setembro a Março"
    },
    {
      id: 13,
      title: "Negócios em Singapura",
      location: "Singapura",
      country: "Singapura",
      price: 5400,
      duration: "5 dias",
      rating: 4.8,
      reviews: 176,
      category: 'business',
      image: "https://th.bing.com/th/id/R.0d2ecb2a385bec7b8c4bb01bb3d6c841?rik=CE6GzK431VJ1Gg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-yFT5Qy_Loo0%2fVfYXl7QxcjI%2fAAAAAAAAkFA%2f0ikooOYjhyM%2fs1600%2fmarina-1.jpg&ehk=%2fnp2SoocmP6bAnFbMAIzJkI2xluA4VmRK1fEjYJoSLI%3d&risl=&pid=ImgRaw&r=0",
      description: "Pacote de viagem focado em networking e eventos corporativos",
      highlights: ["Marina Bay Sands", "Distrito Financeiro", "Eventos VIP", "Skybar"],
      included: ["Voo", "Hotel 5★", "Transfers executivos", "Sala VIP aeroporto"],
      difficulty: 'easy',
      bestTime: "Agosto a Novembro"
    },
    {
      id: 14,
      title: "Retiro Zen em Bali",
      location: "Ubud",
      country: "Indonésia",
      price: 3100,
      duration: "9 dias",
      rating: 4.9,
      reviews: 289,
      category: 'wellness',
      image: "https://indojunkie.com/wp-content/uploads/Segara-Village-Bali-1024x683.jpg",
      description: "Desconecte-se do mundo e reconecte-se com você mesmo",
      highlights: ["Yoga", "Spa", "Arrozais", "Templos sagrados"],
      included: ["Voo", "Resort Wellness", "Aulas de meditação", "Alimentação Detox"],
      difficulty: 'easy',
      bestTime: "Maio a Setembro"
    },
    {
      id: 15,
      title: "Caminhos da Seda",
      location: "Istambul",
      country: "Turquia",
      price: 3700,
      duration: "8 dias",
      rating: 4.6,
      reviews: 154,
      category: 'history',
      image: "https://wp.rotadeferias.com.br/wp-content/uploads/2018/09/pontos-turisticos-na-Mongolia-deserto-Divulgacao.jpg",
      description: "Explore mercados ancestrais e construções milenares",
      highlights: ["Hagia Sophia", "Grande Bazar", "Palácio Topkapi", "Cruzeiro Bósforo"],
      included: ["Voo", "Hotel", "City tours", "Guia histórico"],
      difficulty: 'medium',
      bestTime: "Março a Maio"
    },
    {
      id: 16,
      title: "Chile Gastronômico",
      location: "Santiago",
      country: "Chile",
      price: 2600,
      duration: "6 dias",
      rating: 4.5,
      reviews: 87,
      category: 'gastronomy',
      image: "https://th.bing.com/th/id/R.e5ba9298b05b52de2a0b4322f7253333?rik=w8IGva%2fYn5nJzQ&pid=ImgRaw&r=0",
      description: "Sabores andinos, vinhos premiados e alta culinária chilena",
      highlights: ["Vinícolas do Vale do Maipo", "Mercado Central", "Valparaíso", "Ritual típico"],
      included: ["Voo", "Hotel", "Degustações", "Transfers"],
      difficulty: 'easy',
      bestTime: "Abril a Junho"
    },
    {
      id: 17,
      title: "Costa Amalfitana",
      location: "Positano",
      country: "Itália",
      price: 4500,
      duration: "7 dias",
      rating: 4.9,
      reviews: 312,
      category: 'romance',
      image: "https://i.pinimg.com/originals/02/82/12/028212a9ee928c7c6fb7aa3a96847502.jpg",
      description: "Cenário dos sonhos para casais apaixonados",
      highlights: ["Positano", "Capri", "Ravello", "Passeio de barco"],
      included: ["Voo", "Hotel Boutique", "Café da manhã", "Passeios"],
      difficulty: 'easy',
      bestTime: "Maio a Setembro"
    },
    {
      id: 18,
      title: "Havaí Aloha",
      location: "Honolulu",
      country: "EUA",
      price: 3900,
      duration: "8 dias",
      rating: 4.7,
      reviews: 201,
      category: 'beach',
      image: "https://tse3.mm.bing.net/th/id/OIP.nv_B30i-JrdizWqIX3pV-AHaEe?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Sol, mar e vibes tropicais no paraíso havaiano",
      highlights: ["Waikiki Beach", "Volcano National Park", "Luau tradicional", "Snorkeling"],
      included: ["Voo", "Resort", "Atividades aquáticas", "Transfers"],
      difficulty: 'easy',
      bestTime: "Março a Outubro"
    },
    {
      id: 19,
      title: "Expedição Amazônica",
      location: "Manaus",
      country: "Brasil",
      price: 2700,
      duration: "7 dias",
      rating: 4.4,
      reviews: 95,
      category: 'nature',
      image: "https://th.bing.com/th/id/R.d5479df814aa540be002725bacb4d480?rik=xUVR4I7yCUhRyA&pid=ImgRaw&r=0",
      description: "Vida selvagem, cultura ribeirinha e trilhas na maior floresta tropical do mundo",
      highlights: ["Encontro das Águas", "Floresta de Igapó", "Comunidades Indígenas", "Passeio de canoa"],
      included: ["Voo", "Hospedagem ecológica", "Pensão completa", "Guias locais"],
      difficulty: 'medium',
      bestTime: "Julho a Outubro"
    },
    {
      id: 20,
      title: "Ruta Mexicana",
      location: "Cancún",
      country: "México",
      price: 3300,
      duration: "9 dias",
      rating: 4.8,
      reviews: 255,
      category: 'adventure',
      image: "https://th.bing.com/th/id/R.b8765c387d1af7495f214fa09d1dbec4?rik=7WmX%2fEPgAKFfMw&pid=ImgRaw&r=0",
      description: "Mistura perfeita entre ruínas maias, cenotes e praias caribenhas",
      highlights: ["Chichén Itzá", "Cenote Sagrado", "Isla Mujeres", "Xcaret"],
      included: ["Voo", "Resort", "Excursões", "All Inclusive"],
      difficulty: 'medium',
      bestTime: "Novembro a Abril"
    }
  ];
