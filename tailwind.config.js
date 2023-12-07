/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    colors: {
      'primary': {
        DEFAULT: '#0053da',
        dark: '#b4c5ff',
      },
      'on-primary': {
        DEFAULT: '#ffffff',
        dark: '#002a78',
      },
      'primary-container': {
        DEFAULT: '#dbe1ff',
        dark: '#003ea8',
      },
      'on-primary-container': {
        DEFAULT: '#00174b',
        dark: '#dbe1ff',
      },
      'secondary': {
        DEFAULT: '#595e72',
        dark: '#c1c5dd',
      },
      'on-secondary': {
        DEFAULT: '#ffffff',
        dark: '#2a3042',
      },
      'secondary-container': {
        DEFAULT: '#dde1f9',
        dark: '#414659',
      },
      'on-secondary-container': {
        DEFAULT: '#161b2c',
        dark: '#dde1f9',
      },
      'background': {
        DEFAULT: '#fefbff',
        dark: '#1b1b1f',
      },
      'on-background': {
        DEFAULT: '#1b1b1f',
        dark: '#e4e2e6',
      },
      'surface': {
        DEFAULT: '#e2e2ec',
        dark: '#1b1b1f',
      },
      'on-surface': {
        DEFAULT: '#1b1b1f',
        dark: '#e4e2e6',
      },
      'outline': {
        DEFAULT: '#757680',
        dark: '#8f909a',
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}