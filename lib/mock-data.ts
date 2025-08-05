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
  viewedTime?: string;
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

// Mock users for "Who's On" section
export const whoIsOnUsers: User[] = [
  {
    id: '1',
    username: 'Sarah',
    age: 28,
    location: 'Downtown LA',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '2 mi',
    photosCount: 8,
  },
  {
    id: '2',
    username: 'Emma',
    age: 25,
    location: 'Hollywood',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '3 mi',
    photosCount: 12,
  },
  {
    id: '3',
    username: 'Mia',
    age: 30,
    location: 'Santa Monica',
    imageUrl: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '5 mi',
    photosCount: 6,
  },
  {
    id: '4',
    username: 'Zoe',
    age: 27,
    location: 'Venice Beach',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '4 mi',
    photosCount: 15,
  },
  {
    id: '5',
    username: 'Luna',
    age: 26,
    location: 'Beverly Hills',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '6 mi',
    photosCount: 9,
  },
  {
    id: '6',
    username: 'Aria',
    age: 29,
    location: 'West Hollywood',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '3 mi',
    photosCount: 11,
  },
  {
    id: '7',
    username: 'Nora',
    age: 32,
    location: 'Glendale',
    imageUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '7 mi',
    photosCount: 14,
  },
  {
    id: '8',
    username: 'Bella',
    age: 24,
    location: 'Echo Park',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&crop=face',
    isOnline: true,
    distance: '4 mi',
    photosCount: 10,
  },
];

// Mock users for "Who Viewed Me" section
export const whoViewedMeUsers: User[] = [
  {
    id: '7',
    username: 'Olivia',
    age: 24,
    location: 'Pasadena',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=face',
    distance: '8 mi',
    photosCount: 7,
    viewedTime: '2 hours ago',
  },
  {
    id: '8',
    username: 'Sophia',
    age: 31,
    location: 'Long Beach',
    imageUrl: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=600&fit=crop&crop=face',
    distance: '12 mi',
    photosCount: 14,
    viewedTime: '5 hours ago',
  },
  {
    id: '9',
    username: 'Ava',
    age: 26,
    location: 'Culver City',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face',
    distance: '7 mi',
    photosCount: 10,
    viewedTime: '1 day ago',
  },
  {
    id: '10',
    username: 'Isabella',
    age: 28,
    location: 'Manhattan Beach',
    imageUrl: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=600&fit=crop&crop=face',
    distance: '15 mi',
    photosCount: 8,
    viewedTime: '2 days ago',
  },
  {
    id: '11',
    username: 'Ruby',
    age: 30,
    location: 'Playa Vista',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
    distance: '10 mi',
    photosCount: 12,
    viewedTime: '3 days ago',
  },
  {
    id: '12',
    username: 'Hazel',
    age: 23,
    location: 'Hermosa Beach',
    imageUrl: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&h=600&fit=crop&crop=face',
    distance: '13 mi',
    photosCount: 6,
    viewedTime: '3 days ago',
  },
];

// Mock users for "Newest Matches" section
export const newestMatches: User[] = [
  {
    id: '11',
    username: 'Maya',
    age: 27,
    location: 'Brentwood',
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop&crop=face',
    distance: '4 mi',
    photosCount: 13,
    isLiked: true,
  },
  {
    id: '12',
    username: 'Chloe',
    age: 25,
    location: 'Marina del Rey',
    imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&h=600&fit=crop&crop=face',
    distance: '6 mi',
    photosCount: 9,
    isLiked: true,
  },
  {
    id: '13',
    username: 'Grace',
    age: 29,
    location: 'Redondo Beach',
    imageUrl: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=400&h=600&fit=crop&crop=face',
    distance: '11 mi',
    photosCount: 16,
    isLiked: true,
  },
  {
    id: '14',
    username: 'Lily',
    age: 26,
    location: 'El Segundo',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=face',
    distance: '9 mi',
    photosCount: 7,
    isLiked: true,
  },
  {
    id: '15',
    username: 'Scarlett',
    age: 28,
    location: 'Burbank',
    imageUrl: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=400&h=600&fit=crop&crop=face',
    distance: '14 mi',
    photosCount: 11,
    isLiked: true,
  },
  {
    id: '16',
    username: 'Violet',
    age: 31,
    location: 'Studio City',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop&crop=face',
    distance: '12 mi',
    photosCount: 9,
    isLiked: true,
  },
];

// Mock hot dates/events
export const hotDates: HotDate[] = [
  {
    id: '1',
    title: 'Sunset Rooftop Party',
    description: 'Join us for cocktails and city views as the sun sets over LA. Great music, amazing people!',
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