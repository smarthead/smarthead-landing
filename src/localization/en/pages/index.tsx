import React from 'react';

import PageWrapper from '../../../components/shared/PageWrapper';
import HowWeWork from '../../../components/pageSections/HowWeWork';
import WhatWeDo from '../../../components/pageSections/WhatWeDo';
import Partners from '../../../components/pageSections/Partners';
import Cases from '../../../components/pageSections/Cases';
import Testimonials from '../../../components/pageSections/Testimonials';
import FooterEn from '../../../components/pageSections/FooterEn';
import { FooterContactsEn } from '../../../components/pageSections/FooterContactsEn';

import howWeWorkData from '../data/HowWeWork.json';
import whatWeDoData from '../data/WhatWeDo.json';
import { partnersData } from '../data/partnersData';
import { testimonialsData } from '../data/testimonialsData';
import { casesEnData } from '../data/casesData';
import { navigation } from '../../../components/shared/navigation';

import '../../../styles/index.scss';

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
