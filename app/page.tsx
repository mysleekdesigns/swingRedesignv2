"use client";

import { useState } from "react";
import { useTheme } from "@/lib/theme-context";

import Image from "next/image";
import { Sidebar } from "@/components/layout/Sidebar";
import { UserCard } from "@/components/ui/UserCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HotDateCard } from "@/components/ui/HotDateCard";
import { ConventionCard } from "@/components/ui/ConventionCard";
import { 
  whoIsOnUsers, 
  whoViewedMeUsers,
  newestMatches,
  randomMatches,
  hotDates,
  conventions,
} from "@/lib/mock-data";
import { 
  Heart, 
  Sparkles, 
  Zap,
  Eye,
  UserPlus,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Menu,
  X,
  Bell,
  MessageCircle,
  Search,
} from "lucide-react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('who-viewed');
  const { theme } = useTheme();
  
  // Use logo-swing-bg.png for light and bubble-gum themes, swing.png for others
  const logoSrc = (theme === 'light' || theme === 'bubble-gum') 
    ? '/images/logo-swing-bg.png' 
    : '/images/Swing.png';

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="sidebar:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center justify-center">
            <Image src={logoSrc} alt="Swing" width={120} height={40} className="h-8 sm:h-10 w-auto" priority />
          
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Main Content */}
        <main className="flex-1 sidebar:ml-64 pt-16 sidebar:pt-0">
          {/* Desktop Header */}
          <div className="hidden sidebar:block sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">2,547 Online</span>
                  </div>                </div>
                
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search members..."
                      className="pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
                    />
                  </div>
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  </button>
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="px-4 sidebar:px-6 py-6">
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              <div className="bg-card rounded-xl p-3 md:p-4 border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div className="text-lg md:text-2xl font-bold">147</div>
                <div className="text-xs md:text-sm text-muted-foreground">Profile Views</div>
              </div>
              
              <div className="bg-card rounded-xl p-3 md:p-4 border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div className="text-lg md:text-2xl font-bold">32</div>
                <div className="text-xs md:text-sm text-muted-foreground">New Matches</div>
              </div>
              
              <div className="bg-card rounded-xl p-3 md:p-4 border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="text-lg md:text-2xl font-bold">8</div>
                <div className="text-xs md:text-sm text-muted-foreground">Messages</div>
              </div>
              
              <div className="bg-card rounded-xl p-3 md:p-4 border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div className="text-lg md:text-2xl font-bold">94%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Compatibility</div>
              </div>
            </div>
          </div>

          {/* Section Tabs */}
          <div className="px-4 sidebar:px-6 mb-6">
            <div className="flex gap-1 md:gap-2 pb-2">
              {[
                { id: 'who-viewed', label: 'Who Viewed Me', icon: Eye, count: whoViewedMeUsers.length },
                { id: 'newest', label: 'Newest Matches', icon: UserPlus, count: newestMatches.length },
                { id: 'whos-on', label: "Who's Online", icon: Sparkles, count: whoIsOnUsers.length },
                { id: 'random', label: 'Random Matches', icon: Zap, count: randomMatches.length },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 lg:px-4 py-2 rounded-lg font-medium transition-all text-xs md:text-sm whitespace-nowrap flex-1 md:flex-initial justify-center md:justify-start min-w-0 ${
                    activeSection === tab.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card hover:bg-muted border border-border'
                  }`}
                >
                  <tab.icon className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <span className="hidden sm:inline truncate">{tab.label}</span><span className="sm:hidden text-xs font-medium">{tab.label.split(" ")[0]}</span>
                  <span className="text-xs bg-background/20 px-1 md:px-1.5 py-0.5 rounded-full flex-shrink-0">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Grid */}
          <div className="px-4 sidebar:px-6 pb-8">
            {activeSection === 'who-viewed' && (
              <>
                <SectionHeader
                  title="Who Viewed Your Profile"
                  subtitle="Members who recently checked you out"
                  icon={Eye}
                  variant="glass"
                />
                {/* Mobile/Tablet: Grid with wrapping */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sidebar:hidden">
                  {whoViewedMeUsers.map((user) => (
                    <UserCard
                      key={user.id}
                      {...user}
                      variant="default"
                      showActions={true}
                    />
                  ))}
                </div>
                {/* Desktop+: Single row with horizontal scroll */}
                <div className="hidden sidebar:flex sidebar:gap-4 sidebar:overflow-x-auto sidebar:pb-4 scrollbar-hide">
                  {whoViewedMeUsers.slice(0, 12).map((user) => (
                    <div key={user.id} className="flex-shrink-0 w-[calc((100%-48px)/4)] 2xl:w-[calc((100%-80px)/6)] 3xl:w-[calc((100%-112px)/8)]">
                      <UserCard
                        {...user}
                        variant="default"
                        showActions={true}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeSection === 'newest' && (
              <>
                <SectionHeader
                  title="Newest Matches"
                  subtitle="Fresh connections waiting for you"
                  icon={UserPlus}
                  variant="glass"
                />
                {/* Mobile/Tablet: Grid with wrapping */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sidebar:hidden">
                  {newestMatches.map((user) => (
                    <UserCard
                      key={user.id}
                      {...user}
                      variant="default"
                      showActions={true}
                    />
                  ))}
                </div>
                {/* Desktop+: Single row with horizontal scroll */}
                <div className="hidden sidebar:flex sidebar:gap-4 sidebar:overflow-x-auto sidebar:pb-4 scrollbar-hide">
                  {newestMatches.slice(0, 12).map((user) => (
                    <div key={user.id} className="flex-shrink-0 w-[calc((100%-48px)/4)] 2xl:w-[calc((100%-80px)/6)] 3xl:w-[calc((100%-112px)/8)]">
                      <UserCard
                        {...user}
                        variant="default"
                        showActions={true}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeSection === 'whos-on' && (
              <>
                <SectionHeader
                  title="Who's Online Now"
                  subtitle="Active members ready to connect"
                  icon={Sparkles}
                  variant="glass"
                />
                {/* Mobile/Tablet: Grid with wrapping */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sidebar:hidden">
                  {whoIsOnUsers.map((user) => (
                    <UserCard
                      key={user.id}
                      {...user}
                      variant="default"
                      showActions={true}
                    />
                  ))}
                </div>
                {/* Desktop+: Single row with horizontal scroll */}
                <div className="hidden sidebar:flex sidebar:gap-4 sidebar:overflow-x-auto sidebar:pb-4 scrollbar-hide">
                  {whoIsOnUsers.slice(0, 12).map((user) => (
                    <div key={user.id} className="flex-shrink-0 w-[calc((100%-48px)/4)] 2xl:w-[calc((100%-80px)/6)] 3xl:w-[calc((100%-112px)/8)]">
                      <UserCard
                        {...user}
                        variant="default"
                        showActions={true}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeSection === 'random' && (
              <>
                <SectionHeader
                  title="Random Matches"
                  subtitle="Discover someone new"
                  icon={Zap}
                  variant="glass"
                />
                {/* Mobile/Tablet: Grid with wrapping */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sidebar:hidden">
                  {randomMatches.map((user) => (
                    <UserCard
                      key={user.id}
                      {...user}
                      variant="default"
                      showActions={true}
                    />
                  ))}
                </div>
                {/* Desktop+: Single row with horizontal scroll */}
                <div className="hidden sidebar:flex sidebar:gap-4 sidebar:overflow-x-auto sidebar:pb-4 scrollbar-hide">
                  {randomMatches.slice(0, 12).map((user) => (
                    <div key={user.id} className="flex-shrink-0 w-[calc((100%-48px)/4)] 2xl:w-[calc((100%-80px)/6)] 3xl:w-[calc((100%-112px)/8)]">
                      <UserCard
                        {...user}
                        variant="default"
                        showActions={true}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          {/* Hot Dates Section */}
          <div className="px-4 sidebar:px-6 pb-8">
            <SectionHeader
              title="Hot Dates"
              subtitle="Upcoming events and meetups"
              icon={Calendar}
              variant="glass"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-1800-4 gap-4">
              {hotDates.slice(0, 4).map((date) => (
                <HotDateCard
                  key={date.id}
                  {...date}
                  variant="default"
                />
              ))}
            </div>
          </div>

          {/* Conventions Section */}
          <div className="px-4 sidebar:px-6 pb-20">
            <SectionHeader
              title="Upcoming Conventions"
              subtitle="Major events across the country"
              icon={MapPin}
              variant="glass"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-1800-4 gap-4">
              {conventions.slice(0, 4).map((convention) => (
                <ConventionCard
                  key={convention.id}
                  {...convention}
                  variant="default"
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="sidebar:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border z-50">
        <div className="grid grid-cols-5 py-2">
          {[
            { icon: Heart, label: 'Discover' },
            { icon: Users, label: 'Matches' },
            { icon: MessageCircle, label: 'Chat' },
            { icon: Calendar, label: 'Events' },
            { icon: Eye, label: 'Profile' },
          ].map((item, index) => (
            <button
              key={index}
              className="flex flex-col items-center gap-1 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}