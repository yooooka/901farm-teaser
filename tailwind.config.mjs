/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["STIX Two Text", ...defaultTheme.fontFamily.serif],
        sans: ["Afacad Flux Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};