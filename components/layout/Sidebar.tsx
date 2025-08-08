"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Search,
  User,
  Heart,
  MessageCircle,
  Star,
  Calendar,
  Users2,
  Globe,
  Plane,
  Settings,
  LogOut,
  ChevronDown,
  Smartphone,
  X,
  Bell,
  TrendingUp,
  Shield,
  Crown,
  Palette,
  Sun,
  Moon,
  Cpu
} from "lucide-react";
import { useSafeTheme, useTheme } from "@/lib/theme-context";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ThemeItem {
  name: string;
  key: 'light' | 'dark' | 'bubble-gum' | 'cyberpunk';
  icon: typeof Sun;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>(['discover']);
  const themeContext = useSafeTheme();
  const { theme } = useTheme();
  
  // Use logo-swing-bg.png for light and bubble-gum themes, swing.png for others
  const logoSrc = (theme === 'light' || theme === 'bubble-gum') 
    ? '/images/logo-swing-bg.png' 
    : '/images/Swing.png';

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleThemeChange = (themeKey: 'light' | 'dark' | 'bubble-gum' | 'cyberpunk') => {
    if (themeContext) {
      themeContext.setTheme(themeKey);
    }
  };

  const themeItems: ThemeItem[] = [
    { name: 'Light Mode', key: 'light', icon: Sun },
    { name: 'Dark Mode', key: 'dark', icon: Moon },
    { name: 'Bubble Gum', key: 'bubble-gum', icon: Palette },
    { name: 'Cyberpunk', key: 'cyberpunk', icon: Cpu },
  ];

  const navigation = [
    {
      section: 'discover',
      title: 'Discover',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: "Who's Online", href: '/whos-on', icon: Users },
        { name: 'Search', href: '/search', icon: Search },
        { name: 'Hot Dates', href: '/hot-dates', icon: TrendingUp },
      ]
    },
    {
      section: 'profile',
      title: 'My Profile',
      items: [
        { name: 'Profile', href: '/profile', icon: User },
        { name: 'Favorites', href: '/favorites', icon: Star },
        { name: 'Who Viewed Me', href: '/viewers', icon: Shield },
        { name: 'Premium', href: '/premium', icon: Crown, badge: 'PRO' },
      ]
    },
    {
      section: 'social',
      title: 'Social',
      items: [
        { name: 'Chat', href: '/chat', icon: MessageCircle, badge: '8' },
        { name: 'Messages', href: '/messages', icon: Bell, badge: '3' },
        { name: 'Matches', href: '/matches', icon: Heart },
      ]
    },
    {
      section: 'community',
      title: 'Community',
      items: [
        { name: 'Events', href: '/events', icon: Calendar },
        { name: 'Partners', href: '/partners', icon: Users2 },
        { name: 'Clubs', href: '/clubs', icon: Globe },
        { name: 'Groups', href: '/groups', icon: Users },
        { name: 'Travel', href: '/travel', icon: Plane },
      ]
    },
    {
      section: 'appearance',
      title: 'Appearance',
      themeItems: themeItems
    },
    {
      section: 'account',
      title: 'Account',
      items: [
        { name: 'Settings', href: '/settings', icon: Settings },
        { name: 'Mobile App', href: '/mobile', icon: Smartphone },
        { name: 'Logout', href: '/logout', icon: LogOut },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="sidebar:hidden fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed sidebar:fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full sidebar:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={logoSrc} alt="Swing" className="h-10 w-auto" />
                <div>
                  <h1 className="text-sm font-normal text-muted-foreground" style={{lineHeight: "1.15em"}}>Alternative Lifestyle Dating Community</h1>
                </div>
              </div>
              <button
                onClick={onClose}
                className="sidebar:hidden p-1 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* User Profile Card */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <img 
                src="/images/simon-avatar.jpg" 
                alt="Simon Lacey" 
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" 
              />
              <div className="flex-1">
                <p className="font-semibold">Simon Lacey</p>
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-yellow-500" />
                  <p className="text-sm text-muted-foreground">Premium Member</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 scrollbar-hide">
            {navigation.map((section) => (
              <div key={section.section} className="mb-2">
                <button
                  onClick={() => toggleSection(section.section)}
                  className="w-full px-4 py-2 flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>{section.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.includes(section.section) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSections.includes(section.section) && (
                  <div className="mt-1">
                    {/* Regular navigation items */}
                    {section.items && section.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-2 mx-2 rounded-lg transition-all ${
                            isActive
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                          <span className="flex-1 text-sm">{item.name}</span>
                          {item.badge && (
                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                              item.badge === 'PRO' 
                                ? 'bg-gradient-to-r from-primary to-primary/60 text-primary-foreground'
                                : 'bg-primary/20 text-primary'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                    
                    {/* Theme items for Appearance section */}
                    {section.themeItems && section.themeItems.map((themeItem) => {
                      const isActive = themeContext?.theme === themeItem.key;
                      return (
                        <button
                          key={themeItem.name}
                          onClick={() => handleThemeChange(themeItem.key)}
                          className={`flex items-center gap-3 px-4 py-2 mx-2 rounded-lg transition-all w-[calc(100%-1rem)] ${
                            isActive
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          <themeItem.icon className="w-4 h-4" />
                          <span className="flex-1 text-sm text-left">{themeItem.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom Stats */}
          <div className="p-4 border-t border-border">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">2.5K</p>
                <p className="text-xs text-muted-foreground">Online Now</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">150+</p>
                <p className="text-xs text-muted-foreground">Events</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
