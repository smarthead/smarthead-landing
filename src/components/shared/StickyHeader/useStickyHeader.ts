import {
    useVerticalScroll,
    VerticalScrollDirection,
} from '../../../utils/hooks/useVerticalScroll';
import { useCallback, useEffect, useRef } from 'react';
import { useWindowScrollEnd } from '../../../utils/hooks/useWindowScrollEnd';

const SCROLL_STEP = 4;
const BRAKING_COEFFICIENT = 0.7;

const showHeader = (headerDomElem: HTMLElement, step: number = SCROLL_STEP) => {
    if (!headerDomElem) return;

    const styles = getComputedStyle(headerDomElem);
    const previousTopValue = parseFloat(styles.top);

    if (previousTopValue > 0) return;
    const currentTopValue =
        previousTopValue + Math.abs(step) * BRAKING_COEFFICIENT;

    if (currentTopValue > 0) {
        headerDomElem.style.top = `0px`;
    } else {
        headerDomElem.style.top = `${currentTopValue.toFixed(1)}px`;
    }
};

const hideHeader = (headerDomElem: HTMLElement, step: number = SCROLL_STEP) => {
    if (!headerDomElem) return;

    const styles = getComputedStyle(headerDomElem);
    const previousTopValue = parseFloat(styles.top);

    const headerHeight = parseFloat(styles.height);

    if (previousTopValue < headerHeight * -1) return;
    const currentTopValue =
        previousTopValue - Math.abs(step) * BRAKING_COEFFICIENT;

    if (currentTopValue < headerHeight * -1) {
        headerDomElem.style.top = `-${headerHeight}px`;
    } else {
        headerDomElem.style.top = `${currentTopValue.toFixed(1)}px`;
    }
};

// const isHeaderInFinalPosition = (headerDomElem: HTMLElement) => {
//     if (headerDomElem) {
//         const headerHeight = parseFloat(getComputedStyle(headerDomElem).height);
//         const headerTop = parseFloat(getComputedStyle(headerDomElem).top);
//
//         return headerTop === -headerHeight || headerTop === 0;
//     }
// };

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

export const useStickyHeader = (
    firstScreenHeight: number | null,
    headerDomElem: HTMLElement | null,
    scrollEndTimeout?: number
) => {
    const isScrollBehaviourDisabled = useRef(false);
    const setIsScrollBehaviorDisabled = (value: boolean) => {
        isScrollBehaviourDisabled.current = value;
    };

    const [scrollY, scrollYDirection, prevScrollY] = useVerticalScroll();

    const handleScroll = useCallback(() => {
        if (isScrollBehaviourDisabled.current || !headerDomElem) return;

        const step = scrollY - prevScrollY;

        if (scrollY > Number(Number(firstScreenHeight))) {
            if (scrollYDirection === VerticalScrollDirection.up) {
                showHeader(headerDomElem, step);
            } else {
                hideHeader(headerDomElem, step);
            }
        } else {
            hideHeader(headerDomElem, step);
        }
    }, [scrollY, scrollYDirection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    // fix for macOS bouncing scroll
    useEffect(() => {
        if (
            headerDomElem &&
            (scrollY <= 0 || scrollY >= getPageBottomScrollHeight())
        ) {
            hideHeader(
                headerDomElem,
                parseFloat(getComputedStyle(headerDomElem).height)
            );
        }
    }, [scrollY, headerDomElem, hideHeader]);

    // const [isCursorOnHeader, serIsCursorOnHeader] = useState(false);
    //
    // const handleMouseOver = useCallback(() => {
    //     if (headerDomElem && isHeaderInFinalPosition(headerDomElem)) {
    //         serIsCursorOnHeader(true);
    //         setIsScrollBehaviorDisabled(true);
    //     }
    // }, [setIsScrollBehaviorDisabled]);
    //
    // const handleMouseLeave = useCallback(() => {
    //     serIsCursorOnHeader(false);
    //     setIsScrollBehaviorDisabled(false);
    // }, [setIsScrollBehaviorDisabled]);
    //
    // useEffect(() => {
    //     headerDomElem?.addEventListener('mouseover', handleMouseOver);
    //     headerDomElem?.addEventListener('mouseleave', handleMouseLeave);
    //
    //     return () => {
    //         headerDomElem?.removeEventListener('mouseover', handleMouseOver);
    //         headerDomElem?.addEventListener('mouseleave', handleMouseLeave);
    //     };
    // }, [handleMouseOver, handleMouseLeave]);

    useWindowScrollEnd(() => {
        //if (isScrollBehaviourDisabled.current && !isCursorOnHeader) {
        if (isScrollBehaviourDisabled.current) {
            setIsScrollBehaviorDisabled(false);
        }
    }, scrollEndTimeout || 200);

    return {
        isScrollBehaviourDisabled,
        setIsScrollBehaviorDisabled,
        showHeader,
        hideHeader,
    };
};
