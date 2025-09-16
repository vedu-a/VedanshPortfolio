# Overview

This is a full-stack web application built as a personal portfolio website for Vedansh Arya, a Computer Science student at Georgia Tech. The application showcases professional experience, technical skills, featured projects, and provides contact functionality. It's built with a modern tech stack featuring React on the frontend and Express.js on the backend, with PostgreSQL database integration through Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS for utility-first styling with custom design tokens and dark mode support
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database Layer**: Drizzle ORM for type-safe database operations and migrations
- **Storage Interface**: Abstracted storage layer with both in-memory and database implementations
- **Development Tools**: Hot module replacement and error overlay integration for development experience

## Data Storage
- **Database**: PostgreSQL as the primary database with Neon serverless hosting
- **ORM**: Drizzle ORM with Zod schema validation for type-safe database operations
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Fallback Storage**: In-memory storage implementation for development and testing

## Project Structure
- **Monorepo Layout**: Shared TypeScript configuration and schema definitions
- **Client Directory**: Frontend React application with component-based architecture
- **Server Directory**: Backend Express.js API with modular route structure
- **Shared Directory**: Common TypeScript types and database schemas

## Development Features
- **Hot Reload**: Vite-powered development with instant updates
- **Type Safety**: End-to-end TypeScript with shared types between frontend and backend
- **Error Handling**: Runtime error overlay and centralized error handling
- **Code Organization**: Path aliases for clean imports and modular component structure

# External Dependencies

## Core Frameworks
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Express.js**: Web framework with middleware support for API development
- **TypeScript**: Type safety across the entire application stack

## Database & ORM
- **PostgreSQL**: Primary database with Neon serverless hosting via `@neondatabase/serverless`
- **Drizzle ORM**: Type-safe database operations with `drizzle-orm` and `drizzle-kit`
- **Zod**: Schema validation library for database models and form validation

## UI & Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Build tool and development server with plugin ecosystem
- **Replit Plugins**: Development experience enhancements for Replit environment
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

## Utilities & Libraries
- **Wouter**: Lightweight routing library for single-page application navigation
- **date-fns**: Date manipulation and formatting utilities
- **clsx & class-variance-authority**: Dynamic class name generation and variant management
- **nanoid**: Unique ID generation for various application needs