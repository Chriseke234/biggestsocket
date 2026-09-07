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
            DEFAULT: "#0B0F19",
            deep: "#06080E",
            navy: "#111827",
            light: "#1E293B",
            bright: "#00D2FF",
            sky: "#E0F2FE",
          },
          gold: {
            DEFAULT: "#00D2FF",
            light: "#38BDF8",
            dark: "#0284C7",
            pale: "#0F172A",
            glow: "rgba(0, 210, 255, 0.35)",
          },
          cream: {
            DEFAULT: "#080B11",
            light: "#0B0F19",
            dark: "#111827",
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
        soft: "0 10px 30px -5px rgba(0, 210, 255, 0.08)",
        card: "0 14px 35px -8px rgba(0, 210, 255, 0.15)",
        gold: "0 8px 25px -4px rgba(0, 210, 255, 0.4)",
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
