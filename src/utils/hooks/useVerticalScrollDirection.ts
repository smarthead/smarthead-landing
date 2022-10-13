import { useCallback, useEffect, useState } from 'react';

export enum VerticalScrollDirection {
    initial = 'initial',
    down = 'down',
    up ='up',
}

export function useVerticalScrollDirection() {
    const [lastScrollTop, setLastScrollTop] = useState(window.scrollY);
    const [verticalScrollDirection, setVerticalScrollDirection] = useState(VerticalScrollDirection.initial)

    const handleScroll = useCallback(() => {
        if (window.scrollY > lastScrollTop){
            setVerticalScrollDirection(VerticalScrollDirection.down);
        } else {
            setVerticalScrollDirection(VerticalScrollDirection.up);
        }
        setLastScrollTop(window.scrollY)
    },[lastScrollTop]);

    useEffect(() => {
        setLastScrollTop(window.scrollY);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);

    return verticalScrollDirection;
}