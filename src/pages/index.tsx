import React from 'react';

import '../styles/index.scss';

import Hero from '../components/pageSections/Hero';
import HowWeWork from '../components/pageSections/HowWeWork';
import WhatWeDo from '../components/pageSections/WhatWeDo';
import Acquaintance from '../components/pageSections/Acquaintance';
import JoinUs from '../components/pageSections/JoinUs';

const IndexPage = () => (
    <div>
        <Hero />
        <HowWeWork />
        <WhatWeDo />
        <Acquaintance />
        <JoinUs />
    </div>
);

export default IndexPage;
