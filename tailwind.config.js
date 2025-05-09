const config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}', '!./node_modules'],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-inter)', 'sans-serif !important'],
        accent: ['var(--font-inter)', 'sans-serif !important'],
      },
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
        'on-primary': 'hsl(var(--color-on-primary) / <alpha-value>)',
        'on-secondary': 'hsl(var(--color-on-secondary) / <alpha-value>)',
        'on-background': 'hsl(var(--color-on-background) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
export default config;
