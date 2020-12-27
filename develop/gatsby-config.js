module.exports = {
  siteMetadata: {
    title: 'RamgenDeploy',
    siteUrl: `https://ramgendeploy.com`,
    description: `Projects made by Ramiro`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-5XDM547XH6',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ramgen Projects`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
