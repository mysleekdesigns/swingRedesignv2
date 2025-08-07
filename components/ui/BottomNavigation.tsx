'use client'

import { Home, Users, Calendar, Heart, MessageCircle, Settings } from "lucide-react";
import { useState } from "react";

interface BottomNavigationProps {
  className?: string;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home', active: true },
  { id: 'users', icon: Users, label: 'Browse', active: false },
  { id: 'events', icon: Calendar, label: 'Events', active: false },
  { id: 'likes', icon: Heart, label: 'Likes', active: false },
  { id: 'messages', icon: MessageCircle, label: 'Chat', active: false },
  { id: 'settings', icon: Settings, label: 'Profile', active: false },
];

export function BottomNavigation({ className = '' }: BottomNavigationProps) {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-t border-border/50 neon-cyberpunk:cyber-glass neon-cyberpunk:border-primary/30 neon-cyberpunk:bg-card/60">
      <div className="neon-cyberpunk:absolute neon-cyberpunk:top-0 neon-cyberpunk:left-0 neon-cyberpunk:right-0 neon-cyberpunk:h-[1px] neon-cyberpunk:bg-gradient-to-r neon-cyberpunk:from-transparent neon-cyberpunk:via-primary neon-cyberpunk:to-transparent neon-cyberpunk:opacity-60" />
      
      <div className="max-w-md mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="flex flex-col items-center justify-center min-w-0 flex-1 px-1 py-2 text-xs font-medium transition-all duration-300 rounded-lg group relative overflow-hidden"
              >
                {isActive && (
                  <div className="absolute inset-0 bg-primary/10 rounded-lg animate-pulse neon-cyberpunk:bg-primary/20 neon-cyberpunk:neon-glow neon-cyberpunk:holographic-bg" />
                )}
                
                <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 neon-cyberpunk:bg-accent/10 neon-cyberpunk:group-hover:neon-glow" />
                
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <div className="p-1.5 rounded-lg transition-all duration-300 group-hover:bg-primary/10 neon-cyberpunk:group-hover:cyber-glass neon-cyberpunk:group-hover:neon-border">
                    <Icon className="w-5 h-5 transition-all duration-300 group-hover:scale-105 neon-cyberpunk:group-hover:drop-shadow-[0_0_8px_oklch(0.7_0.3_320)]" />
                  </div>
                  <span className="text-[10px] leading-none transition-all duration-300 group-hover:font-medium neon-cyberpunk:group-hover:neon-text">
                    {item.label}
                  </span>
                </div>
                
                {isActive && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse neon-cyberpunk:bg-accent neon-cyberpunk:shadow-[0_0_6px_oklch(0.9_0.3_140)] neon-cyberpunk:cyber-pulse" />
                )}
                
                <div className="neon-cyberpunk:absolute neon-cyberpunk:inset-0 neon-cyberpunk:bg-gradient-to-b neon-cyberpunk:from-transparent neon-cyberpunk:via-primary/5 neon-cyberpunk:to-transparent neon-cyberpunk:opacity-0 neon-cyberpunk:group-hover:opacity-100 neon-cyberpunk:transition-opacity neon-cyberpunk:duration-500" />
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="h-4 bg-card/20 neon-cyberpunk:bg-card/10" />
    </nav>
  );
}
