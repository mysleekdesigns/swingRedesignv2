import { MapPin, Camera, Heart, MessageCircle, Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

interface VideoUserCardProps {
  username: string;
  age: number;
  location: string;
  videoUrl?: string;
  imageUrl: string;
  isOnline?: boolean;
  distance?: string;
  photosCount?: number;
  viewedTime?: string;
  isLiked?: boolean;
  showActions?: boolean;
  variant?: 'default' | 'compact' | 'featured';
}

export function VideoUserCard({
  username,
  age,
  location,
  videoUrl,
  imageUrl,
  isOnline = false,
  distance,
  photosCount,
  viewedTime,
  isLiked = false,
  showActions = false,
  variant = 'default',
}: VideoUserCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const aspectRatio = variant === 'compact' ? 'aspect-[4/5]' : 'aspect-[3/4]';
  
  const handlePlayVideo = () => {
    if (videoUrl) {
      setShowVideo(true);
      setIsPlaying(true);
    }
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card hover-lift cursor-pointer transition-all duration-300 ring-2 ring-primary/20 shadow-lg shadow-primary/10 neon-cyberpunk:neon-border neon-cyberpunk:cyber-glass">
      <div className="aspect-[3/4] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 neon-cyberpunk:group-hover:saturate-150"
        />
        
        {showVideo && videoUrl && (
          <video
            autoPlay
            loop
            muted={isMuted}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 neon-cyberpunk:saturate-150"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 neon-cyberpunk:to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 neon-cyberpunk:holographic-bg neon-cyberpunk:from-primary/20" />
        
        {isPlaying && (
          <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary via-accent to-secondary p-[2px] rounded-2xl neon-cyberpunk:animate-pulse neon-cyberpunk:shadow-[0_0_20px_oklch(0.7_0.3_320)]">
            <div className="w-full h-full bg-black/20 rounded-xl" />
          </div>
        )}
        
        {isOnline && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-dark border border-white/10 neon-cyberpunk:cyber-glass neon-cyberpunk:neon-glow neon-cyberpunk:cyber-pulse">
            <div className="status-dot status-online animate-pulse neon-cyberpunk:shadow-[0_0_10px_oklch(0.9_0.3_140)]" />
            <span className="text-xs font-medium text-white tracking-wide neon-cyberpunk:neon-text">Online</span>
          </div>
        )}
        
        {videoUrl && !showVideo && (
          <button
            onClick={handlePlayVideo}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full glass-dark border border-white/20 hover:scale-110 transition-all duration-300 neon-cyberpunk:cyber-glass neon-cyberpunk:neon-glow neon-cyberpunk:hover:neon-border neon-cyberpunk:cyber-pulse"
            aria-label="Play video"
          >
            <Play className="w-6 h-6 text-white fill-white neon-cyberpunk:neon-text-accent neon-cyberpunk:drop-shadow-[0_0_10px_oklch(0.9_0.3_140)]" />
          </button>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent neon-cyberpunk:from-black/90 neon-cyberpunk:via-black/50">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight leading-tight neon-cyberpunk:neon-text neon-cyberpunk:cyber-glitch">
              {username}, <span className="text-white neon-cyberpunk:neon-text-accent">{age}</span>
            </h3>
            
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 neon-cyberpunk:text-accent neon-cyberpunk:drop-shadow-[0_0_5px_oklch(0.9_0.3_140)]" />
              <span className="text-sm font-medium truncate neon-cyberpunk:neon-text">{location}</span>
              {distance && (
                <span className="text-sm font-medium text-primary neon-cyberpunk:neon-text-primary">{distance}</span>
              )}
            </div>
            
            {videoUrl && (
              <div className="flex items-center gap-1 text-xs text-accent font-medium neon-cyberpunk:neon-text-accent">
                <Play className="w-3 h-3 fill-current" />
                Video Profile
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
