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
- `/lib` - Utility functions (includes `cn()` for className merging)
- `/public` - Static assets

### Path Aliases
- `@/*` maps to the project root, allowing imports like `@/lib/utils`

### Component System
The project is configured for shadcn/ui with:
- Components location: `@/components`
- UI components: `@/components/ui`
- Utilities: `@/lib/utils`
- Icon library: Lucide React

## Notes

- No test framework is currently configured
- Uses Turbopack for faster development builds
- Tailwind CSS is configured with CSS variables for theming