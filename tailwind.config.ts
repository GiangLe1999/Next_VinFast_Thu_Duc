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
        primary: "#1464F4",
        secondary: "#2b2b2b",
        tertiary: "#025eda",
        lightBg: "#F8FAFC",
        textColor: "#54595f",
      },
      fontFamily: {
        sans: ["Muli", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "120ch",
          },
        },
      },
      keyframes: {
        wiggle: {
          "35%": { transform: "rotate(17deg)" },
          "55%": { transform: "rotate(-17deg)" },
          "65%": { transform: "rotate(17deg)" },
          "75%": { transform: "rotate(-17deg)" },
          "100%": { transform: "rotate(0)" },
        },
        ring: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "rotate(-10deg)" },
          "20%, 40%, 60%, 80%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite 1s",
        ring: "ring 1s ease-in-out infinite",
      },
      aspectRatio: {
        "22 / 10": "22 / 10",
      },
      boxShadow: {
        stickyBtns: "0px 0px 1px 1px rgba(192, 192, 192, 0.3)",
      },
      transitionProperty: {
        width: "width",
        fadeIn: "visible opacity transform",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
};
export default config;
