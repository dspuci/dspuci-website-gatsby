module.exports = {
  siteMetadata: {
    title: `Delta Sigma Pi | Pi Sigma`,
    siteUrl: `https://www.dspuci.com`,
    description: `Website for the Pi Sigma Chapter of the International Fraternity of Delta Sigma Pi located at UC Irvine`,
  },
  plugins: [
    // TO CHANGE BIO CHANGE THIS
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1HMZMGACdCa6ZbkbhadXYpsoCCTYivKgqdGPssBk_OMw',
          worksheetTitle: 'Summer 2020',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Full Time Offers 2021',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1CF92edHHjq2C90Guep9t5l9d5wt9sn8XTv1jnlqqCs4',
          worksheetTitle: 'Directors Summer 2020',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1TYYVzl9wHkFFXd8PbZGxAc0FIV3A8sf5MCNvKVcJxDM',
          worksheetTitle: 'EC Summer 2020',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Internships 2021',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Full Time Offers 2020',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Internships 2020',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Full Time Offers 2019',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Internships 2019',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Full Time Offers 2018',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Internships 2018',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Full Time Offers 2017',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Internships 2017',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Full Time Offers 2016',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Internships 2016',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Full Time Offers 2015',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Internships 2015',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Full Time Offers 2014',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1rAwRsgGkS9dIdi0K48onDa2_E61j4yfHjR2Rv2dsq9g',
          worksheetTitle: 'Internships 2014',
          credentials: require('./delta-sigma-pi-website-501ee1cf0a8f.json')
      }
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
        path: `${__dirname}/static/images/families/winter20/`,
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
        icon: `src/images/dsp-sigil.png`
      }
    }
  ],
}
