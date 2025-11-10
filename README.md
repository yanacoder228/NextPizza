# 🍕 Next.js Pizza Application

A modern, full-stack pizza delivery application built with **Next.js**, **Zustand**, and **Prisma**. This project serves as a comprehensive learning experience for modern React development, state management, and database integration.

![Project Screenshot](https://res.cloudinary.com/dislqyhio/image/upload/v1761939531/Screenshot_2025-10-31_203815_vbbs0k.png)

## 🎯 Project Goals

This project is a **full-stack pizza delivery application** designed for learning and practicing modern web development. The application demonstrates e-commerce concepts including product catalog management, shopping cart functionality, user authentication, and order processing.

- **🎨 Next.js 15** - React framework with App Router and modern features
- **🐻 Zustand** - Lightweight state management solution
- **🗄️ Prisma** - Modern database toolkit and ORM
- **⚡ TypeScript** - Type-safe development
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 Radix UI** - Accessible component primitives
- **🎭 shadcn/ui** - Beautifully designed component library
- **🔒 Argon2** - Secure password hashing

## 🏗️ Project Architecture

### Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (root)/                   # Route group for main pages
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Home page
│   ├── favicon.ico              # App favicon
│   └── globals.css              # Global styles
├── components/                   # Reusable UI components
│   ├── shared/                  # Shared business components
│   │   ├── categories.tsx       # Pizza categories component
│   │   ├── container.tsx        # Layout container
│   │   ├── filter-checkbox.tsx  # Filter checkbox component
│   │   ├── filters-checkbox-group.tsx # Filter checkbox group
│   │   ├── filters.tsx          # Product filters component
│   │   ├── header.tsx           # Application header
│   │   ├── index.ts             # Shared components barrel export
│   │   ├── product-card.tsx     # Product card component
│   │   ├── product-group-list.tsx # Product group list component
│   │   ├── range-slider.tsx     # Price range slider
│   │   ├── sort-popup.tsx       # Sorting options
│   │   ├── title.tsx            # Section titles
│   │   └── top-bar.tsx          # Top navigation bar
│   └── ui/                      # shadcn/ui components
│       ├── badge.tsx            # Badge component
│       ├── button.tsx           # Button component
│       ├── checkbox.tsx         # Checkbox component
│       ├── dialog.tsx           # Modal dialog
│       ├── index.ts             # UI components barrel export
│       ├── input.tsx            # Input field
│       ├── popover.tsx          # Popover component
│       ├── select.tsx           # Select dropdown
│       └── skeleton.tsx         # Loading skeletons
├── hooks/                       # Custom React hooks
│   └── useIntersection.ts      # Intersection Observer hook
├── lib/                         # Utility functions and configurations
│   └── utils.ts                # Common utilities (cn function)
├── mochdata/                    # Mock data for development
│   ├── categories.ts           # Category mock data
│   └── products.ts             # Product mock data
├── stores/                      # Zustand state management
│   └── categoryStore.ts        # Category state store
└── types/                       # TypeScript type definitions
    ├── ingredient.ts           # Ingredient type definitions
    └── product.ts              # Product type definitions
```

### Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework with App Router | 15.5.4 |
| **React** | UI library | 19.1.0 |
| **TypeScript** | Type safety | ^5 |
| **Tailwind CSS** | Utility-first CSS framework | ^4 |
| **Radix UI** | Accessible component primitives | Latest |
| **shadcn/ui** | Component library & design system | Latest |
| **Zustand** | State management | 5.0.8 |
| **Prisma** | Database ORM and type-safe database client | ^6.18.0 |
| **Neon** | Serverless PostgreSQL database | Cloud |
| **Argon2** | Password hashing | ^0.44.0 |
| **Lucide React** | Icon library | ^0.545.0 |

## 🚀 Getting Started


### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next.js-pizza
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎓 Learning Objectives

### Next.js Features
- **App Router** - Modern file-based routing
- **Server Components** - Optimal performance with server-side rendering
- **Client Components** - Interactive UI with client-side features
- **Middleware** - Request/response handling
- **API Routes** - Backend functionality

### Zustand State Management
- **Store creation** - Centralized state management (`src/stores/categoryStore.ts`)
- **Actions** - State updates and business logic (`setActiveId`)
- **Selectors** - Efficient state selection (used in `Categories` component)
- **TypeScript integration** - Fully typed stores with interfaces
- **DevTools** - Development debugging support

### Custom Hooks
- **useIntersection** - React hook for Intersection Observer API
  - Detects element visibility in viewport
  - Configurable observer options
  - Returns visibility state and ref
  - TypeScript generics for type-safe implementation
  - Reusable pattern for common viewport detection needs

## 🍕 Features

- **🔍 Advanced Filtering** - Filter pizzas by category, price, and ingredients
- **💵 Price Range Slider** - Interactive price selection with Radix UI
- **📱 Responsive Design** - Mobile-first approach
- **🎨 Modern UI** - Clean, accessible interface with shadcn/ui components
- **⚡ Performance** - Optimized loading and rendering with Next.js 15
- **🗂️ Category Management** - Dynamic category selection with Zustand state management
- **🎯 Intersection Observer** - Custom hook for viewport detection
- **📦 Component Organization** - Barrel exports for clean imports
- **🎭 TypeScript** - Full type safety across the application

## 🛠️ Development
