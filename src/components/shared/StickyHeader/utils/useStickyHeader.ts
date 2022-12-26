import {
    useVerticalScroll,
    VerticalScrollDirection,
} from '../../../../utils/hooks/useVerticalScroll';
import { useEffect, useRef } from 'react';
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

    const scrollY = useVerticalScroll();

    useEffect(() => {
        if (
            isMobileMenuOpened ||
            isScrollBehaviourDisabled.current ||
            !headerDomElem
        ) {
            return;
        }

        const step = scrollY.current - scrollY.previous;

        if (scrollY.current > Number(firstScreenHeight)) {
            if (scrollY.direction === VerticalScrollDirection.up) {
                showStickyHeader(headerDomElem, step);
            } else if (scrollY.direction === VerticalScrollDirection.down) {
                hideStickyHeader(headerDomElem, step);
            }
        } else {
            hideStickyHeader(headerDomElem, step);
        }
    }, [isMobileMenuOpened, headerDomElem, firstScreenHeight, scrollY]);

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
