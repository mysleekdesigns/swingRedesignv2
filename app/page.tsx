"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { UserCard } from "@/components/ui/UserCard";
import { HotDateCard } from "@/components/ui/HotDateCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { 
  whoIsOnUsers, 
  whoViewedMeUsers, 
  newestMatches, 
  hotDates
} from "@/lib/mock-data";
import { Users, Eye, Heart, Calendar } from "lucide-react";

export default function Home() {
  // Screen width detection for responsive image count
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen width
    setScreenWidth(window.innerWidth);
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine image count based on screen width breakpoints
  // ≥1960px: 8 images, 1000-1959px: 6 images, 780-999px: 4 images, 640-779px: 3 images, <640px: 2 images
  const imageCount = screenWidth >= 1960 ? 8 : 
                    screenWidth >= 1000 ? 6 : 
                    screenWidth >= 780 ? 4 : 
                    screenWidth >= 640 ? 3 : 2;

  // Get dynamic selections based on screen width to match grid layout
  const displayedOnlineUsers = whoIsOnUsers.slice(0, imageCount);
  const displayedViewers = whoViewedMeUsers.slice(0, imageCount);
  const displayedMatches = newestMatches.slice(0, imageCount);
  const displayedEvents = hotDates.slice(0, 4); // Hot Dates stays at 4

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Main Content */}
      <main className="lg:ml-64 p-4 sm:p-6 lg:p-8">
        {/* Removed max-width constraint for full-width layout on xlarge screens */}
        <div className="w-full space-y-8">
          
          {/* Welcome Section */}
          <div className="relative overflow-hidden rounded-3xl section-glass p-8">
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Welcome to Swing
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                Discover meaningful connections with like-minded people in your area. 
                Your perfect match is just a swipe away.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground hover:text-primary-foreground rounded-xl font-semibold transition-colors">
                  Start Swinging
                </button>
                <button className="px-6 py-3 border border-border hover:bg-accent text-foreground hover:text-accent-foreground rounded-xl font-semibold transition-colors">
                  Browse Events
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
          </div>

          {/* Who's On Section */}
          <section>
            <SectionHeader
              title="Who's On"
              subtitle="People currently online and ready to connect"
              icon={Users}
              count={whoIsOnUsers.length}
              variant="glass"
            />
            {/* Grid layout: 2 images (<640px), 3 images (640-779px), 4 images (780-999px), 6 images (1000-1959px), 8 images (≥1960px) */}
            <div className="grid grid-cols-2 min-[640px]:grid-cols-3 min-[780px]:grid-cols-4 min-[1000px]:grid-cols-6 min-[1960px]:grid-cols-8 gap-4">
              {displayedOnlineUsers.map((user) => (
                <UserCard
                  key={user.id}
                  {...user}
                  variant="compact"
                  showActions={true}
                />
              ))}
            </div>
          </section>

          {/* Who Viewed Me Section */}
          <section>
            <SectionHeader
              title="Who Viewed Me"
              subtitle="Recent profile visitors - someone's interested\\!"
              icon={Eye}
              count={whoViewedMeUsers.length}
              variant="glass"
            />
            {/* Grid layout: 2 images (<640px), 3 images (640-779px), 4 images (780-999px), 6 images (1000-1959px), 8 images (≥1960px) */}
            <div className="grid grid-cols-2 min-[640px]:grid-cols-3 min-[780px]:grid-cols-4 min-[1000px]:grid-cols-6 min-[1960px]:grid-cols-8 gap-4">
              {displayedViewers.map((user) => (
                <UserCard
                  key={user.id}
                  {...user}
                  showActions={true}
                />
              ))}
            </div>
          </section>

          {/* Newest Matches Section */}
          <section>
            <SectionHeader
              title="Newest Matches"
              subtitle="Fresh connections waiting for your message"
              icon={Heart}
              count={newestMatches.length}
              variant="glass"
            />
            {/* Grid layout: 2 images (<640px), 3 images (640-779px), 4 images (780-999px), 6 images (1000-1959px), 8 images (≥1960px) */}
            <div className="grid grid-cols-2 min-[640px]:grid-cols-3 min-[780px]:grid-cols-4 min-[1000px]:grid-cols-6 min-[1960px]:grid-cols-8 gap-4">
              {displayedMatches.map((user) => (
                <UserCard
                  key={user.id}
                  {...user}
                  variant="featured"
                  showActions={true}
                />
              ))}
            </div>
          </section>

          {/* Hot Dates Section */}
          <section>
            <SectionHeader
              title="Hot Dates"
              subtitle="Exciting events and group activities near you"
              icon={Calendar}
              count={hotDates.length}
              variant="glass"
            />
            {/* Grid layout: responsive from 1 to 4 columns for full-width display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedEvents.map((event) => (
                <HotDateCard key={event.id} {...event} />
              ))}
            </div>
            
            {/* View More Events Button */}
            <div className="text-center mt-8">
              <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-semibold transition-all hover:scale-105">
                View All Events
              </button>
            </div>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="section-glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">2.5K+</div>
              <div className="text-sm text-muted-foreground font-medium">Members Online Now</div>
            </div>
            <div className="section-glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground font-medium">Events This Month</div>
            </div>
            <div className="section-glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground font-medium">Successful Connections</div>
            </div>
            <div className="section-glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Support Available</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
