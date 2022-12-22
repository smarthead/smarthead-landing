import {
    useVerticalScroll,
    VerticalScrollDirection,
} from '../../../../utils/hooks/useVerticalScroll';
import { useCallback, useEffect, useRef } from 'react';
import { useWindowScrollEnd } from '../../../../utils/hooks/useWindowScrollEnd';
import { showStickyHeader } from './showStickyHeader';
import { hideStickyHeader } from './hideStickyHeader';
import { useFixStickyHeaderMacOSscroll } from './useFixStickyHeaderMacOSscroll';

interface UseStickyHeaderArgs {
    firstScreenHeight: number | null;
    headerDomElem: HTMLElement | null;
    isMobileMenuOpened: boolean;
    scrollEndTimeout?: number;
}

export const useStickyHeader = ({
    firstScreenHeight,
    headerDomElem,
    isMobileMenuOpened,
    scrollEndTimeout = 200,
}: UseStickyHeaderArgs) => {
    const isScrollBehaviourDisabled = useRef(false);
    const setIsScrollBehaviorDisabled = (value: boolean) => {
        isScrollBehaviourDisabled.current = value;
    };

    const [scrollY, scrollYDirection] = useVerticalScroll();

    const handleScroll = useCallback(() => {
        if (
            isMobileMenuOpened ||
            isScrollBehaviourDisabled.current ||
            !headerDomElem
        ) {
            return;
        }

        const step = scrollY.current - scrollY.previous;

        if (scrollY.current > Number(firstScreenHeight)) {
            if (scrollYDirection === VerticalScrollDirection.up) {
                showStickyHeader(headerDomElem, step);
            } else {
                hideStickyHeader(headerDomElem, step);
            }
        } else {
            hideStickyHeader(headerDomElem, step);
        }
    }, [scrollY, scrollYDirection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useFixStickyHeaderMacOSscroll({
        headerDomElem,
        scrollTop: scrollY,
        isMobileMenuOpened,
    });

    useWindowScrollEnd(() => {
        if (isScrollBehaviourDisabled.current) {
            setIsScrollBehaviorDisabled(false);
        }
    }, scrollEndTimeout);

    return {
        isScrollBehaviourDisabled,
        setIsScrollBehaviorDisabled,
    };
};
