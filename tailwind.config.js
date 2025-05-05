const config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}', '!./node_modules'],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-inter)', 'sans-serif !important'],
        accent: ['var(--font-inter)', 'sans-serif !important'],
      },
    },
  },
  plugins: [],
};
export default config;
