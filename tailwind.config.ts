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
            DEFAULT: "#121820",
            deep: "#0B0F14",
            navy: "#18202A",
            light: "#243040",
            bright: "#00E699",
            sky: "#E6FBF4",
          },
          gold: {
            DEFAULT: "#00E699",
            light: "#33EBAD",
            dark: "#00B377",
            pale: "#0D221A",
            glow: "rgba(0, 230, 153, 0.35)",
          },
          cream: {
            DEFAULT: "#0B0F14",
            light: "#121820",
            dark: "#18202A",
          },
          charcoal: {
            DEFAULT: "#F8FAFC",
            muted: "#94A3B8",
            light: "#64748B",
          },
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Outfit", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        soft: "0 10px 30px -5px rgba(0, 230, 153, 0.08)",
        card: "0 14px 35px -8px rgba(0, 230, 153, 0.15)",
        gold: "0 8px 25px -4px rgba(0, 230, 153, 0.4)",
        floating: "0 20px 40px -10px rgba(0, 0, 0, 0.7)",
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
