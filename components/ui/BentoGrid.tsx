import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 ${className}`}>
      {children}
    </div>
  );
}

export function BentoCard({ children, className = '', size = 'md' }: BentoCardProps) {
  const sizeClasses = {
    sm: 'col-span-1 row-span-1',
    md: 'col-span-1 md:col-span-2 row-span-1',
    lg: 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2',
    xl: 'col-span-full row-span-2'
  };

  return (
    <div className={`rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:bg-card/70 hover:border-border/50 neon-cyberpunk:cyber-glass neon-cyberpunk:neon-border neon-cyberpunk:hover:neon-glow neon-cyberpunk:hover:cyber-pulse ${sizeClasses[size]} ${className}`}>
      <div className="p-6 h-full">
        {children}
      </div>
    </div>
  );
}
