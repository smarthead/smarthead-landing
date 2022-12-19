import {
    useVerticalScroll,
    VerticalScrollDirection,
} from '../../../../utils/hooks/useVerticalScroll';
import { useCallback, useEffect, useRef } from 'react';
import { useWindowScrollEnd } from '../../../../utils/hooks/useWindowScrollEnd';
import { showStickyHeader } from './showStickyHeader';
import { hideStickyHeader } from './hideStickyHeader';
import { useFixStickyHeaderMacOSscroll } from './useFixStickyHeaderMacOSscroll';

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

    useFixStickyHeaderMacOSscroll(headerDomElem, scrollY);

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
