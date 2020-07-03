require('dotenv').config()
const queries = require('./src/utils/algolia-queries')

module.exports = {
  siteMetadata: {
    title: `Willian Monteiro`,
    position: `Desenvolvedor frontend`,
    description: `Software Engineer & Desenvolvedor Front-end. Crio experiências digitais que unem estratégia, design e tecnologia.`,
    author: `@willianmonteiro`,
    siteUrl: `https://willianmonteiro.netlify.app/`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            }
          },
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs',
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Willian Monteiro - Desenvolvedor Web`,
        short_name: `Willian Monteiro`,
        start_url: `/`,
        background_color: `#282A36`,
        theme_color: `#282A36`,
        display: `minimal-ui`,
        icon: `src/images/willian-icon.jpg`,
      },
    },
    // enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
