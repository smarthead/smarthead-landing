import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import '../../styles/index.scss';

import Hero from '../pageSections/Hero';
import HowWeWork from '../pageSections/HowWeWork';
import WhatWeDo from '../pageSections/WhatWeDo';
import Partners from '../pageSections/Partners';
import Cases from '../pageSections/Cases';
import Footer from '../pageSections/Footer';
import { navigation } from '../shared/navigation';
import { scrollToSection } from '../../utils/scroll';
import CookiesNotification from '../shared/CookiesNotification';

const RuLayout = () => {
    const [cookiesAccepted, setCookiesAccepted] = useState(true);
    useEffect(() => {
        const hash = window.location.hash;
        if (hash.length > 0) {
            scrollToSection(hash, 0);
        }
        const localStorageCookiesAccepted =
            localStorage.getItem('cookiesAccepted');

        if (localStorageCookiesAccepted !== 'true') {
            setCookiesAccepted(false);
        }
    }, []);

    return (
        <div className="main">
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
                    content="We develop proof of concept, launch MVPs and scale digital products. We build teams and development processes, search for offbeat solutions."
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
            </Helmet>

            <Hero links={navigation} />
            <HowWeWork />
            <WhatWeDo id={navigation.services} />
            <Cases id={navigation.cases} />
            <Partners />
            <Footer id={navigation.contacts} />
            {!cookiesAccepted && (
                <CookiesNotification
                    clickHandler={() => {
                        setCookiesAccepted(true);
                        localStorage.setItem('cookiesAccepted', 'true');
                    }}
                />
            )}
        </div>
    );
};

export default RuLayout;
