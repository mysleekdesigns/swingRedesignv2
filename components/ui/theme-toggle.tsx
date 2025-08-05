'use client'

import { Moon, Sun } from 'lucide-react'
import { useSafeTheme } from '@/lib/theme-context'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface ThemeToggleProps {
  className?: string
  variant?: 'button' | 'sidebar'
}

export function ThemeToggle({ className, variant = 'button' }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const [fallbackTheme, setFallbackTheme] = useState<'light' | 'dark'>('light')

  // Always call the safe hook - returns null if context unavailable
  const themeContext = useSafeTheme()
  const hasContextError = !themeContext

  // Track mounting state for hydration safety
  useEffect(() => {
    setMounted(true)
  }, [])

  // Initialize fallback theme from localStorage/system when needed
  useEffect(() => {
    if (!mounted || (!hasContextError && themeContext)) return

    // Only initialize fallback if context is not available
    try {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      const initialTheme = savedTheme || systemTheme
      
      setFallbackTheme(initialTheme)
      document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    } catch {
      // Even localStorage might fail in some environments
      setFallbackTheme('light')
    }
  }, [mounted, hasContextError, themeContext])

  const handleToggle = () => {
    if (!mounted) return

    if (themeContext && !hasContextError) {
      // Use context toggle function when available
      try {
        themeContext.toggleTheme()
      } catch {
        // If context toggle fails, fall back to manual toggle
        handleFallbackToggle()
      }
    } else {
      // Use fallback toggle when context is unavailable
      handleFallbackToggle()
    }
  }

  const handleFallbackToggle = () => {
    const newTheme = fallbackTheme === 'light' ? 'dark' : 'light'
    setFallbackTheme(newTheme)
    
    // Apply theme changes directly
    try {
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
      localStorage.setItem('theme', newTheme)
    } catch {
      // Silently fail if DOM operations are not available
    }
  }

  // Determine current theme - prefer context over fallback
  const currentTheme = (themeContext && !hasContextError) ? themeContext.theme : fallbackTheme

  // Show loading state during hydration to prevent layout shift
  if (!mounted) {
    if (variant === 'sidebar') {
      return (
        <button
          disabled
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg",
            "text-sidebar-foreground opacity-50 cursor-not-allowed",
            className
          )}
          aria-label="Loading theme toggle"
        >
          <div className="w-5 h-5 animate-pulse bg-current opacity-20 rounded" />
          <span className="font-medium">Loading...</span>
        </button>
      )
    }
    return (
      <button
        disabled
        className={cn(
          "relative w-full h-14 px-6 flex items-center gap-3",
          "bg-gradient-to-r from-sidebar-accent/60 to-sidebar-accent/80",
          "dark:from-sidebar-accent/40 dark:to-sidebar-accent/60",
          "backdrop-blur-md border border-sidebar-border/40",
          "dark:border-sidebar-border/30",
          "rounded-xl opacity-50 cursor-not-allowed",
          "text-sidebar-foreground/50",
          className
        )}
        aria-label="Loading theme toggle"
      >
        <div className="relative w-5 h-5">
          <div className="absolute inset-0 h-5 w-5 animate-pulse bg-current opacity-20 rounded" />
        </div>
        <span className="font-medium text-sm tracking-wide">
          Loading...
        </span>
      </button>
    )
  }

  if (variant === 'sidebar') {
    return (
      <button
        onClick={handleToggle}
        className={cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-lg",
          "text-sidebar-foreground transition-all",
          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          "focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2",
          "focus:ring-offset-sidebar-background",
          "w-full",
          className
        )}
        aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
      >
        <div className="relative w-5 h-5 flex-shrink-0">
          <Sun 
            className={cn(
              "absolute inset-0 h-5 w-5 transition-all duration-300",
              currentTheme === 'light' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
            )} 
          />
          <Moon 
            className={cn(
              "absolute inset-0 h-5 w-5 transition-all duration-300",
              currentTheme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
            )} 
          />
        </div>
        <span className="font-medium">
          {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
        </span>
      </button>
    )
  }

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "relative w-full h-14 px-6 flex items-center gap-3",
        "bg-gradient-to-r from-sidebar-accent/80 to-sidebar-accent/90",
        "dark:from-sidebar-accent/60 dark:to-sidebar-accent/80",
        "hover:from-sidebar-accent/90 hover:to-sidebar-accent/100",
        "dark:hover:from-sidebar-accent/70 dark:hover:to-sidebar-accent/90",
        "backdrop-blur-md border border-sidebar-border/60",
        "dark:border-sidebar-border/40",
        "hover:border-sidebar-border/80 dark:hover:border-sidebar-border/60",
        "transition-all duration-300 rounded-xl",
        "text-sidebar-foreground/90 hover:text-sidebar-foreground",
        "focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2",
        "focus:ring-offset-sidebar-background",
        "group shadow-lg shadow-sidebar-accent/10",
        "hover:shadow-xl hover:shadow-sidebar-accent/20",
        "dark:shadow-sidebar-accent/5 dark:hover:shadow-sidebar-accent/15",
        className
      )}
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={cn(
            "absolute inset-0 h-5 w-5 transition-all duration-300",
            "group-hover:scale-110",
            currentTheme === 'light' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
          )} 
        />
        <Moon 
          className={cn(
            "absolute inset-0 h-5 w-5 transition-all duration-300",
            "group-hover:scale-110",
            currentTheme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
          )} 
        />
      </div>
      <span className="font-medium text-sm tracking-wide">
        {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
      </span>
      <div 
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100",
          "bg-gradient-to-r from-sidebar-accent/10 to-sidebar-accent/5",
          "dark:from-sidebar-accent/15 dark:to-sidebar-accent/8",
          "transition-opacity duration-300 pointer-events-none"
        )}
      />
    </button>
  )
}