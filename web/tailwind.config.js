module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-gray": "#e9edef",
        "soft-gray": "#eaedf4",
        "light": "#6c6d70"
      },
      borderRadius: {
        "br-50": "50px"
      },
      boxShadow: {
        "neumorp": "15px 15px 30px #c3cdd9, -15px -15px 30px #ffffff",
        "input-neumorp": "inset 7px 7px 15px #c3cdd9, inset -7px -7px 15px #ffffff"
      },
      width: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px"
      },
      height: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px"
      },
      margin: {
        "center": "0 auto"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
