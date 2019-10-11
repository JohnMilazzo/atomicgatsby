module.exports = {
  siteMetadata: {
    siteTitle: `Atomic Gatsby`,
    siteUrl: `https://atomicgatsby.com`,
    siteTwitter: `@AtomicGatsby`,
    siteAuthor: `John Milazzo`,
    siteAuthorTwitter: `@John_Milazzo`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['UA-132741908-1'],
        // This object gets passed directly to the gtag config command
        // This config will be shared accross all trackingIds
        gtagConfig: {
          anonymize_ip: true
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'atomicgatsby.com',
        short_name: 'atomicgatsby',
        start_url: `/?utm_source=a2hs`,
        background_color: `#fff`,
        theme_color: `#663399`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/android-chrome-512x512.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://atomicgatsby.com',
        sitemap: 'https://atomicgatsby.com/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/'
          }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`]
      }
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ]
};
