import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import '../styles/index.scss';

import Hero from '../components/pageSections/Hero';
import HowWeWork from '../components/pageSections/HowWeWork';
import WhatWeDo from '../components/pageSections/WhatWeDo';
import Acquaintance from '../components/pageSections/Acquaintance';
import JoinUs from '../components/pageSections/JoinUs';
import Partners from '../components/pageSections/Partners';
import Cases from '../components/pageSections/Cases';
import Footer from '../components/pageSections/Footer';
import Tagline from '../components/pageSections/Tagline';
import { navigation } from '../components/shared/navigation';
import { scrollToSection } from '../utils/scroll';
import CookiesNotification from '../components/shared/CookiesNotification';

const IndexPage = () => {
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
                <meta charSet="utf-8" />
                <title>SmartHead — разработка цифровых продуктов</title>
                <meta
                    property="og:title"
                    content="SmartHead — разработка цифровых продуктов"
                />
                <meta property="og:site_name" content="SmartHead" />
                <meta
                    property="og:description"
                    name="description"
                    content="Разрабатываем proof of concept, запускаем MVP и масштабируем цифровые продукты. Формируем команды и процессы разработки, ищем решения нетиповых задач."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://smarthead.ru/" />
                <meta
                    property="og:image"
                    content="https://smarthead.ru/SmartHead-Logo.png"
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
            <Tagline />
            <Acquaintance id={navigation.aboutUs} />
            <JoinUs id={navigation.vacancies} />
            <Footer id={navigation.contacts} />
            {!cookiesAccepted && (
                <CookiesNotification
                    clickHandler={() => {
                        setCookiesAccepted(true);
                        localStorage.setItem('cookiesAccepted', 'true');
                        // TODO: Google TagManager event
                    }}
                />
            )}
        </div>
    );
};

export default IndexPage;
