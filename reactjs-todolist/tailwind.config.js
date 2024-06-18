/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shine: {
          '0%': { boxShadow: '0 0 5px 5px rgba(255, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px 20px rgba(255, 255, 255, 1)' },
          '100%': { boxShadow: '0 0 5px 5px rgba(255, 255, 255, 0.5)' },
        },
      }
    },
    backgroundImage: {
      'button': "url('./assets/image.jpg')",
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      float: 'float 2s infinite',
      shine: 'shine 2s infinite',
    }
  },
  variants: { 
    extend: {
      animation: ['hover'],
    }
  },
  plugins: [],
}

