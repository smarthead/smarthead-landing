import React from 'react';

import PageWrapper from '@/shared/PageWrapper';
import HowWeWork from '@/pageSections/HowWeWork';
import WhatWeDo from '@/pageSections/WhatWeDo';
import Acquaintance from '@/pageSections/Acquaintance';
import JoinUs from '@/pageSections/JoinUs';
import Partners from '@/pageSections/Partners';
import Cases from '@/pageSections/Cases';
import Testimonials from '@/pageSections/Testimonials';
import Footer from '@/pageSections/Footer';
import { FooterContacts } from '@/pageSections/FooterContacts';

import howWeWorkData from '../data/HowWeWork.json';
import whatWeDoData from '../data/WhatWeDo.json';
import { partnersData } from '../data/partnersData';
import { casesRuData } from '../data/casesData';
import { testimonialsData } from '../data/testimonialsData';
import { navigation } from '@/shared/navigation';

import '@/styles/index.scss';

const RuLayout: React.FC = () => (
    <PageWrapper>
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
