/** @type {import('tailwindcss').Config} */
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
export default {
  presets: [tailwindConfig],
  content: ['./index.html', './**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

