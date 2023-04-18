import React from 'react';
import { Helmet } from 'react-helmet';

import PageWrapper from '../../../components/shared/PageWrapper';
import HowWeWork from '../../../components/pageSections/HowWeWork';
import WhatWeDo from '../../../components/pageSections/WhatWeDo';
import Acquaintance from '../../../components/pageSections/Acquaintance';
import JoinUs from '../../../components/pageSections/JoinUs';
import Partners from '../../../components/pageSections/Partners';
import Cases from '../../../components/pageSections/Cases';
import Testimonials from '../../../components/pageSections/Testimonials';
import Footer from '../../../components/pageSections/Footer';
import { FooterContacts } from '../../../components/pageSections/FooterContacts';

import howWeWorkData from '../data/HowWeWork.json';
import whatWeDoData from '../data/WhatWeDo.json';
import { partnersData } from '../data/partnersData';
import { casesRuData } from '../data/casesData';
import { testimonialsData } from '../data/testimonialsData';
import { navigation } from '../../../components/shared/navigation';

import '../../../styles/index.scss';

const RuLayout: React.FC = () => (
    <PageWrapper
        Helmet={
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
                <link
                    type="text/plain"
                    rel="author"
                    href="https://smarthead.ru/humans.txt"
                />
            </Helmet>
        }
    >
        <HowWeWork data={howWeWorkData} />
        <WhatWeDo id={navigation.services} data={whatWeDoData} />
        <Cases id={navigation.cases} data={casesRuData} />
        <Partners data={partnersData} />
        <Testimonials id={navigation.testimonials} data={testimonialsData} />
        <Acquaintance id={navigation.aboutUs} />
        <JoinUs id={navigation.vacancies} />
        <Footer id={navigation.contacts} />
        <FooterContacts />
    </PageWrapper>
);

export default RuLayout;
