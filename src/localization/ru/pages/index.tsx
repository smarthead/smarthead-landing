import React from 'react';

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
