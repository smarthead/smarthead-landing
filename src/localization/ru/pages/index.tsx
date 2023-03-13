import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import '../../../styles/index.scss';

import StickyHeader from '../../../components/shared/StickyHeader';
import Hero from '../../../components/pageSections/Hero';
import HowWeWork from '../../../components/pageSections/HowWeWork';
import WhatWeDo from '../../../components/pageSections/WhatWeDo';
import Acquaintance from '../../../components/pageSections/Acquaintance';
import JoinUs from '../../../components/pageSections/JoinUs';
import Partners from '../../../components/pageSections/Partners';
import Cases from '../../../components/pageSections/Cases';
import Testimonials from '../../../components/pageSections/Testimonials';
import Footer from '../../../components/pageSections/Footer';
import CookiesNotification from '../../../components/shared/CookiesNotification';
import { FooterContacts } from '../../../components/pageSections/FooterContacts';

import { CasesScrollContext } from '../../../components/pageSections/Cases/utils/context';
import { useCasesPinnedScroll } from '../../../components/pageSections/Cases/utils/useCasesPinnedScroll';
import { removeLastFromArray } from '../../../utils/removeLastFromArray';
import { useCustomHistoryPopstate } from '../../../utils/hooks/useCustomHistoryPopstate';

import heroData from '../data/Hero.json';
import howWeWorkData from '../data/HowWeWork.json';
import whatWeDoData from '../data/WhatWeDo.json';
import { partnersData } from '../data/partnersData';
import cookiesNotificationData from '../data/CookiesNotification.json';
import { casesData } from '../data/casesData';
import { navigation } from '../../../components/shared/navigation';
import { testimonialsData } from '../data/testimonialsData';

const MENU_LINKS_WITHOUT_CONTACTS = removeLastFromArray(heroData.header.menu);

const RuLayout = () => {
    const [cookiesAccepted, setCookiesAccepted] = useState(true);
    useEffect(() => {
        const localStorageCookiesAccepted =
            localStorage.getItem('cookiesAccepted');

        if (localStorageCookiesAccepted !== 'true') {
            setCookiesAccepted(false);
        }
    }, []);

    const [heroSectionHeight, setHeroScreenHeight] = useState<number | null>(
        null
    );
    const handleHeroScreenHeight = (height: number) => {
        setHeroScreenHeight(height);
    };

    const casesScrollContext = useCasesPinnedScroll(casesData.casesList.length);
    useCustomHistoryPopstate(casesScrollContext);

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

            <CasesScrollContext.Provider value={casesScrollContext}>
                <StickyHeader
                    menuLinks={MENU_LINKS_WITHOUT_CONTACTS}
                    mobileMenuLinks={heroData.header.menu}
                    buttonText={'НАПИШИТЕ НАМ'}
                    heroSectionHeight={heroSectionHeight}
                />

                <Hero
                    data={heroData}
                    handleHeroScreenHeight={handleHeroScreenHeight}
                />
                <HowWeWork data={howWeWorkData} />
                <WhatWeDo id={navigation.services} data={whatWeDoData} />
                <Cases id={navigation.cases} data={casesData} />
            </CasesScrollContext.Provider>

            <Partners data={partnersData} />
            <Testimonials
                id={navigation.testimonials}
                data={testimonialsData}
            />
            <Acquaintance id={navigation.aboutUs} />
            <JoinUs id={navigation.vacancies} />
            <Footer id={navigation.contacts} />
            <FooterContacts />

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
