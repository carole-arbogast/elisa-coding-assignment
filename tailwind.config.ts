import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "18px": "18px",
        "26px": "26px",
      },
      colors: {
        primary: "#00239d",
        dark: "#171c43",
        lightBackground: "#fafafa",
      },
    },
    screens: {
      lg: "1047px",
    },
  },
  plugins: [],
};
export default config;
