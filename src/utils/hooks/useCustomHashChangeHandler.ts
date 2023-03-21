import { UseCasesPinnedScrollReturnValue } from '../../components/pageSections/Cases/utils/useCasesPinnedScroll';
import { useEffect, useRef } from 'react';
import { scrollTo } from '../scroll';

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
                    scrollPositionContext?.getScrollPosition() | 0;
                scrollTo(currentPosition);
            }

            if (newHash === 'cases') {
                history.replaceState('', '', '/#cases');
                casesScrollContext?.jumpToCase(0);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    });
}
