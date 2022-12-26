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
    direction: VerticalScrollDirection;
}

export function useVerticalScroll(): ScrollTop {
    const initialScrollY = isBrowser() ? window.scrollY : 0;

    const [scrollTop, setScrollTop] = useState<ScrollTop>({
        current: initialScrollY,
        previous: initialScrollY,
        direction: VerticalScrollDirection.initial,
    });

    const handleScroll = useCallback(() => {
        if (window.scrollY > scrollTop.current) {
            setScrollTop({
                current: window.scrollY,
                previous: scrollTop.current,
                direction: VerticalScrollDirection.down,
            });
        } else if (window.scrollY < scrollTop.current) {
            setScrollTop({
                current: window.scrollY,
                previous: scrollTop.current,
                direction: VerticalScrollDirection.up,
            });
        }
    }, [scrollTop]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return scrollTop;
}
