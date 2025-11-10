# Netanel Nagar · Portfolio

A Next.js 16 application showcasing projects, experience, and contact details for Netanel Nagar, Full Stack Developer.

## Tech Stack

- **Next.js App Router**
- **TypeScript**
- **Tailwind CSS**
- **Firebase Firestore & Storage**
- **Vercel Fonts (Geist, Inter)**

## Features

- Dynamic resume and projects pages rendered with Suspense + skeleton fallbacks.
- Firebase-powered data layer for portfolio content and media assets.
- Global UI components (navbar, footer, toast systems) and theme-aligned styling.
- Optimized image handling with SSR-safe animations and placeholders.

## Project Setup

```bash
pnpm install
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://netanelnagar.com
NEXT_PUBLIC_ABOUT_HEADER=Passionate Developer & Lifelong Learner
NEXT_PUBLIC_ABOUT_BODY=...
NEXT_PUBLIC_ABOUT_LINKEDIN=https://linkedin.com/in/...
NEXT_PUBLIC_ABOUT_GITHUB=https://github.com/...
NEXT_PUBLIC_WHATSAPP_LINK=https://wa.me/...
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
RESUME_FILE_NAME=netanelnagar-fullstack.pdf
```

## Folder Structure

- `app/` – App Router pages, layouts, API routes, error boundaries.
- `components/` – UI sections (Hero, About, resume/projects modules, shared UI kit).
- `lib/` – Firebase initialization and helpers.

## Deployment

Deploy on [Vercel](https://vercel.com/). Ensure environment variables are set in the project settings.

## License

All rights reserved.
