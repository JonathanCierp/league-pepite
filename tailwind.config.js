const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  //purge: [],
  jit: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'progress-circular-rotate': 'progress-circular-rotate 1.4s linear infinite',
        'progress-circular-dash': 'progress-circular-dash 1.4s ease-in-out infinite'
      },
      keyframes: {
        'progress-circular-rotate': {
          to: { transform: 'rotate(1turn)' }
        },
        'progress-circular-dash': {
          '0%': {
            'stroke-dasharray': '1, 200',
            'stroke-dashoffset': '0'
          },
          '50%': {
            'stroke-dasharray': '100, 200',
            'stroke-dashoffset': '-15px'
          },
          to: {
            'stroke-dasharray': '100, 200',
            'stroke-dashoffset': '-125px'
          }
        }
      }
    },
    colors: {
      ...colors,
      text: 'var(--color-text)',
      background: 'var(--color-background)',
      'background-lighter': 'var(--color-background-lighter)',
      blue: {
        100: 'var(--color-blue-100)',
        200: 'var(--color-blue-200)',
        300: 'var(--color-blue-300)',
        400: 'var(--color-blue-400)',
        500: 'var(--color-blue-500)',
        600: 'var(--color-blue-600)',
        700: 'var(--color-blue-700)',
        800: 'var(--color-blue-800)',
        900: 'var(--color-blue-900)'
      },
      red: {
        100: 'var(--color-red-100)',
        200: 'var(--color-red-200)',
        300: 'var(--color-red-300)',
        400: 'var(--color-red-400)',
        500: 'var(--color-red-500)',
        600: 'var(--color-red-600)',
        700: 'var(--color-red-700)',
        800: 'var(--color-red-800)',
        900: 'var(--color-red-900)'
      },
      green: {
        100: 'var(--color-green-100)',
        200: 'var(--color-green-200)',
        300: 'var(--color-green-300)',
        400: 'var(--color-green-400)',
        500: 'var(--color-green-500)',
        600: 'var(--color-green-600)',
        700: 'var(--color-green-700)',
        800: 'var(--color-green-800)',
        900: 'var(--color-green-900)'
      },
      border: 'var(--color-border)'
    },
    boxShadow: {
      DEFAULT: '0 10px 15px -3px var(--shadow), 0 4px 6px -2px var(--shadow)'
    }
  },
  variants: {
    boxShadow: ['focus', 'responsive'],
    cursor: ['disabled'],
    color: ['disabled'],
    backgroundColor: ['disabled', 'hover', 'active', 'responsive'],
    borderColor: ['disabled', 'focus']
  },
  plugins: []
}
