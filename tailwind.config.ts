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
        royalBurgundy: "#8b3f33",
        royalNavy: "#273742",
        royalGray: "#eff1f3",
        royalTan: "#d1b6a2",
        royalMauve: "#dbd3d8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
        fadeIn: "fadeIn 0.7s ease-out forwards",
        slideInLeft: "slideInLeft 0.7s ease-out forwards",
        slideInRight: "slideInRight 0.7s ease-out forwards",
        scaleIn: "scaleIn 0.5s ease-out forwards",
      },
      transitionDuration: {
        "400": "400ms",
        "1500": "1500ms",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #273742 0%, #1a2530 50%, #0f171e 100%)",
        "burgundy-gradient":
          "linear-gradient(135deg, #8b3f33 0%, #6d2f24 100%)",
        "navy-gradient": "linear-gradient(135deg, #273742 0%, #1a2530 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
