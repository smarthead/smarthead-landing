import React from 'react';
import RuLayout from '../components/localization/RuLayout';
import EnLayout from '../components/localization/EnLayout';

const IndexPage = () => {
    return process.env.LANGUAGE === 'EN' ? <EnLayout /> : <RuLayout />;
};

export default IndexPage;
