/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        primaryDark: '#1e40af',
        accent: '#f59e0b',
      },
      maxWidth: {
        container: '1400px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container-custom': {
          '@apply max-w-container mx-auto px-6 sm:px-8 lg:px-12 w-full': {},
        },
      });
    },
  ],
}