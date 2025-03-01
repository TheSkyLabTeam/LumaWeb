/** @type {import('tailwindcss').Config} */
/* eslint-disable max-len */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      fontFamily: {
        clash: ['var(--font-clash)'],
        archivo: ['var(--font-archivo)']
      },
      colors: {
        primary: {
          DEFAULT: "#166683", // rgb(22 102 131)
          dark: "#8dcff1",   // rgb(141 207 241)
        },
        "primary-tint": {
          DEFAULT: "#166683", // rgb(22 102 131)
          dark: "#8dcff1",   // rgb(141 207 241)
        },
        "on-primary": {
          DEFAULT: "#ffffff", // rgb(255 255 255)
          dark: "#003547",   // rgb(0 53 71)
        },
        "primary-container": {
          DEFAULT: "#c0e8ff", // rgb(192 232 255)
          dark: "#004d66",   // rgb(0 77 102)
        },
        "on-primary-container": {
          DEFAULT: "#001e2b", // rgb(0 30 43)
          dark: "#c0e8ff",   // rgb(192 232 255)
        },
        secondary: {
          DEFAULT: "#4d616c", // rgb(77 97 108)
          dark: "#b4cad6",   // rgb(180 202 214)
        },
        "on-secondary": {
          DEFAULT: "#ffffff", // rgb(255 255 255)
          dark: "#1f333d",   // rgb(31 51 61)
        },
        "secondary-container": {
          DEFAULT: "#d0e6f3", // rgb(208 230 243)
          dark: "#364954",   // rgb(54 73 84)
        },
        "on-secondary-container": {
          DEFAULT: "#091e27", // rgb(9 30 39)
          dark: "#d0e6f3",   // rgb(208 230 243)
        },
        tertiary: {
          DEFAULT: "#5e5a7d", // rgb(94 90 125)
          dark: "#c8c2ea",   // rgb(200 194 234)
        },
        "on-tertiary": {
          DEFAULT: "#ffffff", // rgb(255 255 255)
          dark: "#302c4c",   // rgb(48 44 76)
        },
        "tertiary-container": {
          DEFAULT: "#e4dfff", // rgb(228 223 255)
          dark: "#464364",   // rgb(70 67 100)
        },
        "on-tertiary-container": {
          DEFAULT: "#1c172b", // rgb(27 23 54)
          dark: "#e4dfff",   // rgb(228 223 255)
        },
        error: {
          DEFAULT: "#ba1a1a", // rgb(186 26 26)
          dark: "#ffb4ab",   // rgb(255 180 171)
        },
        "on-error": {
          DEFAULT: "#ffffff", // rgb(255 255 255)
          dark: "#690005",   // rgb(105 0 5)
        },
        "error-container": {
          DEFAULT: "#ffdada", // rgb(255 218 214)
          dark: "#93000a",   // rgb(147 0 10)
        },
        "on-error-container": {
          DEFAULT: "#410002", // rgb(65 0 2)
          dark: "#ffdada",   // rgb(255 218 214)
        },
        background: {
          DEFAULT: "#f6fafe", // rgb(246 250 254)
          dark: "#0f1417",   // rgb(15 20 23)
        },
        "on-background": {
          DEFAULT: "#171c1f", // rgb(23 28 31)
          dark: "#dfe3e7",   // rgb(223 227 231)
        },
        surface: {
          DEFAULT: "#f6fafe", // rgb(246 250 254)
          dark: "#0f1417",   // rgb(15 20 23)
        },
        "on-surface": {
          DEFAULT: "#171c1f", // rgb(23 28 31)
          dark: "#dfe3e7",   // rgb(223 227 231)
        },
        "surface-variant": {
          DEFAULT: "#dce3e9", // rgb(220 227 233)
          dark: "#40484c",   // rgb(64 72 76)
        },
        "on-surface-variant": {
          DEFAULT: "#40484c", // rgb(64 72 76)
          dark: "#c0c7cd",   // rgb(192 199 205)
        },
        outline: {
          DEFAULT: "#71787d", // rgb(113 120 125)
          dark: "#8a9297",   // rgb(138 146 151)
        },
        "outline-variant": {
          DEFAULT: "#c0c7cd", // rgb(192 199 205)
          dark: "#40484c",   // rgb(64 72 76)
        },
        shadow: {
          DEFAULT: "#000000", // rgb(0 0 0)
          dark: "#000000",   // rgb(0 0 0)
        },
        scrim: {
          DEFAULT: "#000000", // rgb(0 0 0)
          dark: "#000000",   // rgb(0 0 0)
        },
        "inverse-surface": {
          DEFAULT: "#2c3134", // rgb(44 49 52)
          dark: "#dfe3e7",   // rgb(223 227 231)
        },
        "inverse-on-surface": {
          DEFAULT: "#edf1f5", // rgb(237 241 245)
          dark: "#2c3134",   // rgb(44 49 52)
        },
        "inverse-primary": {
          DEFAULT: "#8dcff1", // rgb(141 207 241)
          dark: "#166683",   // rgb(22 102 131)
        },
        "primary-fixed": {
          DEFAULT: "#c0e8ff", // rgb(192 232 255)
          dark: "#c0e8ff",   // rgb(192 232 255)
        },
        "on-primary-fixed": {
          DEFAULT: "#001e2b", // rgb(0 30 43)
          dark: "#001e2b",   // rgb(0 30 43)
        },
        "primary-fixed-dim": {
          DEFAULT: "#8dcff1", // rgb(141 207 241)
          dark: "#8dcff1",   // rgb(141 207 241)
        },
        "on-primary-fixed-variant": {
          DEFAULT: "#004d66", // rgb(0 77 102)
          dark: "#004d66",   // rgb(0 77 102)
        },
        "secondary-fixed": {
          DEFAULT: "#d0e6f3", // rgb(208 230 243)
          dark: "#d0e6f3",   // rgb(208 230 243)
        },
        "on-secondary-fixed": {
          DEFAULT: "#091e27", // rgb(9 30 39)
          dark: "#091e27",   // rgb(9 30 39)
        },
        "secondary-fixed-dim": {
          DEFAULT: "#b4cad6", // rgb(180 202 214)
          dark: "#b4cad6",   // rgb(180 202 214)
        },
        "on-secondary-fixed-variant": {
          DEFAULT: "#364954", // rgb(54 73 84)
          dark: "#364954",   // rgb(54 73 84)
        },
        "tertiary-fixed": {
          DEFAULT: "#e4dfff", // rgb(228 223 255)
          dark: "#e4dfff",   // rgb(228 223 255)
        },
        "on-tertiary-fixed": {
          DEFAULT: "#1c172b", // rgb(27 23 54)
          dark: "#1c172b",   // rgb(27 23 54)
        },
        "tertiary-fixed-dim": {
          DEFAULT: "#c8c2ea", // rgb(200 194 234)
          dark: "#c8c2ea",   // rgb(200 194 234)
        },
        "on-tertiary-fixed-variant": {
          DEFAULT: "#464364", // rgb(70 67 100)
          dark: "#464364",   // rgb(70 67 100)
        },
        "surface-dim": {
          DEFAULT: "#d6dadf", // rgb(214 218 222)
          dark: "#0f1417",   // rgb(15 20 23)
        },
        "surface-bright": {
          DEFAULT: "#f6fafe", // rgb(246 250 254)
          dark: "#353a3d",   // rgb(53 58 61)
        },
        "surface-container-lowest": {
          DEFAULT: "#ffffff", // rgb(255 255 255)
          dark: "#0a0f12",   // rgb(10 15 18)
        },
        "surface-container-low": {
          DEFAULT: "#f0f4f8", // rgb(240 244 248)
          dark: "#171c1f",   // rgb(23 28 31)
        },
        "surface-container": {
          DEFAULT: "#eaeef2", // rgb(234 238 242)
          dark: "#1b2023",   // rgb(27 32 35)
        },
        "surface-container-high": {
          DEFAULT: "#e4e9ec", // rgb(228 233 236)
          dark: "#262b2e",   // rgb(38 43 46)
        },
        "surface-container-highest": {
          DEFAULT: "#dfe3e7", // rgb(223 227 231)
          dark: "#303538",   // rgb(48 53 57)
        },
      },
    }
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    }
  ],
  plugins: [require("@headlessui/tailwindcss")]
};
