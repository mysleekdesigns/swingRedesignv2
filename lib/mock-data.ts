// Mock data for Swing dating website
export interface User {
  id: string;
  username: string;
  age: number;
  location: string;
  imageUrl: string;
  isOnline?: boolean;
  distance?: string;
  photosCount?: number;
  isLiked?: boolean;
  bio?: string;
  interests?: string[];
}

export interface HotDate {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  attendeeCount: number;
  category: 'party' | 'outdoor' | 'cultural' | 'sports' | 'dining';
  price?: string;
}

export interface Convention {
  id: string;
  name: string;
  description: string;
  date: string;
  dates?: string;
  location: string;
  imageUrl: string;
  attendeeCount: number;
  category: "lifestyle" | "educational" | "social" | "wellness";
  price?: string;
  featured?: boolean;
}

export interface FeaturedCouple {
  id: string;
  names: string;
  age: string;
  location: string;
  imageUrl: string;
  joinDate: string;
  eventsOrganized: number;
  communityPoints: number;
  specialty: string;
  description: string;
  achievements: string[];
  currentEvent?: string;
}
// Sample convention data
export const featuredConvention: Convention = {
  id: "sc2025",
  name: "SwingerCon 2025: Connections & Freedom",
  description: "The premier lifestyle convention featuring workshops, social events, and networking opportunities for the swinging community. Join us for three days of education, connection, and celebration.",
  date: "2025-09-15",
  location: "Las Vegas Convention Center",
  imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  attendeeCount: 1200,
  category: "lifestyle",
  price: "$299",
  featured: true
};

// Featured Swinger Couple of the Month
export const featuredCouple: FeaturedCouple = {
  id: "fc-august-2025",
  names: "Alex & Jamie",
  age: "32 & 29",
  location: "Beverly Hills, CA",
  imageUrl: "/images/couple1.jpg",
  joinDate: "January 2023",
  eventsOrganized: 15,
  communityPoints: 2850,
  specialty: "Newcomer Mentoring",
  description: "Alex and Jamie have been incredible community builders since joining Swing. They specialize in welcoming new couples and organizing inclusive events that help everyone feel comfortable and connected.",
  achievements: [
    "Top Event Organizer 2024",
    "Community Choice Award",
    "Newcomer Mentor Champion"
  ],
  currentEvent: "Sunset Beach Welcome Party - Aug 15th"
};// Mock users for "Who's On" section
export const whoIsOnUsers: User[] = [
  {
    id: '1',
    username: 'sxycpl',
    age: 32,
    location: 'Downtown LA',
    imageUrl: 'https://images.unsplash.com/photo-1608145640433-937abd82a4e1?w=400&h=600&fit=crop',
    isOnline: true,
    distance: '2 mi',
    photosCount: 12,
  },
  {
    id: '2',
    username: 'hotpair',
    age: 28,
    location: 'Hollywood',
    imageUrl: 'https://images.unsplash.com/photo-1522941471521-6ee21ec5cc26?w=400&h=600&fit=crop',
    isOnline: true,
    distance: '3 mi',
    photosCount: 15,
  },
  {
    id: '3',
    username: 'vixenlife',
    age: 26,
    location: 'Santa Monica',
    imageUrl: 'https://images.unsplash.com/photo-1652471949169-9c587e8898cd?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '5 mi',
    photosCount: 8,
  },
  {
    id: '4',
    username: 'playmates',
    age: 29,
    location: 'Venice Beach',
    imageUrl: 'https://images.unsplash.com/photo-1655211085738-35ff9f7e0cd2?w=400&h=600&fit=crop',
    isOnline: true,
    distance: '4 mi',
    photosCount: 18,
  },
  {
    id: '5',
    username: 'temptress',
    age: 24,
    location: 'Beverly Hills',
    imageUrl: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '6 mi',
    photosCount: 11,
  },
  {
    id: '6',
    username: 'wildones',
    age: 31,
    location: 'West Hollywood',
    imageUrl: 'https://images.unsplash.com/photo-1541385496969-a3edfa5a94ed?w=400&h=600&fit=crop',
    isOnline: true,
    distance: '3 mi',
    photosCount: 14,
  },
  {
    id: '7',
    username: 'dreamvibe',
    age: 27,
    location: 'Glendale',
    imageUrl: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '7 mi',
    photosCount: 16,
  },
  {
    id: '8',
    username: 'wildkitty',
    age: 23,
    location: 'Echo Park',
    imageUrl: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '4 mi',
    photosCount: 9,
  },
  {
    id: '33',
    username: 'cutecouple',
    age: 30,
    location: 'Los Feliz',
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '5 mi',
    photosCount: 13,
  },
  {
    id: '34',
    username: 'hotdates',
    age: 26,
    location: 'Silver Lake',
    imageUrl: 'https://images.unsplash.com/photo-1552374196-c4e7fbd312ed?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '6 mi',
    photosCount: 17,
  },
  {
    id: '35',
    username: 'swingtime',
    age: 29,
    location: 'Mid City',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '4 mi',
    photosCount: 10,
  },
  {
    id: '36',
    username: 'funlovers',
    age: 32,
    location: 'Koreatown',
    imageUrl: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '3 mi',
    photosCount: 19,
  },
];

