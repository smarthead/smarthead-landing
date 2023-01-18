import {
    useVerticalScroll,
    VerticalScrollDirection,
} from '../../../../utils/hooks/useVerticalScroll';
import { useEffect } from 'react';
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
}: UseStickyHeaderArgs) => {
    const scrollY = useVerticalScroll();

    useEffect(() => {
        if (isMobileMenuOpened || !headerDomElem) {
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
    });
};
