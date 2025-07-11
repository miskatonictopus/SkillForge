import type { Config } from "tailwindcss"

const config: Config = {
 darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  sans: ["Geist", "sans-serif"],
}

    },
  },
  plugins: [],
}

export default config
