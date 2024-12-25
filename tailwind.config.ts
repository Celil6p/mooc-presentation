// tailwind.config.ts

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-delay': 'fadeInUp 1s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'slide-in-delay-1': 'slideIn 0.8s ease-out 0.2s forwards',
        'slide-in-delay-2': 'slideIn 0.8s ease-out 0.4s forwards',
        'slide-in-delay-3': 'slideIn 0.8s ease-out 0.6s forwards',
        pop: 'pop 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pop: {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0.4',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}