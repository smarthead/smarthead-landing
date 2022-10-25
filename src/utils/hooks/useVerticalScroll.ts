import { useCallback, useEffect, useState } from 'react';

export enum VerticalScrollDirection {
    initial = 'initial',
    down = 'down',
    up ='up',
}

export function useVerticalScroll(): [number, VerticalScrollDirection] {
    const initialScrollY = typeof window !== "undefined" ? window.scrollY : 0; // for gatsby build

    const [lastScrollTop, setLastScrollTop] = useState(initialScrollY);
    const [verticalScrollDirection, setVerticalScrollDirection] = useState(VerticalScrollDirection.initial);

    const handleScroll = useCallback(() => {
        if (window.scrollY > lastScrollTop){
            setVerticalScrollDirection(VerticalScrollDirection.down);
        } else if (window.scrollY < lastScrollTop){
            setVerticalScrollDirection(VerticalScrollDirection.up);
        }

        if (lastScrollTop !== window.scrollY) {
            setLastScrollTop(window.scrollY);
        }
    },[lastScrollTop]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);

    return [lastScrollTop, verticalScrollDirection];
}