// Mock users for "Who Viewed Me" section
export const whoViewedMeUsers: User[] = [
  {
    id: '9',
    isOnline: true,
    username: 'funcouple',
    age: 30,
    location: 'Pasadena',
    imageUrl: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?w=400&h=600&fit=crop',
    distance: '8 mi',
    photosCount: 13,
  },
  {
    id: '10',
    username: 'sexysiren',
    age: 25,
    location: 'Long Beach',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face',
    distance: '12 mi',
    photosCount: 10,
  },
  {
    id: '11',
    isOnline: true,
    username: 'naughtytwo',
    age: 28,
    location: 'Culver City',
    imageUrl: 'https://images.unsplash.com/photo-1542351682-8453e2495f97?w=400&h=600&fit=crop',
    distance: '7 mi',
    photosCount: 17,
  },
  {
    id: '12',
    username: 'playgirl',
    age: 27,
    location: 'Manhattan Beach',
    imageUrl: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=400&h=600&fit=crop&crop=face',
    distance: '15 mi',
    photosCount: 7,
  },
  {
    id: '13',
    isOnline: true,
    username: 'adventureduo',
    age: 33,
    location: 'Playa Vista',
    imageUrl: 'https://images.unsplash.com/photo-1522749541344-23b292febf25?w=400&h=600&fit=crop',
    distance: '10 mi',
    photosCount: 19,
  },
  {
    id: '14',
    username: 'hotvixen',
    age: 22,
    location: 'Hermosa Beach',
    imageUrl: 'https://images.unsplash.com/photo-1652471949169-9c587e8898cd?w=400&h=600&fit=crop&crop=face',
    distance: '13 mi',
    photosCount: 6,
  },
  {
    id: '21',
    isOnline: true,
    username: 'sweetduo',
    age: 29,
    location: 'Torrance',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=face',
    distance: '16 mi',
    photosCount: 14,
  },
  {
    id: '22',
    username: 'funtimes',
    age: 26,
    location: 'Inglewood',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face',
    distance: '11 mi',
    photosCount: 9,
  },
  {
    id: '23',
    username: 'partypeople',
    age: 31,
    location: 'Westwood',
    imageUrl: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=600&fit=crop',
    distance: '5 mi',
    photosCount: 12,
  },
  {
    id: '24',
    username: 'wildside',
    age: 28,
    location: 'Malibu',
    imageUrl: 'https://images.unsplash.com/photo-1521310192545-4ac7951413f0?w=400&h=600&fit=crop&crop=face',
    distance: '18 mi',
    photosCount: 20,
  },
  {
    id: '25',
    isOnline: true,
    username: 'sexycouple',
    age: 33,
    location: 'Calabasas',
    imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616c90d8fb0?w=400&h=600&fit=crop&crop=face',
    distance: '22 mi',
    photosCount: 16,
  },
  {
    id: '26',
    username: 'hotnight',
    age: 24,
    location: 'Woodland Hills',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face',
    distance: '19 mi',
    photosCount: 7,
  },
];

