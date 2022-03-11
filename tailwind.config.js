const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx}', 'index.html'],
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        color: {
          board: 'var(--color-board-bg)',
          input: 'var(--color-input-bg)',
          button: 'var(--color-button-bg)',
          buttonHover: 'var(--color-button-bg-hover)',
          listHover: 'var(--color-list-bg-hover)',
          remove: 'var(--color-remove-bg)',
        }
      },
      borderColor: {
        color: {
          board: 'var(--color-board-border)',
          input: 'var(--color-input-border)',
          button: 'var(--color-button-border)',
        }
      },
      textColor: {
        color: {
          header: 'var(--color-header-text)',
          input: 'var(--color-input-text)',
          button: 'var(--color-button-text)',
          list: 'var(--color-list-text)',
          remove: 'var(--color-remove-text)',
        }
      },
      ringColor: {
      color: {
        inputFocus: 'var(--color-input-ring)',
      }
    },
      colors: {
        cyan: colors.cyan
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
