# Upwork Frontend Clone (Prototype)

A lightweight Next.js frontend that recreates key sign-up flows and layout elements inspired by Upwork.
This prototype is built for design reviews, product discussions, and QA validation, rather than production use.

## Who This README Is For

This document is written for:

- **Product Managers / Non-technical stakeholders**: Clear explanation of what the project does, how to run it locally, and where key pages/components live—without requiring deep technical knowledge.

- **Designers & QA Testers**: A quick way to navigate the prototype and understand what to test or review.

## Technologies Used

- **Next.js 16** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Icons** - Additional icon set

## What You Can Do With This Repo

- Preview the sign-up user experience and onboarding slides
- Review layout, copy, spacing, and basic interactions
- Use it during design/UX reviews or internal demos
- Make quick copy changes for testing

## Quick Start

### Prerequisites

- Node.js installed on your system

### Running the Project Locally

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser and visit:**

   ```http://localhost:3000
   ```

**Note:** The app uses Next.js. As long as you have Node.js installed, the commands above should work. If anything fails, copy the terminal output and share it with a developer.

## Project Structure

| Feature / Page | Location |
|----------------|----------|
| Main Landing Page | `app/page.tsx` |
| Sign-Up Page (form, social login buttons, selectors) | `app/auth/sign-up/page.tsx` |
| Verify Email Page | `app/auth/verify-mail/page.tsx` |
| Onboarding Slide 01 | `app/slide/slide-01/page.tsx` |
| Reusable Components (navbar, footer, etc.) | `components/` |
| Footer Component | `components/footer/page.tsx` |
| Sign-Up Navbar Component | `components/sign-up-navbar/page.tsx` |

### Making Changes

If you need to update text or UX copy, open the relevant `page.tsx` file and edit the strings directly.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
\n
