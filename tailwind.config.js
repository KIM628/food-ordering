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
        primary:'#f13a01'
      },
      backgroundImage: {
        'hero': "url('/public/assets/img/body.jpeg')",
        'footer': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
