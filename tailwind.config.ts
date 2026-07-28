import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        surface: "#111827",
        ink: "#E2E8F0",
        muted: "#64748B",
        accent: "#06B6D4",
        accent2: "#3B82F6",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-plex)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        blob: "63% 37% 54% 46% / 55% 45% 55% 45%",
      },
    },
  },
  plugins: [],
};
export default config;
