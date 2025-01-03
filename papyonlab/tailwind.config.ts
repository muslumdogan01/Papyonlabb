import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(4px)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        floating: "floating 4s ease-in-out infinite",

        "bounce-slow": "bounceSlow 1.5s ease-in-out infinite", // Yavaş hareket
      },

      colors: {
        "white-opacity": "rgba(255, 255, 255, 0.04)", // #FFFFFF0A (4% opacity)
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        geist: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
