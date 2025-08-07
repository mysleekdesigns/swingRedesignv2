"use client";

import { useState } from "react";
import Image from "next/image";
import { Sidebar } from "@/components/layout/Sidebar";
import { UserCard } from "@/components/ui/UserCard";
import { HotDateCard } from "@/components/ui/HotDateCard";
import { 
  whoIsOnUsers, 
  whoViewedMeUsers, 
  newestMatches, 
  hotDates,
  featuredConvention,
} from "@/lib/mock-data";
import { 
  Users, 
  Heart, 
  Sparkles, 
  MapPin, 
  Calendar,
  Search,
  Filter,
  Bell,
  Zap,
  Flame,
  Play
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState('discover');

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="2xl:ml-64">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]" />
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 animate-pulse">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">2.5K+ Members Online Now</span>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Connect.
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                  Explore.
                </span>
                <br />
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Experience.
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The most sophisticated community for adventurous couples and open-minded singles
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                  <span className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Start Discovering
                  </span>
                </button>
                
                <button className="px-8 py-4 border-2 border-primary/20 hover:border-primary/40 text-foreground hover:bg-primary/5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch How It Works
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-700" />
        </section>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Featured Members
                </h2>
                <p className="text-muted-foreground">Highly active and verified members</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whoIsOnUsers.slice(0, 6).map((user) => (
                <UserCard
                  key={user.id}
                  {...user}
                  variant="featured"
                  showActions={true}
                />
              ))}
            </div>
          </section>

          <section className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Flame className="w-6 h-6 text-primary" />
                  Recently Active
                </h2>
                <p className="text-muted-foreground">Members who were online in the last hour</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {whoViewedMeUsers.map((user) => (
                <UserCard
                  key={user.id}
                  {...user}
                  variant="compact"
                  showActions={true}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Fixed Stats */}
        <div className="fixed bottom-0 left-0 right-0 2xl:left-64 bg-background/95 backdrop-blur-lg border-t border-border/50 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">2.5K+</div>
                <div className="text-xs text-muted-foreground">Online Now</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-xs text-muted-foreground">Events</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}