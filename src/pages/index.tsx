import React from 'react';
import RuLayout from '../components/localization/RuLayout';
import EnLayout from '../components/localization/EnLayout';

const IndexPage = () => {
    console.log(process.env.LANGUAGE);
    console.log(process.env.TEST);
    // return process.env.LANGUAGE === 'EN' ? <EnLayout /> : <RuLayout />;
    return <EnLayout />;
};

export default IndexPage;
