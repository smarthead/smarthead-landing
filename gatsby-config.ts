import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Smarthead. Landing',
        siteUrl: 'https://smarthead.ru'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                'icon': 'src/images/icon.png',
            }
        },
    ]
};

export default config;
