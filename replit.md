# Personal Portfolio Website

## Overview

A modern full-stack personal portfolio website built with React, Node.js, Express, and PostgreSQL. The application features a clean, minimalist design with dark/light mode support, showcasing projects, skills, experience, and providing a contact form. The design follows modern portfolio aesthetics inspired by Linear and Notion, emphasizing clean typography, purposeful whitespace, and professional presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system and shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives wrapped in custom components for accessibility and consistency
- **Theming**: Custom CSS variables supporting light/dark mode with persistent theme storage

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **API Design**: RESTful API structure with typed endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for runtime type validation on both client and server
- **Error Handling**: Centralized error handling with structured error responses
- **Development**: Hot reload with Vite integration for seamless development experience

### Data Storage Architecture
- **ORM**: Drizzle ORM providing type-safe database queries and migrations
- **Schema**: Strongly typed database schemas with automatic TypeScript inference
- **Storage Pattern**: Repository pattern with abstracted storage interface supporting both in-memory (development) and PostgreSQL (production) implementations
- **Migrations**: Automated database migrations managed through Drizzle Kit

### Component Design System
- **Design Language**: Custom design system based on modern portfolio aesthetics
- **Typography**: Inter font family with structured hierarchy (h1-h6, body, small)
- **Color System**: Semantic color tokens supporting both light and dark themes
- **Spacing**: Consistent spacing scale using Tailwind's spacing units
- **Component Library**: Modular, reusable components following atomic design principles
- **Responsive Design**: Mobile-first responsive design with breakpoint-based layouts

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting (@neondatabase/serverless)
- **Connection Management**: PostgreSQL connection pooling for production scalability

### UI and Component Libraries
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind
- **Lucide React**: Modern icon library with consistent design language

### Development and Build Tools
- **Vite**: Fast build tool and development server with HMR support
- **TypeScript**: Static typing for enhanced developer experience and code reliability
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for validation libraries
- **Zod**: Runtime type validation and schema definition

### Fonts and Assets
- **Google Fonts**: Inter, DM Sans, Fira Code, and other professional fonts
- **Custom Assets**: Professional headshot and project imagery stored in attached_assets directory

### Development Experience
- **React Query Devtools**: Development tools for debugging server state
- **Replit Integration**: Native Replit development environment support with custom plugins