import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          500: "#7e4847",
        },
        secondary: {
          300: "#fffbf7",
          500: "#f9f1e7",
        },
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "728px",
        xl: "984px",
        "2xl": "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
