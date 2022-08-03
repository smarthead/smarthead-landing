import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import '../../styles/index.scss';

import Hero from '../pageSections/Hero';
import HowWeWork from '../pageSections/HowWeWork';
import WhatWeDo from '../pageSections/WhatWeDo';
import Acquaintance from '../pageSections/Acquaintance';
import JoinUs from '../pageSections/JoinUs';
import Partners from '../pageSections/Partners';
import Cases from '../pageSections/Cases';
import Footer from '../pageSections/Footer';
import Tagline from '../pageSections/Tagline';
import { navigation } from '../shared/navigation';
import { scrollToSection } from '../../utils/scroll';
import CookiesNotification from '../shared/CookiesNotification';

import heroData from '../../data/ru/Hero.json';
import howWeWorkData from '../../data/ru/HowWeWork.json';
import whatWeDoData from '../../data/ru/WhatWeDo.json';
import partnersData from '../../data/ru/Partners.json';
import { casesData } from '../../data/ru/casesData';

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

            <Hero data={heroData} />
            <HowWeWork data={howWeWorkData} />
            <WhatWeDo id={navigation.services} data={whatWeDoData} />
            <Cases id={navigation.cases} data={casesData} />
            <Partners data={partnersData} />
            <Tagline />
            <Acquaintance id={navigation.aboutUs} />
            <JoinUs id={navigation.vacancies} />
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
