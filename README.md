# 🍕 Next.js Pizza Application

A modern, full-stack pizza delivery application built with **Next.js**, **Zustand**, and **Prisma**. This project serves as a comprehensive learning experience for modern React development, state management, and database integration.

![Project Screenshot](https://res.cloudinary.com/dislqyhio/image/upload/v1760888177/Screenshot_2025-10-19_173108_kh3uxj.png)

## 🎯 Project Goals

This project is designed for **learning and practice** with the following cutting-edge technologies:

- **🎨 Next.js 15** - React framework with App Router and modern features
- **🐻 Zustand** - Lightweight state management solution
- **🗄️ Prisma** - Modern database toolkit and ORM
- **⚡ TypeScript** - Type-safe development
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 Radix UI** - Accessible component primitives
- **🎭 shadcn/ui** - Beautifully designed component library

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
│   │   ├── filters.tsx          # Product filters component
│   │   ├── header.tsx           # Application header
│   │   ├── range-slider.tsx     # Price range slider
│   │   ├── sort-popup.tsx       # Sorting options
│   │   ├── title.tsx            # Section titles
│   │   └── top-bar.tsx          # Top navigation bar
│   └── ui/                      # shadcn/ui components
│       ├── badge.tsx            # Badge component
│       ├── button.tsx           # Button component
│       ├── checkbox.tsx         # Checkbox component
│       ├── dialog.tsx           # Modal dialog
│       ├── input.tsx            # Input field
│       ├── popover.tsx          # Popover component
│       ├── select.tsx           # Select dropdown
│       └── skeleton.tsx         # Loading skeletons
├── lib/                         # Utility functions and configurations
│   └── utils.ts                # Common utilities (cn function)
└── types/                       # TypeScript type definitions
    └── ingredient.ts            # Ingredient type definitions
```

### Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework with App Router | 15.5.4 |
| **React** | UI library | 19.1.0 |
| **TypeScript** | Type safety | ^5 |
| **Tailwind CSS** | Styling | ^4 |
| **Radix UI** | Accessible components | Latest |
| **shadcn/ui** | Component library & design system | Latest |
| **Zustand** | State management | (To be added) |
| **Prisma** | Database ORM | (To be added) |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Database (PostgreSQL, MySQL, SQLite)

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

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Configure your database URL and other environment variables
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎓 Learning Objectives

### Next.js Features
- **App Router** - Modern file-based routing
- **Server Components** - Optimal performance with server-side rendering
- **Client Components** - Interactive UI with client-side features
- **Middleware** - Request/response handling
- **API Routes** - Backend functionality

### Zustand State Management
- **Store creation** - Centralized state management
- **Actions** - State updates and business logic
- **Selectors** - Efficient state selection
- **Persistence** - Local storage integration
- **DevTools** - Development debugging

### Prisma Database
- **Schema definition** - Database modeling
- **Migrations** - Database version control
- **Querying** - Type-safe database operations
- **Relations** - Complex data relationships
- **Seeding** - Development data setup

## 🍕 Features

- **🔍 Advanced Filtering** - Filter pizzas by category, price, and ingredients
- **💵 Price Range Slider** - Interactive price selection
- **📱 Responsive Design** - Mobile-first approach
- **🎨 Modern UI** - Clean, accessible interface
- **⚡ Performance** - Optimized loading and rendering
- **🛒 Shopping Cart** - Add to cart and checkout functionality
- **🔐 User Authentication** - Secure user management

## 🛠️ Development


