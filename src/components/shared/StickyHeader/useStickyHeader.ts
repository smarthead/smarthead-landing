import {
    useVerticalScroll,
    VerticalScrollDirection,
} from '../../../utils/hooks/useVerticalScroll';
import { useCallback, useEffect, useRef } from 'react';
import { useWindowScrollEnd } from '../../../utils/hooks/useWindowScrollEnd';

const SCROLL_STEP = 4;

const showHeader = (headerDomElem: HTMLElement) => {
    if (headerDomElem) {
        const styles = getComputedStyle(headerDomElem);

        const previousTopValue = parseFloat(styles.top);
        console.log('previousTopValue', previousTopValue);
        if (previousTopValue > 0) return;

        const currentTopValue = previousTopValue + SCROLL_STEP;
        console.log('currentTopValue', currentTopValue);

        if (currentTopValue > 0) {
            headerDomElem.style.top = `0px`;
        } else {
            headerDomElem.style.top = `${currentTopValue.toFixed(1)}px`;
        }
    }
};

const hideHeader = (headerDomElem: HTMLElement) => {
    if (headerDomElem) {
        const styles = getComputedStyle(headerDomElem);

        const headerHeight = parseFloat(styles.height);

        const previousTopValue = parseFloat(styles.top);
        console.log('previousTopValue', previousTopValue);

        if (previousTopValue < headerHeight * (-1)) return;

        const currentTopValue = previousTopValue - SCROLL_STEP;
        console.log('currentTopValue', currentTopValue);

        if (currentTopValue < headerHeight * (-1)) {
            console.log(-headerHeight)
            headerDomElem.style.top = `-${headerHeight}px`;
        } else {
            headerDomElem.style.top = `${currentTopValue.toFixed(1)}px`;
        }
    }
};

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

    useWindowScrollEnd(() => {
        if (isScrollBehaviourDisabled.current) {
            setIsScrollBehaviorDisabled(false);
        }
    }, scrollEndTimeout || 200);

    return {
        isScrollBehaviourDisabled,
        setIsScrollBehaviorDisabled,
    };
};
