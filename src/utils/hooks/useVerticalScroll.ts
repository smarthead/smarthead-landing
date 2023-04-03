import { useEffect, useReducer } from 'react';
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

    const scrollReducer = (state: ScrollTop): ScrollTop => {
        const partState = {
            current: window.scrollY,
            previous: state.current,
        };

        if (window.scrollY > state.current) {
            return {
                ...partState,
                direction: VerticalScrollDirection.down,
            };
        } else if (window.scrollY < state.current) {
            return {
                ...partState,
                direction: VerticalScrollDirection.up,
            };
        } else {
            return state;
        }
    };

    const [scrollTop, dispatch] = useReducer(scrollReducer, {
        current: initialScrollY,
        previous: initialScrollY,
        direction: VerticalScrollDirection.initial,
    });

    useEffect(() => {
        const handleScroll = () => {
            dispatch();
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollTop;
}
