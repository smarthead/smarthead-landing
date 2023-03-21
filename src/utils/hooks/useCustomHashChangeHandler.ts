import { UseCasesPinnedScrollReturnValue } from '../../components/pageSections/Cases/utils/useCasesPinnedScroll';
import { useCallback, useEffect, useRef } from 'react';
import { scrollTo } from '../scroll';

export function useStack<ElemType>() {
    const scrollPositionRef = useRef<ElemType[]>([]);

    const push = useCallback((newElem: ElemType) => {
        scrollPositionRef.current.push(newElem);
    }, []);

    const pop = useCallback(() => {
        return scrollPositionRef.current.pop();
    }, []);

    return {
        push,
        pop,
        length: scrollPositionRef.current.length,
    };
}

export interface UseSavedScrollPositionReturnedValue {
    getScrollPosition: () => number | undefined;
    setScrollPosition: (scrollPosition: number) => void;
}

export const useSavedScrollPosition =
    (): UseSavedScrollPositionReturnedValue => {
        const { push, pop } = useStack<number>();

        const getScrollPosition = () => pop();
        const setScrollPosition = (scrollPosition: number) => {
            push(scrollPosition);
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
            //const oldHash = calcHashPart(e.oldURL);
            const newHash = calcHashPart(e.newURL);

            // if (oldHash === '') {
            //     console.log('alarm');
            //     scrollPositionContext?.setScrollPosition(window.scrollY);
            // }
            if (newHash === '') {
                const currentPosition =
                    scrollPositionContext?.getScrollPosition() || 0;
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
