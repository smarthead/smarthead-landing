import React from 'react';
import { Helmet } from 'react-helmet';

const HeadEn: React.FC = () => (
    <Helmet>
        <title>SmartHead — digital product development</title>
        <meta
            property="og:title"
            content="SmartHead — digital product development"
        />
        <meta property="og:site_name" content="SmartHead" />
        <meta
            property="og:description"
            name="description"
            content="We develop proof of concept, launch MVPs and scale digital products. We build teams and development processes, find offbeat solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smarthead.digital/" />
        <meta
            property="og:image"
            content="https://smarthead.digital/SmartHead-Logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
            name="facebook-domain-verification"
            content="ypjtjqnhfbwzzlc83uqjihzeaogz26"
        ></meta>
        <link
            type="text/plain"
            rel="author"
            href="https://smarthead.digital/humans.txt"
        />
    </Helmet>
);

export default HeadEn;
