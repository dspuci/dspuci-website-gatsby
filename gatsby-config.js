module.exports = {
  siteMetadata: {
    title: `Delta Sigma Pi | Pi Sigma`,
    siteUrl: `https://www.dspuci.com`,
    description: `Website for the Pi Sigma Chapter of the International Fraternity of Delta Sigma Pi located at UC Irvine`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `families`,
        path: `${__dirname}/static/images/families/summerfall23/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/static/images/gallery/`,
      },
    },
    `gatsby-transformer-excel`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Delta Sigma Pi - Pi Sigma Chapter`,
        short_name: `DSP`,
        start_url: `/`,
        icon: `src/images/dsp-sigil.png`,
      },
    },
  ],
}
