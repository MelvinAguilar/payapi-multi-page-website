import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "police-blue": "#36536B",
        irresistible: "#BA4270",
        "light-irresistible": "#DA6D97",
        "dark-gunmetal": "#1B262F",
        "ghost-white": "#FBFCFE",
        "slate-gray": "#6C8294",
        "flash-White": "#EDF3F8",
      },
      boxShadow: {
        button: "0.625rem 0.625rem 1.5625rem -0.625rem rgba(54, 83, 107, 0.25)",
        image: "1.5625rem 1.5625rem 5rem 0rem rgba(54, 83, 107, 0.30)",
      },
      letterSpacing: {
        button: "-0.0072rem",
        title: "-0.0346rem",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif-display)", "sans-serif"],
        "public-sans": ["var(--font-public-sans)", "sans-serif"],
      },
      lineHeight: {
        normal: "normal",
      },
    },
  },
  plugins: [],
};
export default config;
