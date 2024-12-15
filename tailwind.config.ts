import type { Config } from "tailwindcss"

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"]
      },
      colors: {
        brand: {
          DEFAULT: "#FA7275"
        }
      }
    }
  },
  plugins: []
} satisfies Config