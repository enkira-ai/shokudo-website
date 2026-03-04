# Shokudo Japanese Restaurant Website

A beautiful, mobile-first Next.js website for Shokudo Japanese Restaurant in Hackettstown, NJ.

## Features

- 🎨 Modern Japanese aesthetic with authentic color palette
- 📱 Mobile-first responsive design
- 🍜 Hero section with authentic Japanese typography
- 📋 Menu highlights showcase
- 📍 Location and hours with Google Maps integration
- 📞 Contact form and information
- 🛒 Online ordering integration with MenuSifu
- 🔍 SEO optimized with structured data
- 🚀 Static export for fast deployment

## Tech Stack

- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Responsive design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/enkira-ai/shokudo-website.git
cd shokudo-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit \`.env.local\` and add your MenuSifu ordering URL:
\`\`\`
NEXT_PUBLIC_ORDER_URL=https://www.menusifu.com/shokudo07840
\`\`\`

### Development

Run the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Generate static export:
\`\`\`bash
npm run build
\`\`\`

The static files will be generated in the \`out\` directory.

## Deployment

The site is configured for static export deployment. You can deploy to:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the \`out\` directory
- **GitHub Pages**: Deploy the \`out\` directory to the \`gh-pages\` branch

### Environment Variables

- \`NEXT_PUBLIC_ORDER_URL\`: Your MenuSifu ordering URL (required for online ordering links)

## Customization

### Colors

The color palette is defined in the design spec:
- Sumi Black: #1C1C1E
- Akane Red: #C0392B  
- Kome Cream: #F5ECD7
- Washi White: #FAF6EF
- Bamboo Green: #5C8A4A

### Fonts

Google Fonts are imported in \`src/app/styles/globals.css\`:
- Shippori Mincho (headings)
- Noto Sans JP (body)
- Cormorant Garamond (accent)

### Content

Edit components in \`src/app/components/\` to modify the content.

## License

© 2025 Shokudo. All rights reserved.

## 🚀 Production Deployment

### Static Build
The site is built as a static export (`output: 'export'`). The static files are in the `out/` directory after running `npm run build`.

### Deployment Options

#### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Get a token from https://vercel.com/account/tokens
3. Run: `VERCEL_TOKEN=<token> vercel --prod --yes`
4. Or connect the GitHub repo at https://vercel.com/new

#### Option 2: Netlify
1. Install: `npm i -g netlify-cli`
2. Get a token from https://app.netlify.com/user/applications
3. Run: `netlify deploy --prod --dir=out --auth=<token>`

#### Option 3: GitHub Pages (requires paid plan for private repos)
The `gh-pages` branch is pre-built and ready. Enable GitHub Pages in repo Settings → Pages → Branch: `gh-pages`.

### Custom Domain DNS Setup

To point **shokudo07840.com** to your deployment:

#### For Vercel:
Add to your DNS registrar:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### For Netlify:
Add to your DNS registrar:
```
Type: CNAME
Name: @  (or use ALIAS/ANAME if available)
Value: <your-site-name>.netlify.app

Type: CNAME
Name: www
Value: <your-site-name>.netlify.app
```

Then add the custom domain in your Vercel/Netlify dashboard under project Settings → Domains.
