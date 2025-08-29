# LinkForge

**LinkForge** is a modern, high-performance URL shortener built with [Next.js](https://nextjs.org) and MongoDB. It provides a seamless, privacy-focused solution for creating shortened URLs without requiring user registration or collecting personal information.

![LinkForge Interface](/public/trans_bg.png)

## 🌟 Features

### Core Features
- **No Login Required:** Instantly create shortened URLs without account creation
- **Privacy-First:** Zero tracking, no analytics, complete user privacy
- **Custom Short URLs:** Create personalized, memorable short links
- **Fast & Reliable:** Built on Next.js 15.3.4 for optimal performance
- **Open Source:** [Available on GitHub](https://github.com/abhishekchauhan01x/linkforge)

### Technical Features
- **Modern Stack:** Built with Next.js 15.3.4 and React 19
- **Responsive Design:** Tailwind CSS for beautiful, mobile-first UI
- **MongoDB Integration:** Robust and scalable data storage
- **API Routes:** RESTful API endpoints for URL management
- **Dynamic Routing:** Efficient handling of shortened URLs
- **Error Handling:** Comprehensive error management system
- **Security Features:** Input validation and URL verification

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (18.x or higher)
- npm (9.x or higher) or Yarn
- MongoDB (6.0 or higher)
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishekchauhan01x/linkforge.git
   cd linkforge
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Required: MongoDB connection string
   MONGODB_URI=your_mongodb_connection_string
   
   # Required: Your application's public URL
   NEXT_PUBLIC_HOST=http://localhost:3000
   
   # Optional: MongoDB database name (default: linkforge)
   MONGODB_DB=linkforge
   
   # Optional: Rate limiting (requests per minute)
   RATE_LIMIT=60
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Deployment
```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📖 Usage Guide

### Basic URL Shortening
1. Navigate to the **Shorten** page
2. Enter your long URL in the input field
3. (Optional) Specify a custom short URL
4. Click "Generate Short Link"
5. Copy and share your shortened URL

### API Documentation

#### Create Short URL
- **Endpoint:** `/api/generate`
- **Method:** POST
- **Body:**
  ```json
  {
    "url": "https://your-long-url.com",
    "shorturl": "custom-alias" // Optional
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "error": false,
    "message": "URL Generated Successfully"
  }
  ```

#### Access Short URL
- **Endpoint:** `/:shorturl`
- **Method:** GET
- **Response:** Redirects to the original URL

## 🏗️ Project Structure

```
linkforge/
├── app/                    # Next.js app directory
│   ├── api/               # API endpoints
│   │   └── generate/      # URL generation endpoint
│   ├── [shorturl]/        # Dynamic route for short URLs
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── shorten/          # URL shortening page
│   ├── layout.js         # Root layout component
│   └── page.js           # Homepage
├── components/            # Reusable React components
│   └── Navbar.js         # Navigation component
├── lib/                  # Utility functions
│   └── mongodb.js        # MongoDB connection helper
├── public/               # Static assets
└── styles/              # CSS and styling files
    └── globals.css      # Global styles (Tailwind CSS)
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Fork the repository to your GitHub account
2. Create a new project on [Vercel](https://vercel.com)
3. Import your forked repository
4. Configure environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `NEXT_PUBLIC_HOST`: Your Vercel deployment URL
5. Deploy the project

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. (Optional) Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start npm --name "linkforge" -- start
   ```

## 🛠️ Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Technology Stack
- **Frontend Framework:** Next.js 15.3.4
- **UI Library:** React 19.0.0
- **Styling:** Tailwind CSS 4.0
- **Database:** MongoDB 6.17.0
- **Development Tools:**
  - ESLint for code quality
  - Next.js built-in TypeScript support
  - PostCSS for CSS processing

## 📝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact & Support

- Visit our **Contact** page in the app
- Create an issue on GitHub
- Send an email to [your-email@example.com]

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Hosted on [Vercel](https://vercel.com)
- Database provided by [MongoDB](https://mongodb.com)
