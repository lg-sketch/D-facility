/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D1DBF',
        primaryDark: '#0C0C66',
        primaryLight: '#4750FF',
        accentYellow: '#F4B740',
        backgroundBase: '#E9ECFF',
        backgroundSurface: '#F8F9FF',
        textPrimary: '#0B0C24',
        textSecondary: '#505272',
        mutedLavender: '#D8DCFF',
        success: '#4FD1C5',
      },
      fontFamily: {
        sans: ['Inter', '"SF Pro Display"', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Inter', '"SF Pro Display"', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 40px rgba(13,29,255,0.15)',
      },
      borderRadius: {
        card: '32px',
      },
      backgroundImage: {
        'lavender-gradient': 'linear-gradient(135deg, #E9ECFF 0%, #C9D2FF 100%)',
        'primary-radial': 'radial-gradient(circle at 20% 20%, rgba(71,80,255,0.35), transparent 60%)',
      },
    },
  },
  plugins: [],
}

