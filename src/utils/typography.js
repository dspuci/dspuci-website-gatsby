import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Heebo", "sans-serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
  googleFonts: [
    {
      name: "Heebo",
      styles: ["500", "700"],
    },
    {
      name: "Lato",
      styles: ["400"],
    },
  ],
})

export default typography
