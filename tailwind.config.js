import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jost": ["Jost", "sans-serif"]
      },
      backgroundImage: {
        'custom-texture': "url('/fabric_texture.png')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"]
  },
}

