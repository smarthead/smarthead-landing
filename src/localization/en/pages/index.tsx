import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import '../../../styles/index.scss';

import HeroEn from '../../../components/pageSections/HeroEn';
import HowWeWork from '../../../components/pageSections/HowWeWork';
import WhatWeDo from '../../../components/pageSections/WhatWeDo';
import Partners from '../../../components/pageSections/Partners';
import Cases from '../../../components/pageSections/Cases';
import FooterEn from '../../../components/pageSections/FooterEn';
import CookiesNotification from '../../../components/shared/CookiesNotification';

import { navigation } from '../../../components/shared/navigation';
import { scrollToSection } from '../../../utils/scroll';

import heroData from '../data/Hero.json';
import howWeWorkData from '../data/HowWeWork.json';
import whatWeDoData from '../data/WhatWeDo.json';
import { partnersData } from '../data/partnersData';
import cookiesNotificationData from '../data/CookiesNotification.json';
import { casesData } from '../data/casesData';
import Reviews from '../../../components/pageSections/Reviews';

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

            <HeroEn data={heroData} isEnglish={true} />
            <HowWeWork data={howWeWorkData} />
            <WhatWeDo id={navigation.services} data={whatWeDoData} />
            <Cases id={navigation.cases} data={casesData} />
            <Partners data={partnersData} />
            <Reviews id={navigation.reviews} />
            <FooterEn id={navigation.contacts} />

            {!cookiesAccepted && (
                <CookiesNotification
                    data={cookiesNotificationData}
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
