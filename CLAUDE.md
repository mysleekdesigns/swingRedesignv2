# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
```

### Build & Production
```bash
npm run build        # Build for production
npm run start        # Start production server
```

### Code Quality
```bash
npm run lint         # Run ESLint
npx tsc --noEmit     # Run TypeScript type checking
```

## Architecture

This is a Next.js 15 application using the App Router with the following key characteristics:

- **Framework**: Next.js 15.4.5 with React 19
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: Configured for shadcn/ui components (New York style)
- **Type Safety**: TypeScript with strict mode enabled
- **Font System**: Uses Geist font family with automatic optimization

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page with hero and sections
  - `layout.tsx` - Root layout with providers and fonts
  - `globals.css` - Global styles and Tailwind directives
- `/components` - Reusable components
  - `/ui` - shadcn/ui components (ConventionCard, HotDateCard, UserCard, SectionHeader, etc.)
  - `/layout` - Layout components (Sidebar with navigation)
  - `providers.tsx` - Context providers wrapper for theme
- `/lib` - Utility functions and context
  - `utils.ts` - Includes `cn()` for className merging
  - `theme-context.tsx` - Theme management with useTheme hook
  - `mock-data.ts` - TypeScript-typed sample data (Users, HotDates, Conventions)
- `/public` - Static assets including Swing logo and user images

### Path Aliases
- `@/*` maps to the project root, allowing imports like `@/lib/utils`

### Component System
The project is configured for shadcn/ui with:
- Components location: `@/components`
- UI components: `@/components/ui`
- Layout components: `@/components/layout`
- Utilities: `@/lib/utils` (includes `cn()` for className merging)
- Icon library: Lucide React

### Styling System
- Tailwind CSS v4 with CSS variables for theming
- Dark mode support with `.dark` class variant
- Multiple theme variants: default, bubble-gum, cyberpunk, golden-accent
- Custom glass effects with backdrop blur and premium dark theme
- OKLCH color space for modern color management
- Custom utilities in `app/globals.css` including hover-lift effects and status indicators
- Responsive breakpoints: 780px, 1000px, 1600px, 2100px for adaptive layouts
- Custom scrollbar styling and smooth scroll behavior

## Configuration

### Next.js Config
- Image optimization enabled for `images.unsplash.com` and `plus.unsplash.com`
- Turbopack enabled for faster development builds

### TypeScript Config
- Strict mode enabled
- Path alias `@/*` configured
- Target: ES2017

## Key Dependencies

- **UI Libraries**: Radix UI (dropdown-menu), Lucide React (icons), Class Variance Authority (component variants)
- **Styling**: Tailwind Merge, clsx, tw-animate-css for animations
- **Development**: ESLint with Next.js rules, PostCSS with Tailwind

## Notes

- No test framework is currently configured
- ESLint configured with Next.js recommended rules
- Mock data available in `/lib/mock-data.ts` for development (Users, HotDates, Conventions)
- Theme context manages multiple theme variants with localStorage persistence
- TypeScript interfaces defined for all data models
- Server-side rendering optimized with dynamic viewport

## Workflow

### Task Coordination
- **ALL tasks** (redesigns, features, bug fixes) go through the `project-manager` agent first
- The project manager researches, plans, and delegates to specialized sub-agents
- Sub-agents work in parallel within their specific domains
- Each sub-agent reports completion back to the project manager

### Quality Standards
- **Strict TypeScript**: All code must use proper types and pass type checking
- **Modular Architecture**: Components must be reusable and well-structured
- **Linting Required**: All code must pass `npm run lint` before task completion
- **Type Checking**: All code must pass `npx tsc --noEmit` before task completion
- **Minimal Files**: Create only necessary files and folders for the task

### Research Tools
- **Context7**: For internal documentation and codebase understanding
- **Firecrawl**: For web scraping, competitor analysis, and design inspiration
- **Playwright**: For interactive testing and screenshots (when available)

### Sub-Agent Specializations
- `project-manager`: Primary coordinator for all tasks - MUST be used as entry point
- `ui-ux-designer`: Design decisions, user flows, visual modernization
- `frontend-developer`: React/Next.js implementation, TypeScript code
- `marketing-expert`: Conversion optimization, SEO, messaging
- `content-strategist`: Information architecture, copywriting
- `accessibility-specialist`: WCAG compliance, inclusive design
- `performance-analyst`: Core Web Vitals, speed optimization

### Development Process
1. User request → Project Manager
2. Project Manager researches and creates task plan
3. Project Manager delegates to appropriate sub-agents
4. Sub-agents work in parallel, staying within expertise
5. Each sub-agent runs quality checks before completion
6. Project Manager verifies all work passes linting/type checking
7. Task marked complete only after all checks pass

## Claude Coding Restrictions

- I never want Claude doing any coding. I always want the project manager and the appropriate sub agents working on every task I ask, any bug to fix, any new feature to add. Claude stop trying to code yourself.

## Best Practices

- Always kill Next.js servers after completing a task (`pkill -f "next dev"` or Ctrl+C)
- Use responsive content display - check breakpoints for mobile/tablet/desktop
- Maintain theme consistency across components
- Leverage existing UI components before creating new ones
- Follow TypeScript strict mode requirements
- Use Playwright MCP for visual testing to verify all updates were successfully completed

## Important Files

- `components.json` - shadcn/ui configuration (New York style, Lucide icons)
- Multiple backup files exist (*.backup) - do not modify these unless specifically requested
- always check and remove EOF < /dev/null if its at the end of a file and its not supposed to be there
- always kill all nextjs servers when your task is complete