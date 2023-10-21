import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        50: '#f4f3ff',
        100: '#ebe9fe',
        200: '#d8d6fe',
        300: '#bcb5fd',
        400: '#9a8bfa',
        500: '#795df5',
        600: '#673bec',
        700: '#5829d8',
        800: '#441fa7',
        900: '#3e1e94',
        950: '#241065',
      },
      secondary: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#0e0e0e',
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
