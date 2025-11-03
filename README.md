# Health App

A modern health and wellness tracking application built with React, TypeScript, and Vite. This application helps users track their body records, exercise activities, diet, and personal diary entries.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Data Architecture](#data-architecture)
- [Styling](#styling)
- [Components](#components)
- [Pages](#pages)
- [Development Guidelines](#development-guidelines)

## ✨ Features

- **Body Record Tracking**: Visualize body weight and body fat percentage over time with interactive charts
- **Exercise Logging**: Track daily exercise activities with calories burned and duration
- **Meal Tracking**: Record and view meals (Morning, Lunch, Dinner, Snack) with photos
- **Personal Diary**: Keep daily diary entries
- **Column Articles**: Browse health, diet, and beauty articles
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile
- **Smooth Scrolling**: Scroll-to-top button and smooth navigation
- **Interactive Charts**: Time period selection (日/週/月/年) for body record visualization

## 🛠 Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript 5.6.2
- **Build Tool**: Vite 5.4.10
- **Routing**: React Router DOM 7.9.5
- **Charts**: Recharts 3.3.0
- **Styling**: Tailwind CSS 3.4.18
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
health-app/
├── public/                      # Static assets
│   └── vite.svg
├── src/
│   ├── assets/                  # Images, icons, and SVG files
│   │   ├── icons/              # Icon components
│   │   │   ├── challenge.tsx
│   │   │   ├── chevronUp.tsx
│   │   │   ├── close.tsx
│   │   │   ├── cup.tsx
│   │   │   ├── info.tsx
│   │   │   ├── knife.tsx
│   │   │   ├── memo.tsx
│   │   │   ├── menu.tsx
│   │   │   └── index.ts
│   │   ├── photo/              # Images for meals, columns, etc.
│   │   ├── hex-polygon.svg
│   │   └── logo.svg
│   ├── components/              # Reusable UI components
│   │   ├── BodyRecordChart.tsx # Chart component using Recharts
│   │   ├── Button.tsx          # Custom button component
│   │   ├── Container.tsx       # Layout container
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── GridLayout.tsx      # Responsive grid layout
│   │   ├── Header.tsx          # Header with navigation
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── LoadingMoreSection.tsx # Load more button
│   │   ├── Menu.tsx            # Dropdown menu with portal
│   │   └── ScrollToTop.tsx     # Scroll to top button
│   ├── data/                    # Mock data and data layer
│   │   ├── bodyRecordData.ts   # Body record mock data
│   │   ├── columnPageData.ts   # Column page mock data
│   │   ├── mainPageData.ts     # Main page mock data
│   │   └── myRecordPageData.ts # My record page mock data
│   ├── pages/                   # Page components
│   │   ├── my-record/          # My Record page components
│   │   │   ├── BodyRecord.tsx  # Body record section
│   │   │   ├── MyDiary.tsx     # Diary section
│   │   │   ├── MyExercise.tsx  # Exercise section
│   │   │   └── index.tsx       # My Record page
│   │   ├── MainPage.tsx        # Home page
│   │   └── MyColumnPage.tsx    # Column articles page
│   ├── App.css                  # Global styles
│   ├── App.tsx                  # Main App component
│   ├── index.css               # Tailwind imports & custom scrollbar
│   ├── main.tsx                # Application entry point
│   └── vite-env.d.ts           # Vite type definitions
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd health-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📜 Available Scripts

### `npm run dev`
Starts the development server with hot module replacement (HMR).
- Default URL: `http://localhost:5173`

### `npm run build`
Builds the application for production.
- Runs TypeScript compiler (`tsc -b`)
- Creates optimized production build in `dist/` folder

### `npm run preview`
Preview the production build locally.
- Serves the built application from `dist/` folder

### `npm run lint`
Runs ESLint to check code quality and style.

## 🗂 Data Architecture

The application uses a **separated data layer** to maintain clean architecture and enable easy testing. All mock data is stored in the `src/data/` directory.

### Data Files

#### `mainPageData.ts`
- **Exports**: `MEAL_CATEGORIES`, `FOOD_RECORDS`
- **Types**: `MealCategory`, `FoodRecord`
- **API Functions**: `getMealCategories()`, `getFoodRecords()`, `getFoodRecordsByDate()`, `getFoodRecordsByMealType()`

#### `bodyRecordData.ts`
- **Exports**: `BODY_RECORD_DATA`, `TimePeriod`
- **Types**: `BodyRecordDataPoint`, `TimePeriod`
- **API Functions**: `getBodyRecordData()`, `generateBodyRecordDataByPeriod()`

#### `columnPageData.ts`
- **Exports**: `RECOMMENDED_CATEGORIES`, `COLUMN_ARTICLES`
- **Types**: `RecommendedCategory`, `ColumnArticle`
- **API Functions**: `getRecommendedCategories()`, `getColumnArticles()`, `getArticlesByCategory()`, `getArticlesByDate()`, `getArticlesByTag()`

#### `myRecordPageData.ts`
- **Exports**: `NAVIGATION_BLOCKS`, `EXERCISE_DATA`, `DIARY_DATA`
- **Types**: `NavigationBlock`, `ExerciseRecord`, `DiaryEntry`
- **API Functions**: `getNavigationBlocks()`, `getExerciseData()`, `getDiaryData()`, `getTotalCalories()`, `getTotalExerciseTime()`

### Benefits of Data Separation

1. **Testability**: Data can be tested independently from UI components
2. **Maintainability**: Single source of truth for all data
3. **Reusability**: Data can be shared across multiple components
4. **Type Safety**: TypeScript interfaces ensure data consistency
5. **Easy Migration**: Simple to replace mock data with real API calls

### Example Usage

```typescript
// Import data
import { FOOD_RECORDS, getFoodRecordsByMealType } from "@/data/mainPageData";

// Use directly
const allRecords = FOOD_RECORDS;

// Use filter functions
const lunchRecords = getFoodRecordsByMealType("Lunch");

// Use async API (simulates real API)
const records = await getFoodRecords();
```

## 🎨 Styling

### Tailwind CSS Configuration

The application uses **Tailwind CSS** exclusively for styling. Custom theme configuration is defined in `tailwind.config.js`.

#### Custom Colors

```javascript
colors: {
  primary: {
    300: "#FFCC21",  // Yellow
    400: "#FF963C",  // Orange
    500: "#EA6C00",  // Dark Orange
  },
  secondary: {
    300: "#8FE9D0",  // Cyan
  },
  dark: {
    500: "#414141",  // Dark Gray
    600: "#2E2E2E",  // Darker Gray
  },
  gray: {
    400: "#777777",  // Gray
  },
  orange: "#FF963C",
}
```

#### Custom Gradients

- `gradient-primary`: Linear gradient from yellow to orange (155.89deg)
- `gradient-button`: Linear gradient for buttons (32.95deg)
- `gradient-food`: Semi-transparent gradient for food section

#### Custom Utilities

- **Heights**: `header` (64px), `footer` (128px)
- **Font Sizes**: 11px, 15px, 25px, 2xl-2 (22px)
- **Line Heights**: 15, 16
- **Spacing**: 56px, 64px
- **Gap**: 4.5 (18px)
- **Border Width**: 24px
- **Max Height**: 192px

#### Custom Scrollbar

Custom scrollbar styling is defined in `src/index.css`:

```css
.exercise-scroll::-webkit-scrollbar {
  width: 6px;
}
.exercise-scroll::-webkit-scrollbar-track {
  background: rgba(119, 119, 119, 1);
  border-radius: 8px;
}
.exercise-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(255, 204, 33, 1);
  border-radius: 8px;
}
```

### Font

The application uses **Inter** font family from Google Fonts with weights from 100 to 900.

## 🧩 Components

### Core Components

#### `Layout.tsx`
Main layout wrapper with Header, Footer, and Outlet for page content.

#### `Header.tsx`
- Logo and navigation menu
- Responsive design with dropdown menu on mobile
- Active state highlighting for current route
- Menu items: 自分の記録, チャレンジ, お知らせ

#### `Footer.tsx`
Footer with 6 navigation links in 2 columns.

#### `Menu.tsx`
Advanced dropdown menu component with:
- Portal rendering (renders outside DOM hierarchy)
- Click-outside detection
- Scroll freeze when open
- Keyboard support (Escape key)
- Smart positioning based on anchor element

#### `ScrollToTop.tsx`
Scroll-to-top button that:
- Appears after scrolling 300px from top
- Smooth scroll animation
- Fixed position at bottom-right
- White background with gray border

#### `BodyRecordChart.tsx`
Interactive chart component using Recharts:
- Displays body weight and body fat percentage
- Custom axis tick with "月" suffix
- Two line graphs (yellow and cyan)
- Responsive container
- Vertical grid lines only

#### `Button.tsx`
Reusable button component with variants:
- `gradient`: Gradient background
- `primary`: Primary color background

#### `Container.tsx`
Centered container with max-width of 960px.

#### `GridLayout.tsx`
Responsive grid layout (4 columns on desktop, 2 on tablet, 1 on mobile).

#### `LoadingMoreSection.tsx`
"Load more" button section with gradient background.

## 📄 Pages

### MainPage (`/`)
Home page featuring:
- Food image with gradient overlay
- Body record chart
- 4 meal category hexagons (Morning, Lunch, Dinner, Snack)
- Food records grid (8 items)
- Load more button

### MyRecordPage (`/my-record`)
Personal record page with:
- 3 navigation blocks (Body Record, My Exercise, My Diary)
- Body record section with chart and time period buttons
- Exercise section with scrollable list
- Diary section with grid layout
- Smooth scroll navigation between sections

### MyColumnPage (`/my-column`)
Column articles page with:
- 4 recommended categories
- Article grid (8 articles)
- Article cards with image, date, time, text, and tags
- Load more button

## 🔧 Development Guidelines

### Path Aliases

The project uses `@` as an alias for the `src/` directory:

```typescript
import Container from "@/components/Container";
import { FOOD_RECORDS } from "@/data/mainPageData";
```

### TypeScript

- All components use TypeScript
- Interfaces are defined for all data structures
- Strict type checking enabled

### Component Structure

```typescript
// 1. Imports
import { useState } from "react";
import Component from "@/components/Component";
import { DATA } from "@/data/dataFile";

// 2. Types/Interfaces
interface Props {
  className?: string;
}

// 3. Component
const MyComponent = (props: Props) => {
  const { className = "" } = props;

  // State and hooks
  const [state, setState] = useState();

  // Render
  return (
    <div className={className}>
      {/* JSX */}
    </div>
  );
};

// 4. Export
export default MyComponent;
```

### Styling Guidelines

1. **Use Tailwind CSS exclusively** - No custom CSS files except for special cases
2. **Use custom theme values** - Leverage the custom colors, spacing, and utilities
3. **Responsive design** - Use Tailwind breakpoints (`sm:`, `md:`, `lg:`)
4. **Consistent spacing** - Use Tailwind spacing scale
5. **Semantic class names** - Group related classes together

### Data Guidelines

1. **Separate data from UI** - Keep all data in `src/data/` directory
2. **Define TypeScript interfaces** - Ensure type safety
3. **Provide async functions** - Simulate API calls for easy migration
4. **Include utility functions** - Add filter and helper functions

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Hosting

The `dist/` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📝 License

This project is private and not licensed for public use.

## 🤝 Contributing

This is a private project. Please contact the project owner for contribution guidelines.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
