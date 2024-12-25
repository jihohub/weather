import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 60%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-15px)" },
        },
        scalePulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
        },
      },
      animation: {
        wave: "wave 1.2s ease-in-out infinite",
        scalePulse: "scalePulse 0.5s ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mobile: { max: "479px" },
        tablet: { min: "480px", max: "1199px" },
        desktop: { min: "1200px" },
      },
      colors: {
        navyBlue: "#12086f",
        persianBlue: "#2b35af",
        neonBlue: "#4361ee",
        chefchaouenBlue: "#4895ef",
        vividSkyBlue: "#4cc9f0",
      },
    },
  },
  plugins: [],
};
export default config;
