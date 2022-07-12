import React from 'react';

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

const IndexPage = () => {
    const links = {
        services: 'services',
        cases: 'cases',
        aboutUs: 'about-us',
        vacancies: 'vacancies',
        contacts: 'contacts',
    };
    return (
        <div>
            <Hero links={links} />
            <HowWeWork />
            <WhatWeDo id={links.services} />
            <Cases id={links.cases} />
            <Partners />
            <Tagline />
            <Acquaintance id={links.aboutUs} />
            <JoinUs id={links.vacancies} />
            <Footer id={links.contacts} />
        </div>
    );
};

export default IndexPage;
