import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'app-ebony': '#1e2027',
        'app-cool-gray': '#444',
        'app-gray': '#747474',
        'app-pewter': '#b1b1b1',
        'app-black': '#222',
        'app-text-gray': '#5c5c5c',
        'app-bg-blue': '#2196f3',
        'app-bg-blue-light': '#3fa4f4',
        'app-bg-white': '#fafafa'
      },
    },
  },
  plugins: [],
};
export default config;