// Mock users for "Newest Matches" section
export const newestMatches: User[] = [
  {
    id: '15',
    isOnline: true,
    username: 'hotwife4u',
    age: 29,
    location: 'Brentwood',
    imageUrl: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?w=400&h=600&fit=crop&crop=face',
    distance: '4 mi',
    photosCount: 21,
    isLiked: true,
  },
  {
    id: '16',
    username: 'badgirl',
    age: 24,
    location: 'Marina del Rey',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&crop=face',
    distance: '6 mi',
    photosCount: 8,
    isLiked: true,
  },
  {
    id: '17',
    isOnline: true,
    username: 'couplesexy',
    age: 26,
    location: 'Redondo Beach',
    imageUrl: 'https://images.unsplash.com/photo-1556229868-7b2d4b56b909?w=400&h=600&fit=crop',
    distance: '11 mi',
    photosCount: 16,
    isLiked: true,
  },
  {
    id: '18',
    username: 'lusciousbabe',
    age: 25,
    location: 'El Segundo',
    imageUrl: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=400&h=600&fit=crop&crop=face',
    distance: '9 mi',
    photosCount: 5,
    isLiked: true,
  },
  {
    id: '19',
    isOnline: true,
    username: 'playtime2',
    age: 30,
    location: 'Burbank',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1670588775988-ae6d15872e3c?w=400&h=600&fit=crop',
    distance: '14 mi',
    photosCount: 20,
    isLiked: true,
  },
  {
    id: '20',
    username: 'firecpl',
    age: 35,
    location: 'Studio City',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1674438115826-11ea29d16e7e?w=400&h=600&fit=crop',
    distance: '12 mi',
    photosCount: 22,
    isLiked: true,
  },
  {
    id: '27',
    isOnline: true,
    username: 'dreamgirl',
    age: 25,
    location: 'Thousand Oaks',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face',
    distance: '25 mi',
    photosCount: 13,
    isLiked: true,
  },
  {
    id: '28',
    username: 'swinglife',
    age: 32,
    location: 'Pomona',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face',
    distance: '28 mi',
    photosCount: 18,
    isLiked: true,
  },
  {
    id: '29',
    isOnline: true,
    username: 'hotmama',
    age: 29,
    location: 'Encino',
    imageUrl: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&h=600&fit=crop&crop=face',
    distance: '17 mi',
    photosCount: 15,
    isLiked: true,
  },
  {
    id: '30',
    username: 'naughtynice',
    age: 27,
    location: 'Sherman Oaks',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=face',
    distance: '16 mi',
    photosCount: 11,
    isLiked: true,
  },
  {
    id: '31',
    username: 'playfulgirl',
    age: 23,
    location: 'Van Nuys',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
    distance: '20 mi',
    photosCount: 8,
    isLiked: true,
  },
  {
    id: '32',
    isOnline: true,
    username: 'adventurous',
    age: 34,
    location: 'Glendale',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face',
    distance: '19 mi',
    photosCount: 24,
    isLiked: true,
  },
];

// Mock hot dates/events
// Random matches - shuffled users for discovery
export const randomMatches: User[] = [
  {
    id: 'r1',
    username: 'adventurer',
    age: 28,
    location: 'Pasadena',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '8 mi',
    photosCount: 12,
  },
  {
    id: 'r2',
    username: 'explorer',
    age: 32,
    location: 'Manhattan Beach',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '10 mi',
    photosCount: 9,
  },
  {
    id: 'r3',
    username: 'freespirit',
    age: 25,
    location: 'Hermosa Beach',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=face',
    isOnline: false,
    distance: '11 mi',
    photosCount: 15,
  },
  {
    id: 'r4',
    username: 'nightowl',
    age: 30,
    location: 'Downtown LA',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '2 mi',
    photosCount: 8,
  },
  {
    id: 'r5',
    username: 'wildcard',
    age: 27,
    location: 'Culver City',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '4 mi',
    photosCount: 11,
  },
  {
    id: 'r6',
    username: 'mystique',
    age: 29,
    location: 'Malibu',
    imageUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop&crop=face',
    isOnline: false,
    distance: '15 mi',
    photosCount: 20,
  },
  {
    id: 'r7',
    username: 'charmer',
    age: 31,
    location: 'Redondo Beach',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '12 mi',
    photosCount: 7,
  },
  {
    id: 'r8',
    username: 'seeker',
    age: 26,
    location: 'Torrance',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '13 mi',
    photosCount: 14,
  },
];

