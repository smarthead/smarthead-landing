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
    scrollEndTimeout?: number;
}

export const useStickyHeader = ({
    firstScreenHeight,
    headerDomElem,
}: UseStickyHeaderArgs) => {
    const scrollY = useVerticalScroll();

    useEffect(() => {
        if (!headerDomElem) {
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
    }, [headerDomElem, firstScreenHeight, scrollY]);

    useFixStickyHeaderMacOSscroll({
        headerDomElem,
        scrollTop: scrollY,
    });
};
