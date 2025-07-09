# LinkForge

**LinkForge** is a privacy-first, user-friendly URL shortener built with [Next.js](https://nextjs.org).
No logins, no tracking, just simple and secure link shortening.

## Features

- **No Login Required:** Instantly shorten URLs without creating an account.
- **Privacy-First:** No tracking, no analytics, and no collection of personal data.
- **Custom Short URLs:** Choose your own shortlink text.
- **Fast & Reliable:** Built for speed and simplicity.
- **Open Source:** [View on GitHub](https://github.com/abhishekchauhan01x)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abhishekchauhan01x/linkforge.git
cd linkforge
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your MongoDB connection string:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use LinkForge.

## Usage

- Go to the **Shorten** page.
- Enter your long URL and (optionally) a custom short URL text.
- Get your private, short link instantly!

## Project Structure

- `app/` — Next.js app directory (pages, API routes, layout)
- `components/` — Reusable React components (e.g., Navbar)
- `lib/` — MongoDB connection helper
- `public/` — Static assets (images, icons)
- `globals.css` — Global styles (Tailwind CSS)

## Deployment

This project is deployed on [Vercel](https://vercel.com/).

### Deploy your own:

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import your project.
3. Set the required environment variables (`MONGODB_URI`, `NEXT_PUBLIC_HOST`) in the Vercel dashboard.
4. Click **Deploy**.

Your app will be live on your Vercel domain!

## About

LinkForge was created to provide a simple, privacy-respecting alternative to traditional URL shorteners.
We never track your activity or require personal information.

## Contact

Questions or feedback? Visit the **Contact Us** page in the app.
