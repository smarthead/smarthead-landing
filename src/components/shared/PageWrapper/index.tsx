import React, { useState } from 'react';

import StickyHeader from '../StickyHeader';
import Hero from '../../pageSections/Hero';
import CookiesNotification from '../CookiesNotification';
import { CasesScrollContext } from '../../pageSections/Cases/utils/context';

import { casesData } from '../../../localization/ru/data/casesData';
import heroData from '../../../localization/ru/data/Hero.json';
import cookiesNotificationData from '../../../localization/ru/data/CookiesNotification.json';

import { useFirstScrollFix } from '../../../utils/hooks/useFirstScrollFix';
import { useCasesPinnedScroll } from '../../pageSections/Cases/utils/useCasesPinnedScroll';
import { useCustomHistoryPopstate } from '../../../utils/hooks/useCustomHistoryPopstate';
import { removeLastFromArray } from '../../../utils/removeLastFromArray';

const MENU_LINKS_WITHOUT_CONTACTS = removeLastFromArray(heroData.header.menu);

interface PageWrapperProps {
    Helmet: React.ReactNode;
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ Helmet, children }) => {
    useFirstScrollFix();

    const [heroSectionHeight, setHeroScreenHeight] = useState<number | null>(
        null
    );
    const handleHeroScreenHeight = (height: number) => {
        setHeroScreenHeight(height);
    };

    const casesScrollContext = useCasesPinnedScroll(casesData.casesList.length);
    useCustomHistoryPopstate(casesScrollContext);

    return (
        <div className="main">
            {Helmet}

            <CasesScrollContext.Provider value={casesScrollContext}>
                <StickyHeader
                    menuLinks={MENU_LINKS_WITHOUT_CONTACTS}
                    mobileMenuLinks={heroData.header.menu}
                    buttonText={'НАПИШИТЕ НАМ'}
                    heroSectionHeight={heroSectionHeight}
                />

                <Hero
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
