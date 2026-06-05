/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["STIX Two Text", ...defaultTheme.fontFamily.serif],
        sans: ["Jost Variable", ...defaultTheme.fontFamily.sans],
      },
      // Tight line-height baked into every size so it doesn't need
      // to be repeated as `leading-tight` on each element.
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.25" }],
        sm: ["0.875rem", { lineHeight: "1.25" }],
        base: ["1rem", { lineHeight: "1.25" }],
        lg: ["1.125rem", { lineHeight: "1.25" }],
        xl: ["1.25rem", { lineHeight: "1.25" }],
        "2xl": ["1.5rem", { lineHeight: "1.25" }],
      },
    },
  },
  plugins: [],
};