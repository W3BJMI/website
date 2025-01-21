module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src folder
  ],
  theme: {
    extend: {
      boxShadow: {
        all: "0 0 10px 3px rgba(123, 0, 255, 0.7)", // Custom shadow in all directions
        intense: "0 0 20px 5px rgba(123, 0, 255, 0.8)", // Optional for a stronger effect
      },
      colors: {
        primary: '#3A7CA5', // Your custom colors
        accent: '#FFB400',
        purple: {
          500: "#A855F7",
          400: "#C084FC",
        },
        gray: {
          300: "#D1D5DB",
          700: "#374151",
        },
        blueColor: 'rgb(123, 0, 255)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        custom: ['YourCustomFont', 'sans-serif'],
        framer: ['Unbounded', 'Unbounded Placeholder', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 15s linear infinite', // Define the animation
        sponsors: 'scroll 100s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-300%)' },
        },
        sponsors: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
