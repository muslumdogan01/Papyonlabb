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
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        floating: 'floating 4s ease-in-out infinite',
      },
      colors: {
        'white-opacity': 'rgba(255, 255, 255, 0.04)', // #FFFFFF0A (4% opacity)
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, #FFFFFF 100%, #151518 100%)',
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
