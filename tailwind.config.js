export default {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        text: 'var(--color-text)',
        background: 'var(--color-background)',
        'background-lighter': 'var(--color-background-lighter)',
        border: 'var(--color-border)',
        orange: {
          100: 'var(--color-orange-100)',
          200: 'var(--color-orange-200)',
          300: 'var(--color-orange-300)',
          400: 'var(--color-orange-400)',
          500: 'var(--color-orange-500)',
          600: 'var(--color-orange-600)',
          700: 'var(--color-orange-700)',
          800: 'var(--color-orange-800)',
          900: 'var(--color-orange-900)'
        },
      },
      boxShadow: {
        DEFAULT: '0 10px 15px -3px var(--shadow), 0 4px 6px -2px var(--shadow)'
      },
      rotate: {
        226: '226deg'
      }
    }
  }
}
