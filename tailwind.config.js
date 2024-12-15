/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        background:{
          primary: '#002855',
          secondary: '#F4B400',
          neutral: '#F5F5F5',
          accent: '#EA4335',
        },
        text:{
          primary: '#4A90E2',
          secondary: '#34A853',
          neutral: '#4A4A4A',
          accent: '#9C27B0',
        }
      }
      
    },
  },
  plugins: [],
}