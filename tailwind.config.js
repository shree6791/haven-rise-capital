/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Navy Blue (Professional & Trustworthy)
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#486581', // Main brand color
          600: '#334e68',
          700: '#243b53',
          800: '#102a43',
          900: '#102135',
        },
        // Secondary - Refined Gold (Wealth & Prestige)
        secondary: {
          50: '#fffbea',
          100: '#fff3c4',
          200: '#fce588',
          300: '#fadb5f',
          400: '#f7c948',
          500: '#b99439', // Accent color
          600: '#997328',
          700: '#775618',
          800: '#5c4813',
          900: '#3d2f0e',
        },
        // Accent - Slate Gray (Sophistication & Stability)
        accent: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b', // Neutral accent
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};