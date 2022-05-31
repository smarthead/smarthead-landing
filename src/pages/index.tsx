import React from 'react';

import '../styles/index.scss';

import Hero from '../components/pageSections/Hero';
import HowWeWork from '../components/pageSections/HowWeWork';
import WhatWeDo from '../components/pageSections/WhatWeDo';
import Acquaintance from '../components/pageSections/Acquaintance';

const IndexPage = () => (
    <div>
        <Hero />
        <HowWeWork />
        <WhatWeDo />
        <Acquaintance />
    </div>
);

export default IndexPage;
