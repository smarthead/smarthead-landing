import { useCallback, useEffect, useState } from 'react';
import { isBrowser } from '../isBrowser';

export enum VerticalScrollDirection {
    initial = 'initial',
    down = 'down',
    up = 'up',
}

export function useVerticalScroll(): [number, VerticalScrollDirection, number] {
    const initialScrollY = isBrowser() ? window.scrollY : 0;

    const [lastScrollTop, setLastScrollTop] = useState(initialScrollY);
    const [prevScrollTop, setPrevScrollTop] = useState(initialScrollY);

    const [verticalScrollDirection, setVerticalScrollDirection] = useState(
        VerticalScrollDirection.initial
    );

    const handleScroll = useCallback(() => {
        if (
            window.scrollY > lastScrollTop &&
            verticalScrollDirection !== VerticalScrollDirection.down
        ) {
            setVerticalScrollDirection(VerticalScrollDirection.down);
        } else if (
            window.scrollY < lastScrollTop &&
            verticalScrollDirection !== VerticalScrollDirection.up
        ) {
            setVerticalScrollDirection(VerticalScrollDirection.up);
        }
        if (lastScrollTop !== window.scrollY) {
            setPrevScrollTop(lastScrollTop);
            setLastScrollTop(window.scrollY);
        }
    }, [lastScrollTop, verticalScrollDirection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return [lastScrollTop, verticalScrollDirection, prevScrollTop];
}
