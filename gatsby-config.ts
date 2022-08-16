import type { GatsbyConfig } from 'gatsby';

const isEnLanguange = process.env.GATSBY_ACTIVE_ENV === 'en';

const folderPath = `./src/localization/${isEnLanguange ? 'en' : 'ru'}`;
const indexPath = `${folderPath}/pages`;
const staticPath = `${folderPath}/static`;

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
            resolve: 'gatsby-plugin-static-folders',
            options: {
                folders: [staticPath],
            },
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: indexPath,
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
