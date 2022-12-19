import { useCallback, useEffect, useState } from 'react';
import { isBrowser } from '../isBrowser';

export enum VerticalScrollDirection {
    initial = 'initial',
    down = 'down',
    up = 'up',
}

export interface ScrollTop {
    current: number;
    previous: number;
}

export function useVerticalScroll(): [ScrollTop, VerticalScrollDirection] {
    const initialScrollY = isBrowser() ? window.scrollY : 0;

    const [scrollTop, setScrollTop] = useState<ScrollTop>({
        current: initialScrollY,
        previous: initialScrollY,
    });

    const [verticalScrollDirection, setVerticalScrollDirection] = useState(
        VerticalScrollDirection.initial
    );

    const handleScroll = useCallback(() => {
        if (
            window.scrollY > scrollTop.current &&
            verticalScrollDirection !== VerticalScrollDirection.down
        ) {
            setVerticalScrollDirection(VerticalScrollDirection.down);
        } else if (
            window.scrollY < scrollTop.current &&
            verticalScrollDirection !== VerticalScrollDirection.up
        ) {
            setVerticalScrollDirection(VerticalScrollDirection.up);
        }
        if (scrollTop.current !== window.scrollY) {
            setScrollTop({
                current: window.scrollY,
                previous: scrollTop.current,
            });
        }
    }, [scrollTop, verticalScrollDirection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return [scrollTop, verticalScrollDirection];
}
