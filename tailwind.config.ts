import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: "#0B2A6B",
            deep: "#06183D",
            navy: "#081E4D",
            light: "#143D99",
            bright: "#1D5FD6",
            sky: "#EBF2FF",
          },
          gold: {
            DEFAULT: "#D4AF37",
            light: "#F3C64F",
            dark: "#AA8A2A",
            pale: "#FFF8E7",
            glow: "rgba(212, 175, 55, 0.35)",
          },
          cream: {
            DEFAULT: "#FAF7F0",
            light: "#FDFBF7",
            dark: "#EFE8DA",
          },
          charcoal: {
            DEFAULT: "#1A1A1A",
            muted: "#4A4A4A",
            light: "#717171",
          },
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        soft: "0 10px 30px -5px rgba(11, 42, 107, 0.08)",
        card: "0 14px 35px -8px rgba(11, 42, 107, 0.12)",
        gold: "0 8px 25px -4px rgba(212, 175, 55, 0.35)",
        floating: "0 20px 40px -10px rgba(11, 42, 107, 0.2)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-delay": "floatSlow 7s ease-in-out 2s infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.04)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
