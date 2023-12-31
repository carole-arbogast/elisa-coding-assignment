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
        "light-background": "#fafafa",
        link: "#0068f0",
        "link-hover": "#0048a1",
      },
      maxWidth: {
        "405px": "405px",
        "904px": "904px",
        "1/3": "66.6%",
      },
      boxShadow: {
        section: "5px 5px 10px #d2d2d6",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(270px,1fr))",
      },
    },
    screens: {
      lg: "1047px",
    },
  },
  plugins: [],
};
export default config;
