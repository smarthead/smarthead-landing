import {
    useVerticalScroll,
    VerticalScrollDirection,
} from '../../../utils/hooks/useVerticalScroll';
import { useCallback, useEffect, useRef } from 'react';
import { useWindowScrollEnd } from '../../../utils/hooks/useWindowScrollEnd';

const SCROLL_STEP = 4;

const showHeader = (headerDomElem: HTMLElement, step: number = SCROLL_STEP) => {
    if (headerDomElem) {
        const styles = getComputedStyle(headerDomElem);
        const previousTopValue = parseFloat(styles.top);
        console.log(previousTopValue);

        if (previousTopValue > 0) return;
        const currentTopValue = previousTopValue + step;

        if (currentTopValue > 0) {
            headerDomElem.style.top = `0px`;
        } else {
            headerDomElem.style.top = `${currentTopValue.toFixed(1)}px`;
        }
    }
};

const hideHeader = (headerDomElem: HTMLElement, step: number = SCROLL_STEP) => {
    if (headerDomElem) {
        const styles = getComputedStyle(headerDomElem);
        const headerHeight = parseFloat(styles.height);
        const previousTopValue = parseFloat(styles.top);
        console.log(previousTopValue);

        if (previousTopValue < headerHeight * -1) return;
        const currentTopValue = previousTopValue - step;

        if (currentTopValue < headerHeight * -1) {
            headerDomElem.style.top = `-${headerHeight}px`;
        } else {
            headerDomElem.style.top = `${currentTopValue.toFixed(1)}px`;
        }
    }
};

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

    const [scrollY, scrollYDirection] = useVerticalScroll();

    const handleScroll = useCallback(() => {
        if (isScrollBehaviourDisabled.current || !headerDomElem) return;

        if (scrollY > Number(Number(firstScreenHeight))) {
            if (scrollYDirection === VerticalScrollDirection.up) {
                showHeader(headerDomElem);
            } else {
                hideHeader(headerDomElem);
            }
        } else {
            hideHeader(headerDomElem);
        }
    }, [scrollY, scrollYDirection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

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

    useWindowScrollEnd(() => {
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
