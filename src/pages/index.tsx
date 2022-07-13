import React, { useEffect } from 'react';

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

const IndexPage = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash.length > 0) {
            scrollToSection(hash, 0);
        }
    }, []);
    return (
        <div>
            <Hero links={navigation} />
            <HowWeWork />
            <WhatWeDo id={navigation.services} />
            <Cases id={navigation.cases} />
            <Partners />
            <Tagline />
            <Acquaintance id={navigation.aboutUs} />
            <JoinUs id={navigation.vacancies} />
            <Footer id={navigation.contacts} />
        </div>
    );
};

export default IndexPage;
