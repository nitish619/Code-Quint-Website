/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths to your project structure
  ],
  theme: {
    container: {
      center: true,
      // We'll rely on CSS vars for padding via class: px-[var(--container-pad)]
      // If you want fixed fallbacks:
      padding: { DEFAULT: "1rem", lg: "2rem" },
      screens: { "2xl": "1200px" }, // lock content width
    },
    extend: {
      animation: {
        "star-movement-bottom":
          "star-movement-bottom 6s linear infinite alternate",
        "star-movement-top": "star-movement-top 6s linear infinite alternate",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
      },
      // Use the CSS variable so swapping fonts is effortless
      fontFamily: {
        bulky: ["var(--font-bulky)", "sans-serif"],
        bulkymono: ["var(--font-bulkymono)", "monospace"],
        bulkywide: ["var(--font-bulkywide)", "sans-serif"],

        median: ["var(--font-media)", "sans-serif"],
        medianmono: ["var(--font-mediamono)", "monospace"],
        medianwide: ["var(--font-mediawide)", "sans-serif"],

        neutral: ["var(--font-neutral)", "sans-serif"],
        neutralmono: ["var(--font-neutralmono)", "monospace"],
        neutralwide: ["var(--font-neutralwide)", "sans-serif"],

        slim: ["var(--font-slim)", "sans-serif"],
        slimmono: ["var(--font-slimmono)", "monospace"],
        slimwide: ["var(--font-slimwide)", "sans-serif"],
      },
      colors: {
        fg: "hsl(var(--fg) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
