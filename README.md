# Clarity - Water Microplastic Detection Website

A professional, conversion-optimized website for Clarity, a water microplastic detection device. Built for the Conrad Challenge Innovation Competition.

## 🌊 About Clarity

**Tagline:** "See the Unseen. Drink Safely."

Clarity is the first real-time microplastic detection system for home use, combining AI-powered optical analysis with smart filtration to protect families while building a nationwide contamination database to drive EPA regulation.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed on your system
- A modern web browser

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

The development server includes hot module replacement, so changes will appear instantly as you edit files.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

   Follow the prompts. For subsequent deployments:
   ```bash
   vercel --prod
   ```

**Or use Vercel's Git integration:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite and deploys

### Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

**Or use Netlify's Git integration:**

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

## 📁 Project Structure

```
clarity/
├── src/
│   ├── components/          # React components
│   │   ├── Accordion.jsx    # Reusable accordion component
│   │   ├── Button.jsx       # Reusable button component
│   │   ├── Card.jsx         # Reusable card component
│   │   ├── Section.jsx      # Reusable section wrapper
│   │   ├── Navbar.jsx       # Sticky navigation header
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Problem.jsx      # Problem statement section
│   │   ├── Solution.jsx     # Solution overview section
│   │   ├── HowItWorks.jsx   # Technical explanation section
│   │   ├── Impact.jsx       # Social impact section
│   │   ├── Product.jsx      # Product details & pricing
│   │   ├── Team.jsx         # Team member profiles
│   │   ├── FAQ.jsx          # Frequently asked questions
│   │   └── Footer.jsx       # Footer with newsletter signup
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles & Tailwind imports
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # This file
```

## 🎨 Customization Guide

### Updating Content

#### Brand Name & Tagline
- **Navbar & Footer:** Edit `src/components/Navbar.jsx` and `src/components/Footer.jsx`
- **Hero Section:** Edit `src/components/Hero.jsx` (lines 24-30)

#### Statistics & Data
- **Problem Section:** Edit `src/components/Problem.jsx` (lines 67-93)
  - Update the `<StatCard>` components with real data and sources

#### Team Members
- **Team Section:** Edit `src/components/Team.jsx` (lines 51-70)
  - Update the `teamMembers` array with actual names, roles, and bios
  - Replace placeholder photos by updating the User icon placeholder

#### Pricing
- **Product Section:** Edit `src/components/Product.jsx` (lines 87-113)
  - Update device price and filter costs
  - Modify features list

#### Contact Information
- **Footer:** Edit `src/components/Footer.jsx` (line 162)
  - Change email address from `hello@claritywater.com` to your actual contact email

### Changing Colors

Edit `tailwind.config.js` (lines 8-12):

```javascript
colors: {
  primary: '#0EA5E9',    // Main brand color (blue)
  secondary: '#06B6D4',  // Accent color (cyan)
  accent: '#10B981',     // Call-to-action color (green)
}
```

### Adding/Removing Sections

1. **Create new component** in `src/components/YourSection.jsx`
2. **Import in App.jsx:**
   ```javascript
   import YourSection from './components/YourSection';
   ```
3. **Add to render:**
   ```javascript
   <YourSection />
   ```
4. **Update Navbar** links in `src/components/Navbar.jsx` (lines 21-28)

### Customizing Animations

Animations use Framer Motion. To adjust:

- **Delay:** Change `delay` prop in `transition={{ delay: 0.2 }}`
- **Duration:** Change `duration` prop in `transition={{ duration: 0.8 }}`
- **Animation type:** Modify `initial` and `whileInView` props

Example (in any component):
```javascript
<motion.div
  initial={{ opacity: 0, y: 30 }}      // Start state
  whileInView={{ opacity: 1, y: 0 }}   // End state
  transition={{ duration: 0.6 }}        // Animation speed
>
```

### Replacing Placeholder Images

Current placeholders use icons. To use real images:

1. **Add images** to `src/assets/` directory
2. **Import in component:**
   ```javascript
   import productImage from '../assets/product.jpg';
   ```
3. **Replace icon placeholder:**
   ```javascript
   <img src={productImage} alt="Clarity Device" className="w-full h-auto" />
   ```

### Form Backend Integration

Currently, forms show success messages without backend integration. To connect:

1. **Product waitlist form** (`src/components/Product.jsx`, line 30):
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     const response = await fetch('YOUR_API_ENDPOINT', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ email })
     });
     // Handle response
   };
   ```

2. **Footer newsletter** (`src/components/Footer.jsx`, line 10) - similar pattern

Popular form services:
- [Formspree](https://formspree.io/) - Simple form backend
- [EmailJS](https://www.emailjs.com/) - Send emails directly from JavaScript
- [Netlify Forms](https://www.netlify.com/products/forms/) - Built-in if using Netlify

## 🎯 Key Features

- ✅ **Fully Responsive:** Mobile-first design works on all devices
- ✅ **Fast Loading:** Optimized for < 3 second load times
- ✅ **Smooth Animations:** Framer Motion for professional transitions
- ✅ **Scroll Navigation:** Sticky navbar with smooth scroll to sections
- ✅ **Form Validation:** Email validation on all signup forms
- ✅ **Accessible:** Semantic HTML and ARIA labels
- ✅ **SEO Ready:** Meta tags and semantic structure
- ✅ **Modern Stack:** React 18 + Vite + Tailwind CSS

## 🛠 Technologies Used

- **React 18.3** - UI framework
- **Vite 5** - Build tool (fast development & optimized production builds)
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 11** - Animation library
- **Lucide React** - Icon library

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Change port in vite.config.js or run:
npm run dev -- --port 3001
```

### Animations not working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser console for errors

### Tailwind styles not applying
```bash
# Rebuild CSS:
npm run build
```

### Build errors
```bash
# Clear cache and reinstall:
rm -rf node_modules package-lock.json
npm install
```

## 📝 License

This project was created for the Conrad Challenge Innovation Competition. All rights reserved.

## 🙋 Support

For questions about customization or deployment:
- Check the [Vite documentation](https://vitejs.dev/)
- Check the [Tailwind CSS documentation](https://tailwindcss.com/)
- Check the [Framer Motion documentation](https://www.framer.com/motion/)

## 🎓 Conrad Challenge Note

This website demonstrates:
- **Product Value:** Clear explanation of microplastic detection technology
- **Compelling Story:** Emotional connection through problem statement and team narrative
- **Technical Credibility:** Detailed "How It Works" section with validation data
- **Customer Engagement:** Multiple CTAs, waitlist signup, and value proposition

---

**Built with ❤️ for cleaner water and a healthier future**
