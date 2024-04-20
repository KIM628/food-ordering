/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'tl': '100px',
      },
      colors: {
        primary: '#f13a01',
        biege: '#e0d8cc',
        org: '#e99331',
        brown:'#A0736E'
      },
      backgroundImage: {
        'body': "url('/assets/img/body0.jpeg')",
        'hero': "url('/assets/img/hero2.jpg')",
        'menu': "url('/assets/img/menu.jpeg')",
        'footer': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
