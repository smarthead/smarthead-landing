import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

export enum VerticalScrollDirection {
    initial = 'initial',
    down = 'down',
    up ='up',
}

export function useVerticalScroll(): [number, VerticalScrollDirection] {
    const initialScrollY = typeof window !== "undefined" ? window.scrollY : 0; // for gatsby build

    const [lastScrollTop, setLastScrollTop] = useState(initialScrollY);
    const [verticalScrollDirection, setVerticalScrollDirection] = useState(VerticalScrollDirection.initial);

    const handleScrollDirection = useCallback(() => {
        if (window.scrollY > lastScrollTop){
            setVerticalScrollDirection(VerticalScrollDirection.down);
        } else if (window.scrollY < lastScrollTop){
            setVerticalScrollDirection(VerticalScrollDirection.up);
        }
    },[lastScrollTop]);

    const handleLastScrollTop = useDebounce(() => {
        console.log('DEBOUNCED', window.scrollY);
        if (lastScrollTop !== window.scrollY) {
            setLastScrollTop(window.scrollY);
        }
    }, 100);

    useEffect(() => {
        window.addEventListener("scroll", handleLastScrollTop);
        window.addEventListener("scroll", handleScrollDirection);

        return () => {
            window.removeEventListener("scroll", handleLastScrollTop);
            window.removeEventListener("scroll", handleScrollDirection);
        }
    }, [handleLastScrollTop, handleScrollDirection]);


    return [lastScrollTop, verticalScrollDirection];
}
