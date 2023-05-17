module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'prayer-background': "url('/gcc_web/public/pexels-luis-quintero-2774570.jpg')"
      },
      sizes: {
        section: "472px"
      },
      colors: {
        color: "#002237",
        blueshDarkGray: "#abb8c3",
        lightGray: "#eaeaea"
      },
    },
  },
  plugins: [

  ],
}
