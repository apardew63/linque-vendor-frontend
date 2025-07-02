module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '480px',
      '1080': '1080px',
      '1280': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
      // Default Tailwind breakpoints
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl-default': '1536px',
    },
  },
  plugins: [],
}; 