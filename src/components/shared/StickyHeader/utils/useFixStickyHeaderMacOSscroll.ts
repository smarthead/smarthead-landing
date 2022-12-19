import { useEffect } from 'react';

import { hideStickyHeader } from './hideStickyHeader';
import { checkIsMobileView } from '../../../../utils/checkIsMobileVIew';
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

const isMenuClosedOnDesktop = (isMenuOpened: boolean) =>
    !isMenuOpened && !checkIsMobileView();

const isScrolledMoreThanNormal = (scrollTop: number) =>
    scrollTop <= 0 || scrollTop > getPageBottomScrollHeight();

interface UseFixStickyHeaderMacOSscrollArgs {
    headerDomElem: HTMLElement | null;
    scrollTop: ScrollTop;
    isMenuOpened: boolean;
}

// fix for macOS bouncing scroll
export const useFixStickyHeaderMacOSscroll = ({
    headerDomElem,
    scrollTop,
    isMenuOpened,
}: UseFixStickyHeaderMacOSscrollArgs) => {
    useEffect(() => {
        if (
            headerDomElem &&
            isScrolledMoreThanNormal(scrollTop.current) &&
            isMenuClosedOnDesktop(isMenuOpened)
        ) {
            hideStickyHeader(
                headerDomElem,
                parseFloat(getComputedStyle(headerDomElem).height)
            );
        }
    }, [scrollY, headerDomElem, hideStickyHeader]);
};
