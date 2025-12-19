import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.75,
  headerFontFamily: ["Heebo", "sans-serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
  headerWeight: 700,
  boldWeight: 700,
  googleFonts: [
    {
      name: "Heebo",
      styles: ["300", "400", "500", "600", "700", "800"],
    },
    {
      name: "Lato",
      styles: ["300", "400", "700"],
    },
  ],
  overrideStyles: () => ({
    h1: {
      letterSpacing: "-0.02em",
      fontWeight: 700,
    },
    h2: {
      letterSpacing: "-0.01em",
      fontWeight: 600,
    },
    h3: {
      letterSpacing: "-0.01em",
      fontWeight: 500,
    },
    a: {
      color: "#9284cf",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    "a:hover": {
      color: "#b4a8e0",
    },
  }),
})

export default typography
