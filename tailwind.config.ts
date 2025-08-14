import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0e1116',
        panel: '#f7f7f9',
        primary: '#0066ff',
        accent: '#14b8a6',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        xl: '14px'
      }
    },
  },
  plugins: [],
}
export default config
