"use client";

import { Header } from "@/components/layout/Header";
import { UserCard } from "@/components/ui/UserCard";
import { 
  whoIsOnUsers, 
  whoViewedMeUsers, 
} from "@/lib/mock-data";
import { 
  Heart, 
  Sparkles, 
  Zap,
  Flame,
  Play
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Compact Hero Section */}
        <section className="relative py-12 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">2.5K+ Online</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Connect. Explore. Experience.
                  </span>
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 max-w-xl">
                  The most sophisticated community for adventurous couples and singles
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                    <span className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Start Discovering
                    </span>
                  </button>
                  
                  <button className="px-6 py-3 border border-border hover:bg-muted text-foreground rounded-xl font-semibold transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Learn More
                    </span>
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="space-y-4">
                  <div className="bg-card rounded-2xl p-4 border border-border">
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-sm text-muted-foreground">Events Monthly</div>
                  </div>
                  <div className="bg-card rounded-2xl p-4 border border-border">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-4 border border-border self-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
              </div>
            </div>
          </div>
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

      </main>
    </div>
  );
}