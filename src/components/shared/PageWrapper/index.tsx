import React, { useState } from 'react';

import StickyHeader from '../StickyHeader';
import Hero from '../../pageSections/Hero';
import CookiesNotification from '../CookiesNotification';
import { CasesScrollContext } from '../../pageSections/Cases/utils/context';

import { casesRuData } from '../../../localization/ru/data/casesData';
import { casesEnData } from '../../../localization/en/data/casesData';
import heroRuData from '../../../localization/ru/data/Hero.json';
import heroEnData from '../../../localization/en/data/Hero.json';
import cookiesNotificationRuData from '../../../localization/ru/data/CookiesNotification.json';
import cookiesNotificationEnData from '../../../localization/en/data/CookiesNotification.json';

import { useFirstScrollFix } from '../../../utils/hooks/useFirstScrollFix';
import { useCasesPinnedScroll } from '../../pageSections/Cases/utils/useCasesPinnedScroll';
import { useCustomHistoryPopstate } from '../../../utils/hooks/useCustomHistoryPopstate';
import { removeLastFromArray } from '../../../utils/removeLastFromArray';

interface PageWrapperProps {
    isEnglish?: boolean;
    Helmet: React.ReactNode;
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
    Helmet,
    children,
    isEnglish = false,
}) => {
    useFirstScrollFix();

    const [heroSectionHeight, setHeroScreenHeight] = useState<number | null>(
        null
    );
    const handleHeroScreenHeight = (height: number) => {
        setHeroScreenHeight(height);
    };

    const heroData = isEnglish ? heroEnData : heroRuData;
    const menuLinksWithoutContacts = removeLastFromArray(heroData.header.menu);
    const cookiesNotificationData = isEnglish
        ? cookiesNotificationEnData
        : cookiesNotificationRuData;
    const casesData = isEnglish ? casesEnData : casesRuData;

    const casesScrollContext = useCasesPinnedScroll(casesData.casesList.length);
    useCustomHistoryPopstate(casesScrollContext);
    return (
        <div className="main">
            {Helmet}

            <CasesScrollContext.Provider value={casesScrollContext}>
                <StickyHeader
                    menuLinks={menuLinksWithoutContacts}
                    mobileMenuLinks={heroData.header.menu}
                    buttonText={isEnglish ? 'CONTACT US' : 'НАПИШИТЕ НАМ'}
                    heroSectionHeight={heroSectionHeight}
                />

                <Hero
                    isEnglish={isEnglish}
                    data={heroData}
                    handleHeroScreenHeight={handleHeroScreenHeight}
                />
                {children}
            </CasesScrollContext.Provider>

            <CookiesNotification data={cookiesNotificationData} />
        </div>
    );
};

export default PageWrapper;
