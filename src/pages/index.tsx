import React from 'react';

import '../styles/index.scss';

import Header from '../components/layout/Header';
import Hero from '../components/pageSections/Hero';
import HowWeWork from '../components/pageSections/HowWeWork';

const IndexPage = () => (
    <div>
        <Hero />
        <HowWeWork />
        {/* <Header title="Hello, World!" /> */}
    </div>
);

export default IndexPage;
