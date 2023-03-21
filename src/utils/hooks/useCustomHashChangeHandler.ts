import { UseCasesPinnedScrollReturnValue } from '../../components/pageSections/Cases/utils/useCasesPinnedScroll';
import { useEffect, useRef } from 'react';
import { scrollTo, scrollToSection } from '../scroll';

export interface UseSavedScrollPositionReturnedValue {
    getScrollPosition: () => number;
    setScrollPosition: (scrollPosition: number) => void;
}

export const useSavedScrollPosition =
    (): UseSavedScrollPositionReturnedValue => {
        const scrollPositionRef = useRef(0);

        const getScrollPosition = () => scrollPositionRef.current;

        const setScrollPosition = (scrollPosition: number) => {
            scrollPositionRef.current = scrollPosition;
        };

        return {
            getScrollPosition,
            setScrollPosition,
        };
    };

const calcHashPart = (url: string) => {
    return url.includes('#') ? url.split('#')[1] : '';
};

export function useCustomHashChangeHandler(
    casesScrollContext: UseCasesPinnedScrollReturnValue,
    scrollPositionContext: UseSavedScrollPositionReturnedValue
) {
    useEffect(() => {
        const handleHashChange = (e: HashChangeEvent) => {
            const oldHash = calcHashPart(e.oldURL);
            const newHash = calcHashPart(e.newURL);

            if (oldHash === '') {
                scrollPositionContext?.setScrollPosition(window.scrollY);
            }
            if (newHash === '') {
                const currentPosition =
                    scrollPositionContext?.getScrollPosition();
                console.log('getPosition', currentPosition);
                scrollTo(currentPosition);
            }

            if (newHash === 'cases') {
                scrollToSection('#cases', null, () => {
                    casesScrollContext?.jumpToCase(0);
                });
                history.replaceState('', '', '/#cases');
            } else {
                return;
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    });
}
