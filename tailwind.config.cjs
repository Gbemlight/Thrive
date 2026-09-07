module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f766e',
          50: '#ecfbf8',
          100: '#d8f7f2',
          200: '#aef0e4',
          300: '#7fe6d6',
          400: '#40d9c3',
          500: '#10b981',
          600: '#0f766e'
        },
        accent: '#10b981'
      },
      fontSize: {
        'display': ['3.25rem',{lineHeight:'1.02',fontWeight:'800'}],
      },
      spacing: {
        '9': '2.25rem',
        '18': '4.5rem'
      }
    }
  },
  plugins: []
}
