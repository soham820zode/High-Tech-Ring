/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      colors: {
        brand: {
          deep: '#080A0F',
          metallic: '#0D111A',
          cyan: '#00E5FF',
          magenta: '#FF007A',
          amber: '#FF8A00',
        },
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        }
      }
    },
  },
  plugins: [],
}
