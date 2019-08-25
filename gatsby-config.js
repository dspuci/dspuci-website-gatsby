module.exports = {
  pathPrefix: `/dspuci-website-gatsby`,
  siteMetadata: {
    title: `Delta Sigma Pi | Pi Sigma`,
    siteUrl: `https://www.dspuci.com`,
    description: `Website for the Pi Sigma Chapter of the International Fraternity of Delta Sigma Pi located at UC Irvine`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `families`,
        path: `${__dirname}/static/images/families/winter19/`,
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
  ],
}
