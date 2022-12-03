/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./components/landing/**/*.{js,ts,jsx,tsx}",
      "./components/common/**/*.{js,ts,jsx,tsx}",
      "./components/ui/**/*.{js,ts,jsx,tsx}",
      "./public/landing page/icons/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '900px',
      lg: '1250px',
      xl: '1440px',
    }
  },
  plugins: [],
}
