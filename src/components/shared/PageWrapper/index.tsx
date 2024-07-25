import React, { useCallback, useState } from 'react';

import HeadRu from '../HeadRu';
import HeadEn from '../HeadEn';
import StickyHeader from '../StickyHeader';
import Hero from '@/pageSections/Hero';
import CookiesNotification from '../CookiesNotification';
import { CasesScrollContext } from '@/pageSections/Cases/utils/context';

import { casesRuData } from '@/localizationRu/data/casesData';
import { casesEnData } from '@/localizationEn/data/casesData';
import heroRuData from '@/localizationRu/data/Hero.json';
import heroEnData from '@/localizationEn/data/Hero.json';
import cookiesNotificationRuData from '@/localizationRu/data/CookiesNotification.json';
import cookiesNotificationEnData from '@/localizationEn/data/CookiesNotification.json';

import { useFirstScrollFix } from '@/utils/hooks/useFirstScrollFix';
import { useCasesPinnedScroll } from '@/pageSections/Cases/utils/useCasesPinnedScroll';
import { useCustomHistoryPopstate } from '@/utils/hooks/useCustomHistoryPopstate';
import { removeLastFromArray } from '@/utils/removeLastFromArray';

interface PageWrapperProps {
    isEnglish?: boolean;
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
    children,
    isEnglish = false,
}) => {
    useFirstScrollFix();

    const [heroSectionHeight, setHeroScreenHeight] = useState<number | null>(
        null
    );
    const handleHeroScreenHeight = useCallback((height: number) => {
        setHeroScreenHeight(height);
    }, []);

    const heroData = isEnglish ? heroEnData : heroRuData;
    const menuLinksWithoutContacts = removeLastFromArray(heroData.header.menu);
    const cookiesNotificationData = isEnglish
        ? cookiesNotificationEnData
        : cookiesNotificationRuData;
    const casesData = isEnglish ? casesEnData : casesRuData;

    const casesScrollContext = useCasesPinnedScroll(casesData.casesList.length);
    useCustomHistoryPopstate(casesScrollContext);
    return (
        <>
            {isEnglish ? <HeadEn /> : <HeadRu />}

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
        </>
    );
};

export default PageWrapper;
