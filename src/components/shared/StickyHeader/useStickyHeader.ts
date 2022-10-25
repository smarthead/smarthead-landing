import { useVerticalScroll, VerticalScrollDirection } from '../../../utils/hooks/useVerticalScroll';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowScrollEnd } from '../../../utils/hooks/useWindowScrollEnd';

export const useStickyHeader = (firstScreenHeight: number | null, scrollEndTimeout?: number) => {
    const isScrollBehaviourDisabled = useRef(false);
    const setIsScrollBehaviorDisabled = (value: boolean) => {
        isScrollBehaviourDisabled.current = value;
    }

    const [scrollY, scrollYDirection] = useVerticalScroll();
    const [isStickyHeaderShown, setIsStickyHeaderShown] = useState(false);

    const handleScroll = useCallback(() => {
        if (isScrollBehaviourDisabled.current) return;

        if (scrollY > Number(Number(firstScreenHeight))) {
            if (scrollYDirection === VerticalScrollDirection.up) {
                setIsStickyHeaderShown(true);
            } else {
                setIsStickyHeaderShown(false);
            }
        } else {
            setIsStickyHeaderShown(false);
        }
    },[scrollY, scrollYDirection]);

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

    return { isStickyHeaderShown, isScrollBehaviourDisabled, setIsScrollBehaviorDisabled }
};