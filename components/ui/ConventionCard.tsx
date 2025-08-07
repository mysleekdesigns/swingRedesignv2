import Image from "next/image";
import { Calendar, MapPin, Users, DollarSign } from "lucide-react";
import { Convention } from "@/lib/mock-data";

interface ConventionCardProps extends Convention {
  variant?: 'default' | 'compact';
}

const categoryColors = {
  lifestyle: 'bg-primary/20 text-primary border-primary/30 neon-cyberpunk:bg-primary/30 neon-cyberpunk:neon-text-primary neon-cyberpunk:neon-border',
  educational: 'bg-blue-500/20 text-blue-300 border-blue-500/30 neon-cyberpunk:bg-secondary/30 neon-cyberpunk:neon-text neon-cyberpunk:border-secondary/50',
  social: 'bg-green-500/20 text-green-300 border-green-500/30 neon-cyberpunk:bg-accent/30 neon-cyberpunk:neon-text-accent neon-cyberpunk:border-accent/50',
  wellness: 'bg-purple-500/20 text-purple-300 border-purple-500/30 neon-cyberpunk:bg-primary/30 neon-cyberpunk:neon-text-primary neon-cyberpunk:border-primary/50',
};

export function ConventionCard({
  name,
  description,
  date,
  location,
  imageUrl,
  attendeeCount,
  category,
  price,
  variant = 'default',
}: ConventionCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (variant === 'compact') {
    return (
      <div className="group relative overflow-hidden rounded-xl bg-card hover-lift cursor-pointer border border-border/50 neon-cyberpunk:neon-border neon-cyberpunk:cyber-glass">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 neon-cyberpunk:group-hover:saturate-150"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 neon-cyberpunk:to-black/85" />
          
          {/* Cyberpunk holographic overlay */}
          <div className="neon-cyberpunk:absolute neon-cyberpunk:inset-0 neon-cyberpunk:holographic-bg neon-cyberpunk:opacity-0 neon-cyberpunk:group-hover:opacity-100 neon-cyberpunk:transition-all neon-cyberpunk:duration-500" />
          
          {/* Category badge */}
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold border neon-cyberpunk:cyber-glass neon-cyberpunk:cyber-pulse ${categoryColors[category]}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
          
          {/* Attendee count */}
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full glass-dark border border-white/10 neon-cyberpunk:cyber-glass neon-cyberpunk:neon-glow">
            <Users className="w-3 h-3 text-white neon-cyberpunk:neon-text-accent" />
            <span className="text-xs font-medium text-white neon-cyberpunk:neon-text">{attendeeCount}</span>
          </div>
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 neon-cyberpunk:neon-text neon-cyberpunk:cyber-glitch">{name}</h3>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 neon-cyberpunk:text-primary neon-cyberpunk:drop-shadow-[0_0_3px_oklch(0.7_0.3_320)]" />
                <span className="neon-cyberpunk:neon-text">{formatDate(date)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card hover-lift cursor-pointer border border-border/50 neon-cyberpunk:neon-border neon-cyberpunk:cyber-glass">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 neon-cyberpunk:group-hover:saturate-150"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 neon-cyberpunk:to-black/90" />
        
        {/* Cyberpunk holographic overlay */}
        <div className="neon-cyberpunk:absolute neon-cyberpunk:inset-0 neon-cyberpunk:holographic-bg neon-cyberpunk:opacity-0 neon-cyberpunk:group-hover:opacity-100 neon-cyberpunk:transition-all neon-cyberpunk:duration-700" />
        
        {/* Category badge */}
        <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-semibold border backdrop-blur-sm neon-cyberpunk:cyber-glass neon-cyberpunk:cyber-pulse ${categoryColors[category]}`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
        
        {/* Price tag */}
        {price && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full glass-dark border border-white/10 neon-cyberpunk:cyber-glass neon-cyberpunk:neon-glow neon-cyberpunk:cyber-pulse">
            <DollarSign className="w-3.5 h-3.5 text-primary neon-cyberpunk:neon-text-accent neon-cyberpunk:drop-shadow-[0_0_5px_oklch(0.9_0.3_140)]" />
            <span className="text-sm font-semibold text-white neon-cyberpunk:neon-text">{price.replace('$', '')}</span>
          </div>
        )}
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent neon-cyberpunk:from-black/95 neon-cyberpunk:via-black/60">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white leading-tight line-clamp-2 neon-cyberpunk:neon-text neon-cyberpunk:cyber-glitch">
              {name}
            </h3>
            
            <p className="text-sm text-white/80 line-clamp-2 neon-cyberpunk:neon-text neon-cyberpunk:text-white/90">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-3 text-sm text-white/90">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary neon-cyberpunk:neon-text-primary neon-cyberpunk:drop-shadow-[0_0_5px_oklch(0.7_0.3_320)]" />
                <span className="font-medium neon-cyberpunk:neon-text">{formatDate(date)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary neon-cyberpunk:neon-text-accent neon-cyberpunk:drop-shadow-[0_0_5px_oklch(0.9_0.3_140)]" />
                <span className="font-medium truncate neon-cyberpunk:neon-text">{location}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-white/60 neon-cyberpunk:text-secondary neon-cyberpunk:drop-shadow-[0_0_3px_oklch(0.8_0.25_240)]" />
                <span className="text-sm text-white/80 neon-cyberpunk:neon-text">
                  {attendeeCount} {attendeeCount === 1 ? 'person' : 'people'} attending
                </span>
              </div>
              
              <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-sm transition-colors neon-cyberpunk:cyber-glass neon-cyberpunk:neon-border neon-cyberpunk:neon-text neon-cyberpunk:cyber-pulse neon-cyberpunk:hover:neon-glow">
                Event Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
