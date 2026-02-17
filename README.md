# TrueCuisine 🍽️

A stylish, responsive restaurant website crafted with React and Tailwind CSS, designed to showcase authentic American cuisine, fresh ingredients, and a warm dining experience. This project blends modern web technologies with beautiful animations to provide an inviting digital storefront for a boutique restaurant.

## Table of Contents

- [Overview](#overview)
  - [Preview](#preview)
  - [Live Demo](#live-demo)
  - [Features](#features)
- [Built with](#built-with)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Contact](#contact)

---

## Overview

**TrueCuisine** is a beautifully crafted React-based website designed to showcase an American restaurant, its menu, atmosphere, and culinary philosophy. Built with React and styled using Tailwind CSS, TrueCuisine delivers a modern, responsive, and interactive single-page experience, bringing authentic cuisine and warm hospitality to the digital world.

Visitors can explore a categorized menu with mouth-watering dishes, discover what makes the restaurant special through featured sections, browse a stunning gallery of dishes and dining atmosphere, and easily find contact information and operating hours. Engaging animations and vibrant design elements make TrueCuisine both elegant and user-friendly.

### Preview

![TrueCuisine Mockup](src/assets/thumbnail.png)

### Live Demo

Live Site URL: [View TrueCuisine](https://ilham-bouk.github.io/TrueCuisine/)

### Features

- Smooth, engaging scroll-based animations and interactive hover effects.
- Visually appealing and accessible menu showcasing dishes with imagery and descriptions.
- Filterable menu categories (Popular, Breakfast, Soups, ...).
- Why Choose Us section highlighting key restaurant features.
- Beautiful mosaic gallery layout showcasing restaurant atmosphere and culinary creations.
- Fully responsive layout (mobile, tablet, desktop) built with Tailwind CSS and React.
- Modern, sticky navigation with smooth scroll behavior and mobile menu toggle.
- Newsletter signup section for customer engagement.
- Contact section and operating hours for visitors.

---

## Built with

### Technologies and Libraries Used

- **React** (v19): UI framework for dynamic interfaces
- **Vite**: Lightning fast development environment and build tooling
- **Tailwind CSS** (v4): Utility-first CSS framework for design
- **Lucide React**: Icon library for consistent, crisp icons
- **gh-pages**: Deployment utility for publishing to GitHub Pages
- **ESLint**: Code linting and quality enforcement

---

## Project Structure

```
TrueCuisine/
├── public/                # Static public assets
├── src/
│   ├── assets/           # Images for menu items, hero, gallery, and background
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── Features.jsx
│   │   ├── Gallery.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Main app layout
│   ├── main.jsx          # App entry point
│   └── index.css         # Tailwind import and global styles
├── index.html            # App HTML shell
├── package.json          # Project dependencies & scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # Lint configuration
└── README.md             # 📖 This file
```

---

## Installation

To get started, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ilham-bouk/TrueCuisine.git
   cd TrueCuisine
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start development server:**
   ```sh
   npm run dev
   ```
   Visit `http://localhost:5173` (Vite default) to preview the app in your browser.

4. **Build for production:**
   ```sh
   npm run build
   ```
   The built site will be output to the `dist/` folder.

5. **Preview production build locally:**
   ```sh
   npm run preview
   ```

6. **Deploy to GitHub Pages:**
   ```sh
   npm run deploy
   ```
   *(Deployment uses `gh-pages` and Vite config for correct base path.)*

---

## Contact

- Email: ilhambouktir8@gmail.com
- LinkedIn: [Ilham Bouktir](https://www.linkedin.com/in/ilham-bouktir-0b266b31b)
- GitHub: https://github.com/ilham-bouk
- Portfolio: [Ilham Bouktir](https://ilham-bouk.github.io/ilhambouktir/)

For any questions, reach out via GitHub Issues!
