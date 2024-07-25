import React from 'react';

import PageWrapper from '@/shared/PageWrapper';
import HowWeWork from '@/pageSections/HowWeWork';
import WhatWeDo from '@/pageSections/WhatWeDo';
import Partners from '@/pageSections/Partners';
import Cases from '@/pageSections/Cases';
import Testimonials from '@/pageSections/Testimonials';
import FooterEn from '@/pageSections/FooterEn';
import { FooterContactsEn } from '@/pageSections/FooterContactsEn';

import howWeWorkData from '../data/HowWeWork.json';
import whatWeDoData from '../data/WhatWeDo.json';
import { partnersData } from '../data/partnersData';
import { testimonialsData } from '../data/testimonialsData';
import { casesEnData } from '../data/casesData';
import { navigation } from '@/shared/navigation';

import '@/styles/index.scss';

const EnLayout = () => (
    <PageWrapper isEnglish>
        <HowWeWork data={howWeWorkData} />
        <WhatWeDo id={navigation.services} data={whatWeDoData} />
        <Cases id={navigation.cases} data={casesEnData} />
        <Partners data={partnersData} />
        <Testimonials
            id={navigation.testimonials}
            data={testimonialsData}
            isEnglish
        />
        <FooterEn id={navigation.contacts} />
        <FooterContactsEn />
    </PageWrapper>
);

export default EnLayout;
