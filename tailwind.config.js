/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',      // Dark navy
        secondary: '#1E293B',    // Charcoal
        accent: '#06B6D4',       // Cyan (more interesting than plain blue)
        'accent-purple': '#8B5CF6', // Purple accent for variety
        'accent-emerald': '#10B981', // Emerald for success states
        light: '#F8FAFC',        // Off-white background
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      },
    },
  },
  plugins: [],
}
