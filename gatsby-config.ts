import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'SmartHead — разработка цифровых продуктов',
        siteUrl: 'https://smarthead.ru',
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/assets/images/favicon.svg',
            },
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: process.env.BUCKET_NAME || 'test',
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-P4LPG26',
            },
        },
    ],
};

export default config;
