import Image from "next/image";
import { MapPin, Camera, Heart, MessageCircle } from "lucide-react";

interface UserCardProps {
  username: string;
  age: number;
  location: string;
  imageUrl: string;
  isOnline?: boolean;
  distance?: string;
  photosCount?: number;
  viewedTime?: string;
  isLiked?: boolean;
  showActions?: boolean;
  variant?: 'default' | 'compact' | 'featured';
}

export function UserCard({
  username,
  age,
  location,
  imageUrl,
  isOnline = false,
  distance,
  photosCount,
  viewedTime,
  isLiked = false,
  showActions = false,
  variant = 'default',
}: UserCardProps) {
  const aspectRatio = variant === 'compact' ? 'aspect-[4/5]' : 'aspect-[3/4]';
  
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card hover-lift cursor-pointer transition-all duration-300 border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10">
      <div className={`${aspectRatio} relative overflow-hidden`}>
        <Image
          src={imageUrl}
          alt={`${username}'s profile photo`}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 neon-cyberpunk:group-hover:saturate-150"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          priority={variant === 'featured'}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status indicators with improved glassmorphism */}
        {isOnline && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-white">Online</span>
          </div>
        )}
        
        {photosCount && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
            <Camera className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-medium text-white">{photosCount}</span>
          </div>
        )}
        
        {/* Action buttons for interactive cards with cyberpunk effects */}
        {showActions && (
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              className={`p-2.5 rounded-full bg-black/60 backdrop-blur-sm border hover:scale-110 transition-transform ${
                isLiked ? 'bg-primary/80 border-primary text-white' : 'border-white/20 hover:bg-primary/60'
              }`}
              aria-label={isLiked ? 'Unlike' : 'Like'}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'text-white fill-white' : 'text-white'}`} />
            </button>
            <button 
              className="p-2.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 hover:bg-primary/60 hover:scale-110 transition-all"
              aria-label="Send message"
            >
              <MessageCircle className="w-4 h-4 text-white" />
            </button>
          </div>
        )}
        
        {/* Content area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-white">
              {username}, <span className="text-primary">{age}</span>
            </h3>
            
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-sm truncate">{location}</span>
              {distance && (
                <>
                  <span className="text-white/60">•</span>
                  <span className="text-sm text-primary">{distance}</span>
                </>
              )}
            </div>
            
            {viewedTime && (
              <p className="text-xs text-white/60 bg-black/30 rounded-full px-2 py-0.5 inline-block">
                {viewedTime}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