// Conventions data
export const conventions: Convention[] = [
  {
    id: 'c1',
    name: 'Swing Lifestyle Expo',
    description: 'The largest lifestyle convention on the West Coast with workshops, vendors, and parties.',
    date: '2025-09-15',
    dates: 'Sep 15-17, 2025',
    location: 'Los Angeles Convention Center',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    attendeeCount: 2500,
    category: 'lifestyle',
    featured: true,
    price: '$199',
  },
  {
    id: 'c2',
    name: 'Desire Resort Takeover',
    description: 'Exclusive week-long resort takeover in Mexico with themed nights and entertainment.',
    date: '2025-10-01',
    dates: 'Oct 1-7, 2025',
    location: 'Riviera Maya, Mexico',
    imageUrl: 'https://images.unsplash.com/photo-1561501878-aabd62634533?w=600&h=400&fit=crop',
    attendeeCount: 800,
    category: 'social',
    price: '$2,500',
  },
  {
    id: 'c3',
    name: "Naughty N'awlins",
    description: 'The original lifestyle convention with seminars, parties, and networking opportunities.',
    date: '2025-11-12',
    dates: 'Nov 12-16, 2025',
    location: 'New Orleans, LA',
    imageUrl: 'https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=600&h=400&fit=crop',
    attendeeCount: 3000,
    category: 'lifestyle',
    featured: true,
    price: '$349',
  },
  {
    id: 'c4',
    name: 'Miami Beach Takeover',
    description: 'Beach parties, yacht events, and exclusive nightclub experiences in South Beach.',
    date: '2025-12-05',
    dates: 'Dec 5-8, 2025',
    location: 'Miami Beach, FL',
    imageUrl: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=600&h=400&fit=crop',
    attendeeCount: 1200,
    category: 'social',
    price: '$599',
  },
  {
    id: 'c5',
    name: 'Vegas After Dark',
    description: "Sin City's premier lifestyle event with pool parties, shows, and exclusive venues.",
    date: '2026-01-20',
    dates: 'Jan 20-24, 2026',
    location: 'Las Vegas, NV',
    imageUrl: 'https://images.unsplash.com/photo-1581351123004-757df051db8e?w=600&h=400&fit=crop',
    attendeeCount: 1800,
    category: 'lifestyle',
    price: '$449',
  },
  {
    id: 'c6',
    name: 'Hedonism III Weekend',
    description: 'All-inclusive resort weekend in Jamaica with themed events and entertainment.',
    date: '2026-02-14',
    dates: 'Feb 14-17, 2026',
    location: 'Runaway Bay, Jamaica',
    imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&h=400&fit=crop',
    attendeeCount: 600,
    category: 'social',
    price: '$1,800',
  },
];

export const hotDates: HotDate[] = [
  {
    id: '1',
    title: 'Sunset Rooftop Party',
    description: 'Join us for cocktails and city views as the sun sets over LA. Great music, amazing people\!',
    date: '2025-08-08',
    time: '7:00 PM',
    location: 'Downtown LA Rooftop',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop',
    attendeeCount: 24,
    category: 'party',
    price: '$25',
  },
  {
    id: '2',
    title: 'Beach Volleyball & BBQ',
    description: 'Active singles meet-up at the beach. Volleyball games followed by a group BBQ dinner.',
    date: '2025-08-10',
    time: '4:00 PM',
    location: 'Santa Monica Beach',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
    attendeeCount: 18,
    category: 'outdoor',
  },
  {
    id: '3',
    title: 'Wine Tasting Night',
    description: 'Discover new wines and meet fellow wine enthusiasts in an intimate setting.',
    date: '2025-08-12',
    time: '6:30 PM',
    location: 'Beverly Hills Wine Bar',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop',
    attendeeCount: 16,
    category: 'dining',
    price: '$40',
  },
  {
    id: '4',
    title: 'Art Gallery Opening',
    description: 'Experience contemporary art and connect with creative souls at this exclusive gallery opening.',
    date: '2025-08-15',
    time: '7:00 PM',
    location: 'West Hollywood Gallery',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop',
    attendeeCount: 12,
    category: 'cultural',
  },
  {
    id: '5',
    title: 'Karaoke Night',
    description: 'Sing your heart out and connect with music lovers in a fun, relaxed atmosphere.',
    date: '2025-08-16',
    time: '8:00 PM',
    location: 'Koreatown Karaoke Bar',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop',
    attendeeCount: 20,
    category: 'party',
    price: '$15',
  },
  {
    id: '6',
    title: 'Hiking Adventure',
    description: 'Early morning hike through scenic trails followed by brunch at a local café.',
    date: '2025-08-17',
    time: '7:00 AM',
    location: 'Runyon Canyon',
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
    attendeeCount: 15,
    category: 'outdoor',
  },
  {
    id: '7',
    title: 'Cooking Class',
    description: 'Learn to prepare gourmet dishes while meeting fellow food enthusiasts.',
    date: '2025-08-19',
    time: '6:00 PM',
    location: 'Culver City Cooking School',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    attendeeCount: 14,
    category: 'dining',
    price: '$60',
  },
  {
    id: '8',
    title: 'Bowling & Drinks',
    description: 'Strike up conversations over strikes and spares at this retro bowling alley.',
    date: '2025-08-20',
    time: '7:30 PM',
    location: 'Highland Park Bowl',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    attendeeCount: 22,
    category: 'sports',
    price: '$30',
  },
];

// Helper function to get random users
export function getRandomUsers(users: User[], count: number): User[] {
  const shuffled = [...users].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Helper function to format time ago
export function formatTimeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffInMs = now.getTime() - date.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours} hours ago`;
  if (diffInDays === 1) return 'Yesterday';
  return `${diffInDays} days ago`;
}
