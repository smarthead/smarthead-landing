import { useEffect } from 'react';
import { hideStickyHeader } from './hideStickyHeader';
import { ScrollTop } from '../../../../utils/hooks/useVerticalScroll';

const getPageHeight = () =>
    Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );

const getPageBottomScrollHeight = () =>
    getPageHeight() - document.documentElement.clientHeight;

// fix for macOS bouncing scroll
export const useFixStickyHeaderMacOSscroll = (
    headerDomElem: HTMLElement | null,
    scrollY: ScrollTop
) => {
    useEffect(() => {
        if (
            headerDomElem &&
            (scrollY.current <= 0 ||
                scrollY.current > getPageBottomScrollHeight())
        ) {
            hideStickyHeader(
                headerDomElem,
                parseFloat(getComputedStyle(headerDomElem).height)
            );
        }
    }, [scrollY, headerDomElem, hideStickyHeader]);
};
