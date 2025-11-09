# Aura Interactive - Coming Soon Page

A modern Next.js 16 application built with TypeScript and Tailwind CSS, featuring a coming soon page with contact form functionality.

## Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Server Actions** for form handling
- **Responsive Design** with dark mode support
- **Animated Hero Section** with SVG graphics
- **Contact Form** with validation and feedback

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

Build the production version:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
aura-interactive-app/
├── app/
│   ├── actions/
│   │   └── contact.ts          # Server action for contact form
│   ├── globals.css             # Global styles and Tailwind config
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Home page
├── components/
│   ├── ContactForm.tsx         # Contact form component (client)
│   ├── Footer.tsx              # Footer with company info
│   ├── Header.tsx              # Header with logo and nav
│   ├── HeroSection.tsx         # Animated hero section
│   └── Logo.tsx                # SVG logo component
└── public/                     # Static assets
```

## Key Technologies

- **Framework**: Next.js 16 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Font**: Poppins (Google Fonts)
- **Form Handling**: Next.js Server Actions with useActionState

## Custom Theme

The application uses a custom color palette:
- Primary: `#447ea2`
- Secondary: `#79cad3`
- Background Light: `#F9FAFB`
- Background Dark: `#111827`

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

© 2024 Aura Interactive I.K.E. All rights reserved.

