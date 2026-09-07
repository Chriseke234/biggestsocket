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
            DEFAULT: "#111111",
            deep: "#0A0A0A",
            navy: "#181818",
            light: "#242424",
            bright: "#1D5FD6",
            sky: "#F0F4FA",
          },
          gold: {
            DEFAULT: "#D4AF37",
            light: "#F3C64F",
            dark: "#AA8A2A",
            pale: "#FFFBF0",
            glow: "rgba(212, 175, 55, 0.35)",
          },
          cream: {
            DEFAULT: "#FBF9F5",
            light: "#FFFFFF",
            dark: "#F0ECE1",
          },
          charcoal: {
            DEFAULT: "#111111",
            muted: "#4A4A4A",
            light: "#717171",
          },
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Syne", "sans-serif"],
        sans: ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"],
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
