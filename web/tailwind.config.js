module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#e9edef",
          dark: "#2c2f34",
          soft: "#6c6d70"
        }
      },
      borderRadius: {
        "50px": "50px"
      },
      boxShadow: {
        "neumorp": "15px 15px 30px #c3cdd9, -15px -15px 30px #ffffff",
        "input-neumorp": "inset 7px 7px 15px #c3cdd9, inset -7px -7px 15px #ffffff",
        "neumorp-dark": "15px 15px 30px #25282c, -15px -15px 30px #33363c",
        "input-neumorp-dark": "inset 15px 15px 30px #25282c, -15px -15px 30px #33363c",
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
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'dark'],
  },
  plugins: [],
}
